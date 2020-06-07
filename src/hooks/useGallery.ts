import { useMemo } from 'react'
import { PhotoProps } from 'react-photo-gallery'

import { GalleryPhotoFragment } from '../../types/graphql-types'

export const useGallery = (photos: GalleryPhotoFragment[]) => {
  return useMemo<PhotoProps[]>(
    () =>
      photos.map(p => ({
        alt: p.title ?? '',
        src: p.photo?.file?.url ?? '',
        width: p.photo?.file?.details?.image?.width ?? 0,
        height: p.photo?.file?.details?.image?.height ?? 0,
      })),
    [photos]
  )
}
