import React from "react"
import * as styles from "./Tab.module.scss"

const Tab = ({ username, email, phone, website }) => {
  return (
    <div className={styles.tab__body}>
      <div>
        <h3>{username}</h3>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
      </div>
    </div>
  )
}

export default Tab
