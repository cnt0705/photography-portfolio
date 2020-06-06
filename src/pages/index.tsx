import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import { css } from '@emotion/core'

import { Layout } from 'layouts'
import { mq } from 'styles/media-queries'
import ShinyaKato from 'assets/sk.svg'
import ChinatsuKato from 'assets/ck.svg'

import { TopQuery, PhotoFragment } from '../../types/graphql-types' // TODO: Path
import { randomPick } from 'utils/random-pick'

type Props = {
  data: TopQuery
}

const Page: React.FC<Props> = ({ data }) => {
  const { photo } = randomPick<PhotoFragment>(data.allContentfulTop.nodes)

  return (
    <Layout>
      <div css={container}>
        <div
          css={image}
          style={{ backgroundImage: `url(${photo?.file?.url})` }}
        >
          <Link to="/shinya/gallery" css={shinya}>
            <ShinyaKato />
          </Link>
          <Link to="/chinatsu/gallery" css={chinatsu}>
            <ChinatsuKato />
          </Link>
        </div>
      </div>
    </Layout>
  )
}

const container = css`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #111;
`

const image = css`
  position: relative;
  width: 100%;
  height: 70%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const shinya = css`
  position: absolute;
  top: -30px;
  left: 30px;

  ${mq.desktop} {
    top: -60px;
    left: 120px;

    svg {
      width: 455px;
      height: auto;
    }
  }
`

const chinatsu = css`
  position: absolute;
  bottom: -30px;
  right: 30px;

  ${mq.desktop} {
    bottom: -60px;
    right: 120px;

    svg {
      width: 524px;
      height: auto;
    }
  }
`

export const pageQuery = graphql`
  fragment Photo on ContentfulTop {
    title
    photo {
      file {
        url
      }
    }
  }

  query Top {
    allContentfulTop {
      nodes {
        ...Photo
      }
    }
  }
`

export default Page
