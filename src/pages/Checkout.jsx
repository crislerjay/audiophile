import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext, useState } from 'react';
import useCartStore from '../store/cartStore';
import { useNavigate } from 'react-router-dom';
import { computeTotal } from '../utils/cartUtils'
import codIcon from '../assets/images/checkout/icon-cash-on-delivery.svg'
import { ModalContext } from '../context/ModalContext'
import Modal from '../components/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  phoneNumber: yup.number().positive('Phone number must be a positive number').integer('Phone number must be an integer').required('Phone number is required'),
  address: yup.string().required('Address is required'),
  zipcode: yup.number().positive('Zipcode must be a positive number').integer('Zipcode must be an integer').required('Zipcode number is required'),
  city: yup.string().required('City is required'),
  country: yup.string().required('Country is required'),

  paymentMethod: yup.string().required('Please select an option'),
  // Additional fields for option1
  eMoneyNumber: yup.string().when('paymentMethod', {
    is: 'e-money',
    then: () => yup.number().positive('e-Money Number must be a positive number').integer('e-Money Number must be an integer').required('e-Money Number is required'),
  }),
  eMoneyPIN: yup.string().when('paymentMethod', {
    is: 'e-money',
    then: () => yup.number().positive('e-Money PIN must be a positive number').integer('e-Money PIN must be an integer').required('e-Money PIN number is required'),
  }),
});

