import React, { FC } from "react"
import MainLayout from "../layouts/MainLayout"
import { Hero } from "../pageComponents/mainPage/Hero"
import { Platform } from "../pageComponents/mainPage/Platform"
import { Business } from "../pageComponents/mainPage/Business"
import { Advantages } from "../pageComponents/mainPage/Advantages"
import { NewFeatures } from "../pageComponents/mainPage/NewFeatures"
import { AudioInfo } from "../pageComponents/mainPage/AudioInfo"
import { Release } from "../pageComponents/mainPage/Release"

const FrontPageTemplate = ({ pageContext }) => {
  const { headerLogo,
          heroSection,
          clientsImages,
          onePlatformSection,
          coreBusinessSection,
          advantagesSection,
          newFeatureSection,
          audioInfoSection,
          releaseSection} = pageContext.fields
          console.log(headerLogo)

  return (
    <MainLayout>
      <Hero data={heroSection} />
      <Platform data={onePlatformSection}/>
      <Business data={coreBusinessSection}/>
      <Advantages data={advantagesSection}/>
      <NewFeatures data={newFeatureSection}/>
      <AudioInfo data={audioInfoSection}/>
      <Release data={releaseSection}/>
    </MainLayout>
  )
}
export default FrontPageTemplate
