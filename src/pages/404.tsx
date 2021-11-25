import React from "react"
import { graphql } from "gatsby"

const NotFoundPage = ({ data, location }: any) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div title={siteTitle}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
