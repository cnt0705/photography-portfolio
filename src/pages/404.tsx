import React from 'react'
import Link from 'gatsby-link'
import { css } from '@emotion/core'

import { RoughNotation } from 'react-rough-notation'

import NotFound from 'assets/not-found.svg'
import { mq } from 'styles/media-queries'

const NotFoundPage = () => (
  <div css={container}>
    <NotFound />
    <p css={pageNotFound}>Page Not Found</p>
    <p css={goBackHome}>
      <RoughNotation
        animationDelay={750}
        padding={20}
        show={true}
        strokeWidth={1}
        type="box"
      >
        <Link to="/">Go Back Home</Link>
      </RoughNotation>
    </p>
  </div>
)

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #111;
  color: #fff;
`

const pageNotFound = css`
  margin-top: 30px;
  font-size: 1.4rem;

  ${mq.desktop} {
    font-size: 1.8rem;
  }
`

const goBackHome = css`
  margin-top: 70px;
  font-size: 2.4rem;

  ${mq.desktop} {
    margin-top: 100px;
    font-size: 2.8rem;
  }
`

export default NotFoundPage
