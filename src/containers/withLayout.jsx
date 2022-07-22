import React from "react"

const withLayout = Component => {
  return props => {
    return (
      <div>
        <Component />
      </div>
    )
  }
}

export default withLayout
