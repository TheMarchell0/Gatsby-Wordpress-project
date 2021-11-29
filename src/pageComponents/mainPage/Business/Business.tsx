import React, { FC } from "react"

interface BusinessProps {
    data: {
        title: string
        forRadioStationsBlock: {
            title: string
            description: string
            buttonText: string
        }
        forBrandsBlock: {
            title: string
            description: string
            buttonText: string
        }
    }
}

const Business: FC<BusinessProps> = ({ data }) => {

  return <>
    <p>{data.title}</p>
    <p>{data.forRadioStationsBlock.title}</p>
    <p>{data.forRadioStationsBlock.description}</p>
    <p>{data.forRadioStationsBlock.buttonText}</p>
    <p>{data.forBrandsBlock.title}</p>
    <p>{data.forBrandsBlock.description}</p>
    <p>{data.forBrandsBlock.buttonText}</p>
  </>
}

export default Business