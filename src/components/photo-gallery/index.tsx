import React, { useCallback, useState } from 'react'
import Gallery, { PhotoProps, RenderImageProps } from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

type Props = {
  photos: PhotoProps[]
}

const imageRenderer = ({ photo, index }: RenderImageProps) => {
  return (
    <LazyLoadImage
      alt={photo.alt}
      effect="blur"
      height={photo.height}
      key={index}
      src={photo.src}
      width={photo.width}
    />
  )
}

export const PhotoGallery: React.FC<Props> = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((_event, { index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <>
      <Gallery
        onClick={openLightbox}
        photos={photos}
        renderImage={imageRenderer}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(p => ({
                source: p.src,
                caption: p.alt,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}
