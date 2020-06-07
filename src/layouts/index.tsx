import React from 'react'
import Helmet from 'react-helmet'

export const Layout: React.FC<{}> = ({ children }) => (
  <>
    <Helmet
      title="SC PHOTOGRAPHY"
      meta={[
        { name: 'description', content: 'SC PHOTOGRAPHY' },
        { name: 'keywords', content: 'SC PHOTOGRAPHY' },
      ]}
    />
    {children}
  </>
)
