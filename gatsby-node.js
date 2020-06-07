/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

//console.log(slp.createWallet("wTest"))
exports.onCreateWebpackConfig = ({ actions, rules, getConfig }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}

