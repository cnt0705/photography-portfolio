import path from 'path'
import { GatsbyNode } from 'gatsby'

import { Site } from '../types/graphql-types'

type SiteMetadataQuery = {
  site: Site
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
}) => {
  const result = await graphql<SiteMetadataQuery>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }

  const { siteMetadata } = result.data.site
  if (!siteMetadata || !siteMetadata.photographers) {
    throw new Error('Photographers are undefined')
  }

  for (let p of siteMetadata.photographers) {
    if (!p) continue

    createPage({
      path: `/${p.slug}/gallery`,
      component: path.resolve('src/templates/gallery/index.tsx'),
      context: { photographer: p.name },
    })
  }
}

const query = `
  query SiteMetadataQuery {
    site {
      siteMetadata {
        photographers {
          name
          slug
        }
      }
    }
  }
`
