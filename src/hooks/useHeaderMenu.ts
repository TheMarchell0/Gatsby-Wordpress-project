import { graphql, useStaticQuery } from "gatsby"

export function useHeaderMenu() {
  const { wpMenu } = useStaticQuery(graphql`
    query GET_HEADER_MENU {
      wpMenu(name: { eq: "Header" }) {
        id
        menuItems {
          items: nodes {
            label
            path
          }
        }
      }
    }
  `)

  return wpMenu.menuItems.items
}
