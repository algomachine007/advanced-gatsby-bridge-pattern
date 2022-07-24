import React from "react"

const Button = ({ onClick, className, text, ...rest }) => {
  return (
    <button {...rest} onClick={onClick} className={className}>
      {text}
    </button>
  )
}

export default Button
