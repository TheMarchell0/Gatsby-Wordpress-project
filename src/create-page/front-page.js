const path = require(`path`)

const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
  wpPage(isFrontPage: {in: true}) {
    id
    title
    uri
    isFrontPage
    homeFields {
      heroSection {
        bookACall
        description
        seeCases
        title {
          firstBlackText
          secondRedText
          thirdBlackText
        }
        firstImage {
          sourceUrl
          altText
        }
        secondImage {
          sourceUrl
          altText
        }
      }
      clientsImages {
        image1 {
          altText
          sourceUrl
        }
        image2 {
          altText
          sourceUrl
        }
        image3 {
          altText
          sourceUrl
        }
        image4 {
          altText
          sourceUrl
        }
        image5 {
          altText
          sourceUrl
        }
        image6 {
          altText
          sourceUrl
        }
        image7 {
          altText
          sourceUrl
        }
      }
    }
  }
}

`

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const fetchData = async () => {
    return await graphql(GET_FRONT_PAGE).then(({ data }) => {
      return { page: data.wpPage }
    })
  }

  await fetchData().then(({ page }) => {
    createPage({
      path: page.uri,
      component: path.resolve(`./src/templates/front-page.tsx`),
      context: {
        id: page.id,
        isFrontPage: page.isFrontPage,
        fields: page.homeFields,
      },
    })
  })
}
