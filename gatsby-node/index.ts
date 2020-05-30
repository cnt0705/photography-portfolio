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

  for (let photographer of siteMetadata.photographers) {
    createPage({
      path: `/${photographer}/gallery`,
      component: path.resolve('src/templates/gallery/index.tsx'),
      context: { photographer },
    })
  }
}

const query = `
  query SiteMetadataQuery {
    site {
      siteMetadata {
        photographers
      }
    }
  }
`
