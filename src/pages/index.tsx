import React, { useMemo } from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import BackgroundImage from 'gatsby-background-image'
import { css } from '@emotion/core'

import { Layout } from 'layouts'
import { mq } from 'styles/media-queries'
import ShinyaKato from 'assets/sk.svg'
import ChinatsuKato from 'assets/ck.svg'

import { TopQuery, TopPhotoFragment } from '../../types/graphql-types' // TODO: Path
import { randomPick } from 'utils/random-pick'

type Props = {
  data: TopQuery
}

const Page: React.FC<Props> = ({ data }) => {
  const { photo } = useMemo(
    () => randomPick<TopPhotoFragment>(data.allContentfulTop.nodes),
    [data]
  )

  return (
    <Layout>
      <div css={container}>
        {photo?.fluid && (
          <BackgroundImage css={image} fluid={photo.fluid}>
            <Link to="/shinya/gallery" css={shinya}>
              <ShinyaKato />
            </Link>
            <Link to="/chinatsu/gallery" css={chinatsu}>
              <ChinatsuKato />
            </Link>
          </BackgroundImage>
        )}
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
  fragment TopPhoto on ContentfulTop {
    photo {
      fluid {
        src
        srcSet
        aspectRatio
      }
      title
    }
  }

  query Top {
    allContentfulTop {
      nodes {
        ...TopPhoto
      }
    }
  }
`

export default Page
