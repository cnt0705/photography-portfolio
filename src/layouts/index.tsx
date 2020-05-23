import React from 'react'
import Helmet from 'react-helmet'

export const Layout: React.FC<{}> = ({ children }) => (
  <>
    <Helmet
      title="Kato Photography"
      meta={[
        { name: 'description', content: 'Kato Photography' },
        { name: 'keywords', content: 'Kato Photography' },
      ]}
    />
    {children}
  </>
)
