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
import * as styles from "./Accordion.module.scss"

export const AccordionContext = createContext()

const { Provider } = AccordionContext

const Accordion = ({ children, onExpand, className, ...rest }) => {
  const combinedClassNames = [styles.Accordion, className]
    .filter(Boolean)
    .join(" ")

  const [expanded, setExpanded] = useState(false)

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

  return (
    <Provider value={value}>
      <div className={combinedClassNames} {...rest}>
        {children}
      </div>
    </Provider>
  )
}

// Remember this is just a personal reference. It's not mandatory
Accordion.Header = Header
Accordion.Body = Body
Accordion.Icon = Icon

export default Accordion
