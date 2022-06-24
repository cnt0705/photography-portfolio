import React from 'react'
import { Helmet } from 'react-helmet'
import { useContextMenu } from 'hooks/useContextMenu'

export const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const { disableContextMenu } = useContextMenu()

  return (
    <div onContextMenu={disableContextMenu}>
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
    </div>
  )
}
