import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react"
import Body from "./Body"
import Header from "./Header"
import Icon from "./Icon"

export const AccordionContext = createContext()

const { Provider } = AccordionContext

const Accordion = ({ children, onExpand }) => {
  const [expanded, setExpanded] = useState(false)

  // do not fire on mount
  const componentJustMounted = useRef(true)
  useEffect(() => {
    if (!componentJustMounted.current) {
      onExpand(expanded)
    }
    componentJustMounted.current = false
  }, [expanded])

  const stateUpdater = previous => !previous

  const toggleExpanded = useCallback(() => {
    setExpanded(stateUpdater)
  }, [])

  const value = useMemo(
    () => ({ expanded, toggleExpanded }),
    [expanded, toggleExpanded]
  )

  return <Provider value={value}> {children} </Provider>
}

// Remember this is just a personal reference. It's not mandatory
Accordion.Header = Header
Accordion.Body = Body
Accordion.Icon = Icon

export default Accordion
