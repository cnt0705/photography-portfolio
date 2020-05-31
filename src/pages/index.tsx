import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import { TopQuery } from '../../types/graphql-types' // TODO: Path
import { randomPick } from 'utils/random-pick'

import { Layout } from 'layouts'

type Props = {
  data: TopQuery
}

const Page: React.FC<Props> = ({ data }) => {
  const photo = randomPick(data.allContentfulTop.nodes)

  return (
    <Layout>
      <p>
        <Link to="/shinya/gallery">Shinya</Link>
      </p>
      <p>
        <Link to="/chinatsu/gallery">Chinatsu</Link>
      </p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Top {
    allContentfulTop {
      nodes {
        title
        photo {
          file {
            url
          }
        }
      }
    }
  }
`

export default Page
