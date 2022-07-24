import React, { useState } from "react"

import Tabs from "@/components/Tabs/Tabs"
import Accordion from "../Accordion/Accordion"
import { information as data } from "./../Accordion/data"

const CardVariant01 = props => {
  const [activeIndex, setActiveIndex] = useState(null)
  const onExpand = evt => setActiveIndex(evt.target.dataset.index)

  return (
    <div style={{ border: "2px solid red" }}>
      <div style={{ border: "2px solid red", padding: 50 }}>
        {data.map(({ header, note }, idx) => {
          return (
            <Accordion
              //the "+" converts the activeIndex to a number
              shouldExpand={idx === +activeIndex}
              onExpand={onExpand}
              key={idx}
            >
              <Accordion.Header data-index={idx}>{header}</Accordion.Header>
              <Accordion.Icon />
              <Accordion.Body>
                <img
                  src="/api/collection/10370001/4597752283529216/page/5195905143668736/image/4691607934730240"
                  style={{ width: "250px" }}
                  alt="reintroducing react book cover"
                />
                <p style={{ opacity: 0.7 }}>
                  {note} <br />
                </p>
              </Accordion.Body>
            </Accordion>
          )
        })}
      </div>

      <Tabs />
    </div>
  )
}

export default CardVariant01
