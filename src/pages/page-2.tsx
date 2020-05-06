import React from 'react'
import { graphql } from 'gatsby'

import { PhotosQuery } from '../../graphql-types'

type Props = {
  data: PhotosQuery
}

const SecondPage: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      {data.allContentfulPhoto.nodes.map(({ image }) => (
        <p>{image.file.url}</p>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query Photos {
    allContentfulPhoto {
      nodes {
        image {
          file {
            url
          }
        }
      }
    }
  }
`

export default SecondPage
