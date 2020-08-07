import { GatsbyNode } from 'gatsby'
import { createPages } from './node/createPages'

const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  stage,
  loaders,
  actions,
}) => {
  // https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-rough-notation/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

export default {
  createPages,
  onCreateWebpackConfig,
}
