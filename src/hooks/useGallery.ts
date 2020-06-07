import { useMemo } from 'react'
import { PhotoProps } from 'react-photo-gallery'

import { GalleryPhotoFragment } from '../../types/graphql-types'

export const useGallery = (photos: GalleryPhotoFragment[]) => {
  return useMemo<PhotoProps[]>(
    () =>
      photos.map(p => ({
        alt: p.title ?? '',
        src: p.photo?.fluid?.src ?? '',
        srcSet: p.photo?.fluid?.srcSet ?? '',
        width: p.photo?.fluid?.aspectRatio ?? 1,
        height: 1,
      })),
    [photos]
  )
}
