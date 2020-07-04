import { useMemo } from 'react'
import { PhotoProps } from 'react-photo-gallery'

import { GalleryQuery } from '../../types/graphql'
import { isNonNullable } from 'utils/type-guard'

export const useGalleryPage = (data: GalleryQuery) => {
  const photos = data.contentfulGallery?.photos
  if (!photos) return undefined

  return useMemo<PhotoProps[]>(
    () =>
      photos.filter(isNonNullable).map(p => ({
        alt: p.title ?? '',
        src: p.photo?.file?.url ?? '',
        width: p.photo?.file?.details?.image?.width ?? 0,
        height: p.photo?.file?.details?.image?.height ?? 0,
      })),
    [photos]
  )
}
