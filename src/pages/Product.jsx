import { useParams } from 'react-router-dom';
import data from '../data/products.json';
import CategoryList from '../components/CategoryList';
import AudioGear from '../components/AudioGear';
import Gallery from '../components/Gallery';
import RelatedProducts from '../components/RelatedProducts';
import NotFound from './NotFound';
import Features from '../components/Features';
import ProductDetails from '../components/ProductDetails';

export default function Product() {
  let { slug } = useParams();
  const product = data.products.find(product => product.slug === slug)
  
  if (!product) {
    return <NotFound />;
  }

  return (
    <>
    <div className="wrap">
      <ProductDetails product={product}/>
      <Features features={product.features} includedItems={product.includedItems}/>
      <Gallery galleryImages={product.gallery}/>
        <RelatedProducts others={product.others}/>
        <CategoryList />
        <AudioGear />
    </div>
    </>
  )
}
