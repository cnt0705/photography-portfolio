require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Kato Photography`,
    // TODO: Manage them on CMS
    photographers: ['shinya', 'chinatsu'],
  },
  plugins: [
    `gatsby-alias-imports`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `src/types/graphql-types.d.ts`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
