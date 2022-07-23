import React, { useState } from "react"
import { data } from "./data"
import * as styles from "./Tabs.module.scss"
import Tab from "./TabBody/Tab"

const Tabs = () => {
  const [index, setIndex] = useState(0)

  const handleIndex = idx => {
    setIndex(idx)
  }

  return (
    <div className={styles.tab}>
      <ul className={styles.tab__heading}>
        {data.map(({ name }, idx) => {
          return (
            <li
              onClick={() => handleIndex(idx)}
              data-variant={index === idx ? "active" : ""}
            >
              {name}
            </li>
          )
        })}
      </ul>

      <Tab {...data[index]} />
    </div>
  )
}

export default Tabs
