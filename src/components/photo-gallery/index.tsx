/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useCallback, useState } from 'react'
import Gallery, {
  PhotoClickHandler,
  PhotoProps,
  RenderImageProps,
} from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { css } from '@emotion/react'

type Props = {
  photos: PhotoProps[]
}

const imageRenderer = ({ photo, index, onClick }: RenderImageProps) => {
  return (
    onClick && (
      <LazyLoadImage
        alt={photo.alt}
        css={image}
        effect="blur"
        height={photo.height}
        key={index}
        onClick={event => onClick(event, { index })}
        src={photo.src}
        width={photo.width}
      />
    )
  )
}

export const PhotoGallery: React.FC<Props> = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback<PhotoClickHandler>((_event, { index }) => {
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
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
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

const image = css`
  padding: 2px;

  &:hover {
    cursor: pointer;
  }
`
