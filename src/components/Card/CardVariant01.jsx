import React, { useState } from "react"

import Tabs from "@/components/Tabs/Tabs"
import Accordion from "../Accordion/Accordion"
import { information as data } from "./../Accordion/data"
import useExpanded from "../Accordion/hooks/useExpanded"
import useEffectAfterMount from "../Accordion/hooks/useEffectAfterMount"
import Header from "../Accordion/Header"

const CardVariant01 = props => {
  const [activeIndex, setActiveIndex] = useState(null)
  const onExpand = evt => {
    setActiveIndex(evt.target.dataset.index)
  }

  const { expanded, toggle, getTogglerProps, resetDep, reset } =
    useExpanded(false)
  useEffectAfterMount(() => {
    console.log("reset was invoked!!!!")
  }, [resetDep])

  const customClickHandler = () => {
    return toggle()
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
                {note} <br />
                {note.length > 400 && <button onClick={reset}>Reset</button>}
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
          {expanded
            ? "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo repellat minima quam ab ipsam, nostrum sed enim reprehenderit fuga reiciendis, numquam porro cum perferendis modi saepe consequuntur, sapiente repudiandae aut."
                .length > 50 && <button onClick={reset}>Reset</button>
            : "Collapse"}
        </button>
      </div>

      <div>
        Demo
        <Accordion>
          <Body />
          <Header />
        </Accordion>
      </div>
    </div>
  )
}

export default CardVariant01
