import { GalleryQuery } from '../../types/graphql-types' // TODO: Path

export const useGallery = (photos: GalleryQuery) => {
  return photos.allContentfulGallery.edges.map(p => {
    return {
      alt: p.node.title ?? '',
      src: p.node.photo?.file?.url ?? '',
      width: p.node.photo?.file?.details?.image?.width ?? 0,
      height: p.node.photo?.file?.details?.image?.height ?? 0,
    }
  })
}
