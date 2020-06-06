import { GalleryPhotoFragment } from '../../types/graphql-types'
import { useMemo } from 'react'

export const useGallery = (photos: GalleryPhotoFragment[]) => {
  return useMemo(
    () =>
      photos.map(p => ({
        alt: p.title ?? '',
        src: p.photo?.fixed?.src ?? '',
        srcSet: p.photo?.fixed?.srcSet ?? [],
        width: p.photo?.fixed?.width ?? 0,
        height: p.photo?.fixed?.height ?? 0,
      })),
    [photos]
  )
}
