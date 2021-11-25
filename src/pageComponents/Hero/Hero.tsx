import React, { FC } from "react"

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
  console.log("hero", data)

  return (
    <h1>
      {data.title.firstBlackText} <span>{data.title.secondRedText}</span>{" "}
      {data.title.thirdBlackText}
    </h1>
  )
}

export default Hero
