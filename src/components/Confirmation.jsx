import { useEffect } from 'react';
import checkIcon from '/assets/images/checkout/icon-order-confirmation.svg'
import {useLocation, useNavigate} from 'react-router-dom';

export default function Confirmation() {
  const navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    if (!location.state) {
      navigate('/')
    }
  }, [])

  return (
    <>
    <div className="confirmation">
      <p><img src={checkIcon} alt="check icon" /></p>
      <h2 className="title-02">THANK YOU<br/>FOR YOUR ORDER</h2>
      <p className="text-02 text-dark-gray">You will receive an email confirmation shortly.</p>
      <div className="purchase">
        <ul className='purchase-list'>
          {location.state?.cart.map((item) => (
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
        <div className="purchase-total">
        <p className='text-02 text-gray'>GRAND TOTAL</p>
          <p className='title-06'>${location.state?.overallTotal}</p>
        </div>
      </div>
    </div>
    </>
  )
}
