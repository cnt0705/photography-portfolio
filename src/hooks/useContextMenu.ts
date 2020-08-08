import { useCallback } from 'react'

export const useContextMenu = () => {
  const disableContextMenu = useCallback<React.MouseEventHandler<HTMLElement>>(
    event => {
      event.preventDefault()
    },
    []
  )

  // console.log()

  return {
    disableContextMenu,
  }
}
