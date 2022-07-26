import React, { useState } from "react"

import Tabs from "@/components/Tabs/Tabs"
import Accordion from "../Accordion/Accordion"
import { information as data } from "./../Accordion/data"
import useExpanded from "../Accordion/hooks/useExpanded"
import useEffectAfterMount from "../Accordion/hooks/useEffectAfterMount"
import Header from "../Accordion/Header"
import Body from "../Accordion/Body"

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
    return toggle
  }

  ///////////

  // const hasViewedSecret = useRef(false)
  // const { expanded, toggle, override, reset, resetDep } = useExpanded(
  //   false,
  //   appReducer
  // )
  // const initialState = {
  //   expanded: initialExpanded,
  // }
  // function appReducer(initialState, action) {
  //   if (
  //     hasViewedSecret.current &&
  //     action.type === useExpanded.types.toggleExpand
  //   ) {
  //     return {
  //       ...action.internalChanges,
  //       // override internal update
  //       expanded: false,
  //     }
  //   }
  //   return action.internalChanges
  // }

  // useEffectAfterMount(() => {
  //   // open secret in new tab ð
  //   window.open("https://leanpub.com/reintroducing-react", "_blank")
  //   hasViewedSecret.current = true
  //   // perform side effect here ð e.g persist user details to database
  // }, [resetDep])

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
        <Accordion
          {...getTogglerProps({
            id: "my-button-id",
            "aria-label": "custom-toggler",
            onClick: customClickHandler,
          })}
          style={{ margin: 40 }}
        >
          <Header style={{ padding: 30 }}>This is a header</Header>
          <Body>
            <div style={{ padding: 30 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              dolorem quaerat praesentium voluptate, est commodi! Doloremque at
              maxime rem aspernatur laudantium praesentium, accusamus ab,
              dignissimos ipsa natus, nostrum quod a.
            </div>
          </Body>
        </Accordion>
      </div>
    </div>
  )
}

export default CardVariant01
