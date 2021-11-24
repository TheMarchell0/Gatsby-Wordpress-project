const path = require(`path`)

const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
  allWpPage {
    edges {
      page: node {
        id
        uri
      }
    }
  }
}
`
// const GET_FRONT_PAGE = `query MyQuery {
//   pageBy(uri: "home") {
//     id
//     title
//     uri
//   }
// }
// query MyQuery {
//   pageBy(uri: "home") {
//     id
//     title
//     uri
//   }
// }
// `;

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  // const fetchData = async () => {
  //   return await graphql(GET_FRONT_PAGE).then(({ data }) => {
  //     const page = data.allWpPage.edges.find(item => {
  //       if (item.uri.includes("home")) {
  //         return item
  //       }
  //     })
  //     return { pageData: page }
  //   })
  // }

  // await fetchData().then(({ pageData }) => {
  // createPage({
  //   path: `/`,
  //   component: path.resolve("./src/templates/front-page/index.tsx"),
  //   context: {
  //     pageData: "as",
  //   },
  // })
  // })
}
