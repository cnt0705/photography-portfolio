import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import { css } from '@emotion/core'
import Gallery from 'react-photo-gallery'

import { GalleryQuery } from '../../../types/graphql-types' // TODO: Path
import { useGallery } from './hooks/useGallery'

import { Layout } from 'layouts'
import { mq } from 'styles/media-queries'
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
      <div css={container}>
        <div css={containerInner}>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px;
  background-color: #fff;
  color: #888;

  ${mq.desktop} {
    flex-direction: column;
    align-items: flex-start;
    width: 280px;
    padding: 0 20px;
    background-color: inherit;
  }
`

const siteTitle = css`
  line-height: 1;
`

const photographer = css`
  line-height: 1;
  font-size: 1.8rem;
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
