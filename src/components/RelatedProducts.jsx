import { Link } from 'react-router-dom'

export default function RelatedProducts({others}) {
  return (
    <div className='related-products'>
      <h2 className="title-02">YOU MAY ALSO LIKE</h2>
      <div className="related-products-list">
        {others && others.map((product) => (
          <div className="related" key={product.name}>
            <picture >
              <source
                srcSet={product.image.desktop} media='(min-width: 769px)' />
              <img className='' alt={product.name}
                src={product.image.mobile} />
            </picture>
            <h3 className="title-03">{product.name}</h3>
            <p><Link className='btn btn-orange' to={`/product/${product.slug}`}>SEE PRODUCT</Link></p>
          </div>
        ))}
      </div>
    </div>
  )
}
