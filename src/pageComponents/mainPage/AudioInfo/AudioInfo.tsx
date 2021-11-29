import { first } from "lodash"
import React, { FC } from "react"

interface AudioInfoProps {
    data: {
        image: {
            altText: string
            sourceUrl: string
        }
        firstDescription: string
        secondDescription: string
    }
}

const AudioInfo: FC<AudioInfoProps> = ({ data }) => {

  return <>
    <p>{data.firstDescription}</p>
    <p>{data.secondDescription}</p>

  </>
}

export default AudioInfo