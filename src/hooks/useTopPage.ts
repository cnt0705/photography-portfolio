import { useMemo } from 'react'

import { TopQuery, TopPhotoFragment } from '../../types/graphql-types'
import { isNonNullable } from 'utils/type-guard'
import { randomPick } from 'utils/random-pick'

export const useTopPage = (data: TopQuery) => {
  const photos = data.contentfulTop?.photos
  if (!photos) return undefined

  return useMemo(() => {
    const photo = randomPick<TopPhotoFragment>(photos.filter(isNonNullable))
    return photo.photo?.fluid
  }, [data])
}
