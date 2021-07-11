/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import { css } from '@emotion/react'

import SiteName from 'images/sc.svg'
import { PhotoGallery } from 'components/photo-gallery'
import { useGalleryPage } from 'hooks/useGalleryPage'
import { Layout } from 'layouts'
import { mq } from 'styles/media-queries'

import { GalleryQuery } from 'types/graphql'

type PageContext = { photographer: string; instagram: string }

type Props = {
  data: GalleryQuery
  pageContext: PageContext
}

const Template: React.FC<Props> = ({ data, pageContext }) => {
  const photos = useGalleryPage(data)

  return (
    <Layout>
      <div css={container}>
        <div css={containerInner}>
          <nav css={nav}>
            <Link to="/" css={siteTitle}>
              <SiteName />
            </Link>
            <span css={andMore}>
              <a
                href={`https://www.instagram.com/${pageContext.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                #SeeMore{pageContext.photographer}sPortfolio
              </a>
            </span>
          </nav>
          <div css={gallery}>{photos && <PhotoGallery photos={photos} />}</div>
        </div>
      </div>
    </Layout>
  )
}

const container = css`
  background-color: #222;

  ${mq.desktop} {
    position: relative;
    z-index: 0;

    &::after {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 330px;
      background-color: #fff;
      content: '';
    }
  }
`

const containerInner = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${mq.desktop} {
    flex-direction: row;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    padding: 140px 0;
  }
`

const nav = css`
  padding: 40px 30px;
  background-color: #fff;
  color: #888;

  ${mq.desktop} {
    width: 300px;
    padding: 0 20px;
    background-color: inherit;
  }
`

const siteTitle = css`
  line-height: 1;
`

const andMore = css`
  display: block;
  margin-top: 20px;
  font-size: 1.6rem;
  letter-spacing: 2px;

  ${mq.desktop} {
    margin-top: 50px;
  }
`

const gallery = css`
  flex: 1;
  padding: 30px;

  ${mq.desktop} {
    padding: 0;
  }
`

export const pageQuery = graphql`
  fragment GalleryPhoto on ContentfulPhoto {
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

  query Gallery($photographer: String) {
    contentfulGallery(photographer: { name: { eq: $photographer } }) {
      photos {
        ...GalleryPhoto
      }
    }
  }
`

export default Template