export default function Checkout() {
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const { total, vat, shipping, overallTotal } = computeTotal(cart);
  const { isModalOpen, ModalToggle } = useContext(ModalContext);
  const notify = () => toast.success('THANK YOU FOR YOUR ORDER', { autoClose: 3000 });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      choice: 'cod',
    },
  });

  const onSubmit = (data) => {
    ModalToggle()
    notify()
  };

  const [selectedMethod, setSelectedMethod] = useState('cod'); 

  const handleChoiceChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <>
    <div className="checkout">
      <div className="wrap">
        <p className='text-02 text-dark-gray back-btn' onClick={() => navigate(-1)}>Go Back</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="checkout-form">
            <h2 className="title-02">Checkout</h2>
            <div className="form-group">
              <p className="text-02 text-orange">BILLING DETAILS</p>
              <div>
                <div className="flex-01">
                  <label htmlFor="name">Name</label>
                  {errors.name && <p className='error-message'>{errors.name.message}</p>}
                </div>
                <input className={errors.name ? 'error' : ''} placeholder="Alexie Ward" id="name" type="text" {...register('name')} />
              </div>

              <div>
                <div className="flex-01">
                  <label htmlFor="email">Email</label>
                  {errors.email && <p className='error-message'>{errors.email.message}</p>}
                </div>
                <input className={errors.email ? 'error' : ''} placeholder="alexei@mail.com" id="email" type="text" {...register('email')} />
              </div>

              <div>
                <div className="flex-01">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  {errors.phoneNumber && <p className='error-message'>{errors.phoneNumber.message}</p>}
                </div>
                <input className={errors.phoneNumber ? 'error' : ''} placeholder="+1 202-555-0136" id="phoneNumber" type="number" {...register('phoneNumber')} />
              </div>
            </div>
            
            <div className="form-group">
              <p className="text-02 text-orange">SHIPPING INFO</p>
              <div className='full'>
                <div className="flex-01">
                  <label htmlFor="address">Adress</label>
                  {errors.address && <p className='error-message'>{errors.address.message}</p>}
                </div>
                <input className={errors.address ? 'error' : ''} placeholder="1137 Williams Avenue" id="address" type="text" {...register('address')} />
              </div>

              <div>
                <div className="flex-01">
                  <label htmlFor="phoneNumber">Zipcode</label>
                  {errors.zipcode && <p className='error-message'>{errors.zipcode.message}</p>}
                </div>
                <input className={errors.zipcode ? 'error' : ''} placeholder="10001" id="zipcode" type="number" {...register('zipcode')} />
              </div>

              <div>
                <div className="flex-01">
                  <label htmlFor="city">City</label>
                  {errors.city && <p className='error-message'>{errors.city.message}</p>}
                </div>
                <input className={errors.city ? 'error' : ''} placeholder="1137 Williams Avenue" id="city" type="text" {...register('city')} />
              </div>

              <div>
                <div className="flex-01">
                  <label htmlFor="address">Country</label>
                  {errors.country && <p className='error-message'>{errors.country.message}</p>}
                </div>
                <input className={errors.country ? 'error' : ''} placeholder="1137 Williams Avenue" id="country" type="text" {...register('country')} />
              </div>
            </div>
          
            <div className="form-group">
              <p className="text-02 text-orange">PAYMENT DETAILS</p>
              <div className='payment-method'>
                <label>Payment Method</label>
                <div className="form-radio-group">
                  <div className='form-radio'>
                    <label htmlFor="e-money">
                      <input
                        id="e-money"
                        type="radio"
                        value="e-money"
                        {...register('paymentMethod')}
                        onChange={handleChoiceChange}
                      />
                      e-Money
                    </label>
                  </div>
                  <div className='form-radio'>
                    <label htmlFor="cod">
                      <input
                        id="cod"
                        type="radio"
                        value="cod"
                        {...register('paymentMethod')}
                        onChange={handleChoiceChange}
                        defaultChecked
                      />
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                {errors.paymentMethod && <p className='error-message'>{errors.paymentMethod.message}</p>}
              </div>

              {selectedMethod === 'e-money' && (
                <>
                  <div>
                    <div className="flex-01">
                      <label htmlFor="eMoneyNumber">e-Money Number</label>
                      {errors.eMoneyNumber && <p className='error-message'>{errors.eMoneyNumber.message}</p>}
                    </div>
                    <input className={errors.zipcode ? 'error' : ''} id="eMoneyNumber" type="text" {...register('eMoneyNumber')} />
                  </div>
                  <div>
                    <div className="flex-01">
                      <label htmlFor="eMoneyPIN">e-Money PIN</label>
                      {errors.eMoneyPIN && <p className='error-message'>{errors.eMoneyPIN.message}</p>}
                    </div>
                    <input className={errors.zipcode ? 'error' : ''} id="eMoneyPIN" type="text" {...register('eMoneyPIN')} />
                  </div>
                </>
              )}
              {selectedMethod === 'cod' && (
                <div className='cod-info'>
                  <p className='cod-image'><img src={codIcon} alt="icon-cash-on-delivery" />  </p>
                  <p className='text-02 text-dark-gray'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                </div>
              )}
            </div>
          </div>
          <div className="checkout-summary cart">
            {cart.length ?
              <div>
                <p className="title-03">SUMMARY</p>
                <ul className='item-list'>
                  {cart.map((item) => (
                    <li key={item.id} className='item'>
                      <div className="flex-01">
                        <div className=" flex-01">
                          <p className='item-image'><img src={item.cartImage} alt={item.name} /></p>
                          <div>
                          <p className='text-02 text-black'>{item.shortName}</p>
                          <p className='text-02 text-dark-gray'>${item.price}</p>
                        </div>
                        </div>
                        <div className="text-02 text-dark-gray">x{item.quantity}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex-01">
                  <p className='text-02 text-dark-gray'>TOTAL</p>
                  <p className='title-06'>${total}</p>
                </div>
                <div className="flex-01">
                  <p className='text-02 text-dark-gray'>SHIPPING</p>
                  <p className='title-06'>${shipping}</p>
                </div>
                <div className="flex-01">
                  <p className='text-02 text-dark-gray'>VAT (INCLUDED)</p>
                  <p className='title-06'>${vat}</p>
                </div>
                <div className="flex-01">
                  <p className='text-02 text-dark-gray'>GRAND TOTAL</p>
                  <p className='title-06 text-orange'>${overallTotal}</p>
                </div>
                <button className='btn btn-orange btn-full' type="submit">CONTINUE AND PAY</button>
              </div> :
              <p className="text-02 text-dark-gray empty">Your cart is empty!</p>
            }
          </div>
        </form>
      </div>
    </div>
    {isModalOpen ? <Modal open={'openConfirmation'} /> : null}
    </>
  )
}
