import { useEffect, useState } from 'react';
import useCartStore from '../store/cartStore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ProductDetails({product}) {
  const [quantity, setQuantity] = useState(1)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
  const notify = () => toast.success('Added to cart!', { autoClose: 3000 });
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (product, quantity) => {
    addToCart(product, quantity)
    notify()
    setIsButtonDisabled(true)
    setTimeout(() => {
      setIsButtonDisabled(false)
    }, 3000);
  };

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1)
    }
  }

  useEffect(() => {
    setQuantity(1)
  }, [location]);

  return (
    <>
    <div className="product-container">
      <p className='text-02 text-dark-gray back-btn' onClick={() => navigate(-1)}>Go Back</p>
      <div className='product' key={product.id}>
        <div className="product-image">
          <picture >
            <source
              srcSet={product.image.desktop} media='(min-width: 769px)' />
            <img alt={product.name} src={product.image.mobile} />
          </picture>
        </div>
        <div className="product-details">
          {product.new ? <p className='text-01 text-orange'>NEW PRODUCT</p> : ''}
          <h2 className="title-02">{product.name}</h2>
          <p className="text-02 text-dark-gray">{product.description}</p>
          <p className="title-06">$ {product.price}</p>
          <div className="quantity">
            <div className="quantity-content flex-01">
              <button className='button-control' onClick={handleDecrease}>-</button>
              <p className='quantityCount'>{quantity}</p>
              <button className='button-control' onClick={handleIncrease}>+</button>
            </div>
            <p><button className='btn btn-orange' disabled={isButtonDisabled} onClick={ () => { handleClick(product, quantity)} }>ADD TO CART</button></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
