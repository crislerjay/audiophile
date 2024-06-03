import { Link } from 'react-router-dom'
import CategoryList from "../components/CategoryList";
import Trending from '../components/Trending';
import AudioGear from '../components/AudioGear';

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <p className="text-01">NEW PRODUCT</p>
          <h1 className="title-01">XX99 MARK II<br /> HEADPHONES</h1>
          <p className="text-02 text-gray">Experience natural, lifelike audio and exceptional <br className='hide-on-mobile'/>build quality made for the passionate music <br className='pc-only'/>enthusiast.</p>
          <p><Link to='/product/xx99-mark-one-headphones' className="btn btn-orange">SEE PRODUCT</Link></p>
        </div>
      </div>
      <div className="wrap">
        <CategoryList />
        <Trending />
        <AudioGear />
      </div>
    </>
  )
}
