import React from "react"

const CardVariant02 = props => {
  console.log("props", props)
  return (
    <div style={{ border: "2px solid green" }}>
      {props?.title}
      CardVariant02
    </div>
  )
}

export default CardVariant02
