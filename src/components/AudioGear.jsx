import imgDesktop from '../assets/images/shared/desktop/image-best-gear.jpg'
import imgTablet from '../assets/images/shared/tablet/image-best-gear.jpg'
import imgMobile from '../assets/images/shared/mobile/image-best-gear.jpg'

export default function AudioGear() {
  return (
    <div className="audio-gear">
      <div className="audio-gear-img">
        <picture >
          <source
            srcSet={imgDesktop} media='(min-width: 769px)' />
          <source
            srcSet={imgTablet} media='(min-width: 576px)' />
          <img alt='best gear' src={imgMobile} />
        </picture>
      </div>
      <div className="audio-gear-details">
        <h2 className="title-02">BRINGING YOU THE <br /><span className="text-orange">BEST</span> AUDIO GEAR</h2>
        <p className="text-02 text-dark-gray">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
    </div>
  )
}
