import React from 'react'
import { graphql } from 'gatsby'
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
    <p>
      <Link to="/shinya/gallery">Shinya</Link>
    </p>
    <p>
      <Link to="/chinatsu/gallery">Chinatsu</Link>
    </p>
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
