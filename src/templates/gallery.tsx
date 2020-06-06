import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import { css } from '@emotion/core'

import { Layout } from 'layouts'
import SiteName from 'assets/sc.svg'
import { PhotoGallery } from 'components/photo-gallery'
import { mq } from 'styles/media-queries'

import { GalleryQuery } from '../../types/graphql-types' // TODO: Path
import { useGallery } from 'hooks/useGallery'

type PageContext = { photographer: string; instagram: string }

type Props = {
  data: GalleryQuery
  pageContext: PageContext
}

const Template: React.FC<Props> = ({ data, pageContext }) => {
  const photos = useGallery(data.allContentfulGallery.nodes)

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
            <PhotoGallery photos={photos} />
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
  fragment GalleryPhoto on ContentfulGallery {
    photo {
      fixed {
        height
        width
        srcSet
        src
      }
    }
    id
    title
  }

  query Gallery($photographer: String) {
    allContentfulGallery(
      filter: { photographer: { name: { eq: $photographer } } }
    ) {
      nodes {
        ...GalleryPhoto
      }
    }
  }
`

export default Template
