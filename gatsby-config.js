module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/Knowledge management`,
      },
    },
  ],
  siteMetadata: {
    title: `Site title`,
  },
}
