import path from 'path'
import { GatsbyNode } from 'gatsby'

type SiteMetadataQuery = {
  site: {
    siteMetadata: {
      photographers: string[]
    }
  }
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
}) => {
  const result = await graphql<SiteMetadataQuery>(query)
  if (result.errors) {
    throw result.errors
  }

  const { siteMetadata } = result.data.site
  if (!siteMetadata || !siteMetadata.photographers) {
    throw new Error('Photographers are undefined')
  }

  for (let photographer of siteMetadata.photographers) {
    createPage({
      path: `/${photographer}/gallery`,
      component: path.resolve('src/templates/gallery.tsx'),
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
