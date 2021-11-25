import React, { FC } from "react"
import MainLayout from "../layouts/MainLayout"
import { Hero } from "../pageComponents/Hero"

const FrontPageTemplate = ({ pageContext }) => {
  const { heroSection, clientsImages } = pageContext.fields

  return (
    <MainLayout>
      <Hero data={heroSection} />
    </MainLayout>
  )
}
export default FrontPageTemplate
