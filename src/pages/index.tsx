import React from 'react'
import Link from 'gatsby-link'

import { Layout } from 'layouts'

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Page: React.FC<Props> = props => (
  <Layout>
    <p>{props.data.site.siteMetadata.title} site.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Page
