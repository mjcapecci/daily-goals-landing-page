module.exports = {
  siteMetadata: {
    title: `Daily Goal Reminders`,
    description: `The macOS app for staying on top of your schedule every day.`,
    author: `@mjcapecci`,
    siteUrl: `https://dailygoalreminders.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-172973540-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
