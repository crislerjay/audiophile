import { Link } from 'react-router-dom'

export default function Category({product}) {
  return (
    <div className='products-list'>
      {product.map((prod) => (
        <div className="product" key={prod.id}>
          <div className="product-image">
            <picture >
              <source
                srcSet={prod.image.desktop} media='(min-width: 769px)' />
              <img alt={prod.name} src={prod.image.mobile} />
            </picture>
          </div>
          <div className="product-details">
            {prod.new ? <p className='text-01 text-orange'>NEW PRODUCT</p> : ''}
            <h2 className="title-02">{prod.name}</h2>
            <p className="text-02 text-dark-gray">{prod.description}</p>
            <p><Link className='btn btn-orange mb3' to={`/product/${prod.slug}`}>SEE PRODUCT</Link></p>
          </div>
        </div>
      ))}
    </div>
  )
}
