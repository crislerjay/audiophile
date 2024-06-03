export default function Gallery({galleryImages}) {
  return (
    <div className="gallery">
      <div className="gallery-group">
        <div className="gallery-first">
          <picture >
            <source
              srcSet={galleryImages.first.desktop} media='(min-width: 769px)' />
            <source
              srcSet={galleryImages.first.tablet} media='(min-width: 576px)' />
            <img className='' alt='related products'
              src={galleryImages.first.mobile} />
          </picture>
        </div>
        <div className="gallery-second">
          <picture >
            <source
              srcSet={galleryImages.second.desktop} media='(min-width: 769px)' />
            <source
              srcSet={galleryImages.second.tablet} media='(min-width: 576px)' />
            <img className='' alt='related products'
              src={galleryImages.second.mobile} />
          </picture>
        </div>
      </div>
      <div className="gallery-third">
        <picture >
          <source
            srcSet={galleryImages.third.desktop} media='(min-width: 769px)' />
          <source
            srcSet={galleryImages.third.tablet} media='(min-width: 576px)' />
          <img className='' alt='related products'
            src={galleryImages.third.mobile} />
        </picture>
      </div>
    </div>
  )
}
