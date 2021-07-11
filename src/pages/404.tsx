/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react'
import Link from 'gatsby-link'
import { css } from '@emotion/react'

import { RoughNotation } from 'react-rough-notation'

import NotFound from 'images/not-found.svg'
import { mq } from 'styles/media-queries'

const NotFoundPage = () => (
  <div css={container}>
    <NotFound />
    <p css={pageNotFound}>Page Not Found</p>
    <div css={goBackHome}>
      {
        <div css={goBackHomeLink}>
          <RoughNotation
            animationDelay={750}
            padding={20}
            show={true}
            strokeWidth={1}
            type="box"
          >
            Go Back Home
          </RoughNotation>
        </div>
      }
      <Link to="/" css={goBackHomeLink}>
        Go Back Home
      </Link>
    </div>
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
  width: 150px;
  margin-top: 70px;
  font-size: 2.4rem;
  text-align: center;

  ${mq.desktop} {
    width: 165px;
    margin-top: 100px;
    font-size: 2.6rem;
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
