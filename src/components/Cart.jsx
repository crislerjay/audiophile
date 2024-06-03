import useCartStore from '../store/cartStore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';
import { ModalContext } from '../context/ModalContext'
import { useContext } from 'react';
import { computeTotal } from '../utils/cartUtils'

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const notify = () => toast.success('Item removed from the cart!', { autoClose: 3000 });
  const notifyClearCart = () => toast.success('Cart cleared!', { autoClose: 3000 });
  const notifyEmptyCart = () => toast.error('Your cart is empty!', { autoClose: 3000 });
  const navigate = useNavigate();
  const { closeModal } = useContext(ModalContext);
  const { total } = computeTotal(cart);

  const handleOnCheckout = () => {
    if (cart.length) {
      navigate('/checkout')
      closeModal()
    } else {
      notifyEmptyCart()
    }
  }

  const handleDecreaseQuantity = (itemID, itemCount) => {
    decreaseQuantity(itemID)
    if (itemCount == 1)  notify()
  }

  const handleClearCart = () => {
    if (cart.length) {
      notifyClearCart()
      clearCart()
    }
  }

  return (
    <div className='cart'>
      <div className="flex-01">
        <p className='title-06'>Cart ({cart.length})</p>
        <p className="clear-cart text-02 text-dark-gray" onClick={() => handleClearCart()}>Remove all</p>
      </div>

      {cart.length ?
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
                <div className="quantity">
                  <div className="quantity-content flex-01">
                    <button className='button-control' onClick={() => handleDecreaseQuantity(item.id, item.quantity)}>-</button>
                    <p className='quantityCount'>{item.quantity}</p>
                    <button className='button-control' onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul> :
        <p className="text-02 text-dark-gray empty">Your cart is empty!</p>
      }

      <div className="flex-01">
        <p className='text-02 text-dark-gray'>TOTAL</p>
        <p className='title-06'>${total}</p>
      </div>
      <p><button onClick={handleOnCheckout} className='btn btn-orange btn-full'>CHECKOUT</button></p> 
    </div>
  )
}
