import React from "react"

const CardVariant01 = props => {
  console.log("props", props)
  return (
    <div style={{ border: "2px solid red" }}>
      {props?.title}
      CardVariant01
    </div>
  )
}

export default CardVariant01
