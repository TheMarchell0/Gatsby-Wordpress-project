import React, { FC } from "react"

interface PlatformProps {
  data: {
    title: {
      firstRedText: string
      secondBlackText: string
    }
    image: {
      sourceUrl: string
      altText: string
    }
    firstDescription: string
    secondDescription: string
  }
}

const Platform: FC<PlatformProps> = ({ data }) => {

  return <>
    <p><span>{data.title.firstRedText}</span> {data.title.secondBlackText}</p>
    <p>{data.firstDescription}</p>
    <p>{data.secondDescription}</p>
  </>
}

export default Platform