import React from "react"
import CardVariant01 from "./CardVariant01"
import CardVariant02 from "./CardVariant02"
import CardVariant03 from "./CardVariant03"

const Card = ({ variant = "1", ...rest }) => {
  const ShowCard = {
    1: CardVariant01,
    2: CardVariant02,
    3: CardVariant03,
  }

  const ShowCardComponent = ShowCard[variant]
  return <ShowCardComponent {...rest} />
}

export default Card
