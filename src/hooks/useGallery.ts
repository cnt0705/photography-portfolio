import { GalleryPhotoFragment } from '../../types/graphql-types'

export const useGallery = (photos: GalleryPhotoFragment[]) => {
  return photos.map(p => {
    return {
      alt: p.title ?? '',
      src: p.photo?.fixed?.src ?? '',
      srcSet: p.photo?.fixed?.srcSet ?? [],
      width: p.photo?.fixed?.width ?? 0,
      height: p.photo?.fixed?.height ?? 0,
    }
  })
}
