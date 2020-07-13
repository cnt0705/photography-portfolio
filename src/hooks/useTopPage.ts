import { useMemo } from 'react'

import { isNonNullable } from 'utils/type-guard'
import { randomPick } from 'utils/random-pick'

import { TopQuery, TopPhotoFragment } from 'types/graphql'

export const useTopPage = (data: TopQuery) => {
  const photos = data.contentfulTop?.photos
  if (!photos) return undefined

  return useMemo(() => {
    const photo = randomPick<TopPhotoFragment>(photos.filter(isNonNullable))
    return photo.photo?.fluid
  }, [data])
}
