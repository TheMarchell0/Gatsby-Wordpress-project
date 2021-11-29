import React, { FC } from "react"
import Img from 'gatsby-plugin-image'
interface HeroProps {
  data: {
    bookACall: string
    description: string
    seeCases: string
    title: {
      firstBlackText: string
      secondRedText: string
      thirdBlackText: string
    }
    firstImage: {
      sourceUrl: string
      altText: string
    }
    secondImage: {
      sourceUrl: string
      altText: string
    }
  }
}

const Hero: FC<HeroProps> = ({ data }) => {

  return <>
    <h1>
      {data.title.firstBlackText} <span>{data.title.secondRedText}</span>{" "}
      {data.title.thirdBlackText}
    </h1>
    <p>{data.description}</p>
    <p>{data.bookACall}</p>
    <p>{data.seeCases}</p>
    <img src={data.firstImage.sourceUrl} alt={data.firstImage.altText}/>
    <img src={data.secondImage.sourceUrl} alt={data.secondImage.altText}/>
  </>
}

export default Hero
