import { graphql } from 'gatsby'

export const query = graphql`
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
