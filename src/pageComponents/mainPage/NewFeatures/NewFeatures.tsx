import React, { FC } from "react"

interface NewFeaturesProps {
    data: {
        headHashtag: string
        title: string
        firstDescription: string
        firstImage: {
            altText: string
            sourceUrl: string
        }
        secondDescription: string
        madeInText: string
        secondImage: {
            altText: string
            sourceUrl: string
        }
    }
}

const NewFeatures: FC<NewFeaturesProps> = ({ data }) => {

  return <>
    <p>{data.headHashtag}</p>
    <p>{data.title}</p>
    <p>{data.firstDescription}</p>
    <p>{data.secondDescription}</p>
    <p>{data.madeInText}</p>

  </>
}

export default NewFeatures