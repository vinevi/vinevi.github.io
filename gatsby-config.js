require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
	siteTitle: `AlpacaNox`,
    siteTitleAlt: `AlpacaNox`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
		  { title: `Projects`,
			slug: `/projects`
		  },
		  { title: `Runs`,
			slug: `/runs`
		  }
        ],
        externalLinks: [
          {
            name: `YouTube`,
            url: `https://www.youtube.com/channel/UC0sP-02IzeacQ4UERBO_xpA`,
          },
          {
            name: `Discord`,
            url: `https://discordapp.com/users/Alpaca#3603`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `alpacanox-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `alpacanox-blog`,
        description: `Personal blog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
