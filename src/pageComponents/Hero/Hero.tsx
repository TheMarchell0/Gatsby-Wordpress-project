import React, { FC } from "react"

interface HeroProps {}

const Hero: FC<any> = props => {
  console.log("hero", props.data)

  return <h1>{props.data.title}</h1>
}

export default Hero
