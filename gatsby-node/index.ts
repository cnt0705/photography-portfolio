import path from 'path'
import { GatsbyNode } from 'gatsby'

export const createPages: GatsbyNode['createPages'] = ({
  graphql,
  actions: { createPage },
}) => {
  const photographers = ['shinya', 'chinatsu']

  for (let photographer of photographers) {
    createPage({
      path: `/${photographer}/gallery`,
      component: path.resolve('src/templates/gallery.tsx'),
      context: { photographer },
    })
  }
}
