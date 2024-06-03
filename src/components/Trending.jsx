import speakerDesktop from '../assets/images/home/desktop/image-speaker-zx9.png'
import speakerTablet from '../assets/images/home/tablet/image-speaker-zx9.png'
import speakerMobile from '../assets/images/home/mobile/image-speaker-zx9.png'
import earphoneDesktop from '../assets/images/home/desktop/image-earphones-yx1.jpg'
import earphoneTablet from '../assets/images/home/tablet/image-earphones-yx1.jpg'
import earphoneMobile from '../assets/images/home/mobile/image-earphones-yx1.jpg'

export default function Trending() {
  return (
    <div className='trending'>
      <div className="trending-item01">
        <p className="item-image">
          <picture >
            <source
              srcSet={speakerDesktop} media='(min-width: 769px)' />
            <source
              srcSet={speakerTablet} media='(min-width: 576px)' />
            <img alt='ZX9 SPEAKER' src={speakerMobile} />
          </picture>
        </p>
        <div className="item-content">
          <p className="title-01">ZX9 < br className='hide-on-tablet'/>SPEAKER</p>
          <p className="text-02">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <p><a href="/product/zx9-speaker" className="btn btn-dark">SEE PRODUCT</a></p>
        </div>
      </div>
      <div className="trending-item02">
        <p className="title-04">ZX7 SPEAKER</p>
        <p><a href="/product/zx7-speaker" className="btn btn-white">SEE PRODUCT</a></p>
      </div>
      <div className="trending-item03">
        <p className="item-image">
          <picture >
            <source
              srcSet={earphoneDesktop} media='(min-width: 769px)' />
            <source
              srcSet={earphoneTablet} media='(min-width: 576px)' />
            <img alt='YX1 EARPHONES' src={earphoneMobile} />
          </picture>
        </p>
        <div className="item-content">
          <p className="title-04">YX1 EARPHONES</p>
          <p><a href="/product/yx1-earphones" className="btn btn-white">SEE PRODUCT</a></p>
        </div>
      </div>
    </div>
  )
}
