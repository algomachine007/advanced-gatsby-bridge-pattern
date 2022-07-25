import React, { useState } from "react"

import Tabs from "@/components/Tabs/Tabs"
import Accordion from "../Accordion/Accordion"
import { information as data } from "./../Accordion/data"
import useExpanded from "../Accordion/hooks/useExpanded"
import useEffectAfterMount from "../Accordion/hooks/useEffectAfterMount"

const CardVariant01 = props => {
  const [activeIndex, setActiveIndex] = useState(null)
  const onExpand = evt => {
    setActiveIndex(evt.target.dataset.index)
  }

  const { expanded, toggle, getTogglerProps } = useExpanded()

  // useEffectAfterMount(() => {
  //   // user can perform any side effect here 👇
  //   console.log("Yay! button was clicked!!")
  // }, [expanded])

  const customClickHandler = () => {
    console.log("custom click handler!!!!!")
  }

  return (
    <div style={{ border: "2px solid red" }}>
      <div style={{ border: "2px solid red", padding: 50 }}>
        {data.map(({ header, note }, idx) => {
          return (
            <Accordion
              shouldExpand={idx === +activeIndex} //the "+" converts the activeIndex to a number
              onExpand={onExpand}
              key={idx}
            >
              <Accordion.Header expanded={expanded} data-index={idx}>
                {header}
              </Accordion.Header>
              <Accordion.Icon expanded={expanded} />
              <Accordion.Body expanded={expanded}>
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

      <div>
        <button
          {...getTogglerProps({
            id: "my-button-id",
            "aria-label": "custom-toggler",
            onClick: customClickHandler,
          })}
        >
          {expanded ? "Expand" : "Collapse"}
        </button>
      </div>
    </div>
  )
}

export default CardVariant01
