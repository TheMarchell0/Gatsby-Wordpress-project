import React, { FC } from "react"

interface AdvantagesProps {
    data: {
        title: string
        firstCard: {
            title: string
            image: {
                altText: string
                sourceUrl: string
            }
            firstDescription: string
            secondDescription: string
        }
        secondCard: {
            title: string
            image: {
                altText: string
                sourceUrl: string
            }
            firstDescription: string
            secondDescription: string
        }
        thirdCard: {
            title: string
            image: {
                altText: string
                sourceUrl: string
            }
            firstDescription: string
            secondDescription: string
        }
    }
}

const Advantages: FC<AdvantagesProps> = ({ data }) => {

  return <>
    <p>{data.title}</p>
    <p>{data.firstCard.title}</p>
    <p>{data.firstCard.firstDescription}</p>
    <p>{data.firstCard.secondDescription}</p>
    <p>{data.secondCard.title}</p>
    <p>{data.secondCard.firstDescription}</p>
    <p>{data.secondCard.secondDescription}</p>
    <p>{data.thirdCard.title}</p>
    <p>{data.thirdCard.firstDescription}</p>
    <p>{data.thirdCard.secondDescription}</p>

  </>
}

export default Advantages