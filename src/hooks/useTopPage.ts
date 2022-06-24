import { useMemo } from 'react'

import { isNonNullable } from 'utils/type-guard'
import { randomPick } from 'utils/random-pick'

import { TopQuery } from 'types/graphql'
import { getImage, ImageDataLike } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'

export const useTopPage = (data: TopQuery) => {
  const photos = data.contentfulTop?.photos
  if (!photos) return undefined

  return useMemo(() => {
    const photo = randomPick(photos.filter(isNonNullable))

    // tmp
    const image = getImage(photo.photo as ImageDataLike)
    const bgImage = convertToBgImage(image)

    return bgImage
  }, [data])
}
