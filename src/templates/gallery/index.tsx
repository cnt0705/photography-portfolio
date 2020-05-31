import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import { css } from '@emotion/core'
import Gallery from 'react-photo-gallery'

import { GalleryQuery } from '../../../types/graphql-types' // TODO: Path
import { useGallery } from './hooks/useGallery'

import { Layout } from 'layouts'
import SiteName from './assets/sc.svg'

type PageContext = { photographer: string; instagram: string }

type Props = {
  data: GalleryQuery
  pageContext: PageContext
}

const Template: React.FC<Props> = ({ data, pageContext }) => {
  const photos = useGallery(data)

  return (
    <Layout>
      <nav css={nav}>
        <Link to="/" css={siteTitle}>
          <SiteName />
        </Link>
        <a
          href={`https://www.instagram.com/${pageContext.instagram}`}
          target="_blank"
          rel="noopener"
          css={photographer}
        >
          #{pageContext.photographer}Kato
        </a>
      </nav>
      <div css={gallery}>
        <Gallery photos={photos} />
      </div>
    </Layout>
  )
}

const nav = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px;
  color: #888;
`

const siteTitle = css`
  line-height: 1;
`

const photographer = css`
  line-height: 1;
  font-size: 1.8rem;
  letter-spacing: 2px;
`

const gallery = css`
  padding: 30px;
  background: #222;
`

export const pageQuery = graphql`
  query Gallery($photographer: String) {
    allContentfulGallery(
      filter: { photographer: { name: { eq: $photographer } } }
    ) {
      edges {
        node {
          id
          title
          photo {
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
  }
`

export default Template
