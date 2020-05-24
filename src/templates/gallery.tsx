import React from 'react'
import { graphql } from 'gatsby'
import Gallery from 'react-photo-gallery'

// TODO: Path
import { PhotosQuery } from '../../types/graphql-types'

type Props = {
  data: PhotosQuery
}

const Template: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>Hoge Hoge</h1>
      <Gallery
        photos={[
          {
            src:
              '//images.ctfassets.net/kdaqouviun2r/4faQpP0nSC0hx6qm5zsc1V/83ea7bc7cc4329dcc109da842357f3de/Screen_Shot_2020-05-23_at_15.20.30.png',
            width: 1162,
            height: 874,
          },
          {
            src:
              '//images.ctfassets.net/kdaqouviun2r/7eKhZ5ZFDkqXUbMYzOPkTX/ce9be6cf8117a2c4d335bee4f9ddb437/Background.png',
            width: 1440,
            height: 1086,
          },
        ]}
      />
    </div>
  )
}

export const pageQuery = graphql`
  query Photos {
    allContentfulPhoto(sort: { fields: updatedAt, order: DESC }) {
      nodes {
        image {
          file {
            url
            details {
              image {
                height
                width
              }
            }
          }
        }
      }
    }
  }
`

export default Template
