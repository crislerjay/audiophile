import { useParams } from 'react-router-dom';
import data from '../data/products.json';
import Category from '../components/Category';
import CategoryList from '../components/CategoryList';
import AudioGear from '../components/AudioGear';
import NotFound from './NotFound';

export default function Categories() {
  let { slug } = useParams();
  const product = data.products.filter(product => product.category === slug)

  if (product.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      <div className="category-header">
        <h2 className="title-02">{slug}</h2>
      </div>
      <div className="wrap">
        <Category product={product}/>
        <CategoryList />
        <AudioGear />
      </div>
    </>
  )
}
