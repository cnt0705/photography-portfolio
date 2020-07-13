import path from 'path'
import { GatsbyNode } from 'gatsby'

import { ContentfulPhotographerConnection } from 'types/graphql'

type GalleryTemplate = {
  allContentfulPhotographer: ContentfulPhotographerConnection
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
}) => {
  const result = await graphql<GalleryTemplate>(query)

  if (result.errors || !result.data) {
    throw result.errors
  }

  const photographers = result.data.allContentfulPhotographer.nodes
  if (photographers.length === 0) {
    throw new Error('Photographers are undefined')
  }

  for (const p of photographers) {
    if (!p) continue

    createPage({
      path: `/${p.slug}/gallery`,
      component: path.resolve('src/templates/gallery.tsx'),
      context: { photographer: p.name, instagram: p.instagram },
    })
  }
}

const query = `
  query GalleryTemplate {
    allContentfulPhotographer {
      nodes {
        name
        slug
        instagram
      }
    }
  }
`
