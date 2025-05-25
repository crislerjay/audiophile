import { Link } from 'react-router-dom'
import earphones from '/assets/images/categories/image-category-thumbnail-earphones.png'
import headphones from '/assets/images/categories/image-category-thumbnail-headphones.png'
import speakers from '/assets/images/categories/image-category-thumbnail-speakers.png'
import { NavContext } from '../context/NavContext'
import { useContext } from 'react'

export default function CategoryList() {
  const { closeNav } = useContext(NavContext);

  return (
    <div className="categoryList">
      <div className="category-item">
        <p className="category-img"><img src={headphones} alt="headphone" /></p>
        <div className="category-content">
          <p className="category-title">HEADPHONES</p>
          <p><Link onClick={closeNav} to="/category/headphones" className='btn-02'>SHOP</Link></p> 
        </div>
      </div>
      <div className="category-item">
        <p className="category-img"><img src={speakers} alt="speaker" /></p>
        <div className="category-content">
          <p className="category-title">SPEAKERS</p>
          <p><Link onClick={closeNav} to="/category/speakers" className='btn-02'>SHOP</Link></p>
        </div>
      </div>
      <div className="category-item">
        <p className="category-img"><img src={earphones} alt="earphone" /></p>
        <div className="category-content">
          <p className="category-title">EARPHONES</p>
          <p><Link onClick={closeNav} to="/category/earphones" className='btn-02'>SHOP</Link></p> 
        </div>
      </div>
    </div>
  )
}
