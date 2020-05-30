import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import { css } from '@emotion/core'
import Gallery from 'react-photo-gallery'

import { Layout } from 'layouts'

// TODO: Path
import { PhotosQuery } from '../../types/graphql-types'

type Props = {
  data: PhotosQuery
}

const Template: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <nav css={nav}>
        <Link to="/" css={siteTitle}>
          SC
        </Link>
        <div css={photographer}>
          <span css={photographerName}>Shinya Kato</span>
          <a href="https://www.instagram.com" target="_blank" rel="noopener">
            Instagram
          </a>
        </div>
      </nav>
      <div css={gallery}>
        <Gallery
          photos={[
            {
              alt: 'something',
              src:
                '//images.ctfassets.net/kdaqouviun2r/4faQpP0nSC0hx6qm5zsc1V/83ea7bc7cc4329dcc109da842357f3de/Screen_Shot_2020-05-23_at_15.20.30.png',
              width: 1162,
              height: 874,
            },
            {
              alt: 'something',
              src:
                '//images.ctfassets.net/kdaqouviun2r/7eKhZ5ZFDkqXUbMYzOPkTX/ce9be6cf8117a2c4d335bee4f9ddb437/Background.png',
              width: 1440,
              height: 1086,
            },
          ]}
        />
      </div>
    </Layout>
  )
}

const nav = css`
  display: flex;
  justify-content: space-between;
  padding: 50px 30px;
  color: #888;
`

const siteTitle = css``

const photographer = css`
  font-size: 1.8rem;
`

const photographerName = css`
  margin-right: 10px;
`

const gallery = css`
  padding: 30px;
  background: #222;
`

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
