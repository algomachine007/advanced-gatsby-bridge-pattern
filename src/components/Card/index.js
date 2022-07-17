import React from "react"
import CardVariant01 from "./CardVariant01"
import CardVariant03 from "./CardVariant03"

const Card = ({ variant = "1", ...rest }) => {
  console.log("rest in props", rest)
  const ShowCard = {
    1: CardVariant01,
    3: CardVariant03,
  }

  const ShowCardComponent = ShowCard[variant]
  return <ShowCardComponent {...rest} />
}

export default Card
