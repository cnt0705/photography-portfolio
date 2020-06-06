import React from 'react'
import Gallery, { PhotoProps } from 'react-photo-gallery'

type Props = {
  photos: PhotoProps[]
}

export const PhotoGallery: React.FC<Props> = ({ photos }) => {
  return <Gallery photos={photos} />
}
