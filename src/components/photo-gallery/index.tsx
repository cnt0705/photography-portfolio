import React, { useCallback, useState } from 'react'
import Gallery, { PhotoProps } from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

type Props = {
  photos: PhotoProps[]
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
      <Gallery photos={photos} onClick={openLightbox} />
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
