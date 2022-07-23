import React from "react"
import Hero01 from "./Hero01"

const Hero = ({ variant = "1", ...props }) => {
  const Components = {
    1: Hero01,
  }

  const Component = Components[variant]
  return <Component {...props} />
}

export default Hero
