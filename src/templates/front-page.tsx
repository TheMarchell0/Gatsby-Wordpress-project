import React from "react"
import { Hero } from "../pageComponents/Hero"

const FrontPageTemplate = ({ pageContext }) => {
  const { heroSection } = pageContext.fields

  return (
    <>
      <Hero data={heroSection} />
    </>
  )
}
export default FrontPageTemplate
