module.exports = {
  siteMetadata: {
    title: `jb.log`,
    description: `gojaebeom's development blog`,
    author: `@gojaebeom`,
    siteUrl: `https://gojaebeom.github.io`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    // `gatsby-plugin-react-helmet`,
    // `gatsby-transformer-remark`,
    // `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
}
