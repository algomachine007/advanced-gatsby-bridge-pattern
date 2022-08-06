import React from "react"
import Header from "../Header/header"
import * as styles from "./Layout.module.scss"

const Layout = ({ children }) => {
  if (
    React.Children.map(children, child => {
      React.isValidElement(child) && child.type.name
    })
  ) {
    return (
      <div className={styles.layout}>
        <Header />
        {React.Children.map(children, child => {
          return React.isValidElement(child) && React.cloneElement(child)
        })}
      </div>
    )
  }
}

export default Layout
