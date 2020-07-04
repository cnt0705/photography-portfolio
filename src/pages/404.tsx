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
      {
        // https://github.com/gatsbyjs/gatsby/issues/9214#issuecomment-431073612
        RoughNotation && (
          <RoughNotation
            animationDelay={'hoge'}
            padding={20}
            show={true}
            strokeWidth={1}
            type="box"
            css={goBackHomeLink}
          >
            Go Back Home
          </RoughNotation>
        )
      }
      <Link to="/" css={goBackHomeLink}>
        Go Back Home
      </Link>
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
  position: relative;
  width: 170px;
  margin-top: 70px;
  font-size: 2.4rem;

  ${mq.desktop} {
    margin-top: 100px;
    font-size: 2.8rem;
  }
`

const goBackHomeLink = css`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
`

export default NotFoundPage
