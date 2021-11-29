const path = require(`path`)

const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
  wpPage(isFrontPage: {in: true}) {
    id
    title
    uri
    isFrontPage
    homeFields {
      headerLogo
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
      onePlatformSection {
                title {
                    firstRedText
          secondBlackText
        }
        image {
                    altText
          sourceUrl
        }
        firstDescription
        secondDescription
      }
      coreBusinessSection {
                title
        forRadioStationsBlock {
                    title
          description
          buttonText
        }
        forBrandsBlock {
                    title
          description
          buttonText
        }
      }
      advantagesSection {
                title
        firstCard {
                    title
          image {
                        altText
            sourceUrl
          }
          firstDescription
          secondDescription
        }
        secondCard {
                    title
          image {
                        altText
            sourceUrl
          }
          firstDescription
          secondDescription
        }
        thirdCard {
                    title
          image {
                        altText
            sourceUrl
          }
          firstDescription
          secondDescription
        }
      }
      newFeatureSection {
                headHashtag
        title
        firstDescription
        firstImage {
                    altText
          sourceUrl
        }
        secondDescription
        madeInText
        secondImage {
                    altText
          sourceUrl
        }
      }
      audioInfoSection {
                image {
                    altText
          sourceUrl
        }
        firstDescription 
        secondDescription
      }
      releaseSection {
                title
        description
        buttonText
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
