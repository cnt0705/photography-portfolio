import React from 'react'
import { graphql } from 'gatsby'

type Props = {
  data: GatsbyTypes.PhotosQuery
}

const SecondPage: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      {data.allContentfulPhoto.nodes.map(photo => {
        return <img src={photo.image?.file?.url} alt="" />
      })}
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
