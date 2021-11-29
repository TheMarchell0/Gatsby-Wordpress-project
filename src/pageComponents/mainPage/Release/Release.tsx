import React, { FC } from "react"

interface ReleaseProps {
    data: {
        title: string
        description: string
        buttonText: string
    }
}

const Release: FC<ReleaseProps> = ({ data }) => {

  return <>
    <p>{data.title}</p>
    <p>{data.description}</p>
    <p>{data.buttonText}</p>
  </>
}

export default Release