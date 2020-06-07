import React from 'react'
import Helmet from 'react-helmet'

export const Layout: React.FC<{}> = ({ children }) => (
  <>
    <Helmet
      title="SC PHOTOGRAPHY"
      meta={[
        {
          name: 'description',
          content: 'We are photographers based in Japan.',
        },
        { name: 'keywords', content: 'photography, photo, picture, camera' },
      ]}
    />
    {children}
  </>
)
