// useExpanded.js
import { useCallback, useMemo, useState } from "react"

export default function useExpanded() {
  const [expanded, setExpanded] = useState(false)
  const toggle = useCallback(
    () => setExpanded(prevExpanded => !prevExpanded),
    []
  )

  //partial application
  const callFunctionsInSequence =
    (...fns) =>
    (...args) => {
      console.log("args", ...args)
      return fns.forEach(fn => fn && fn(...args))
    }

  // props getters pattern
  const getTogglerProps = useCallback(
    ({ onClick, ...props } = {}) => ({
      "aria-expanded": expanded,
      //onClick is the user passed one while toggle is the hooks function
      onClick: callFunctionsInSequence(toggle, onClick),
      ...props,
    }),
    [toggle, expanded]
  )

  const value = useMemo(
    () => ({ getTogglerProps, expanded, toggle }),
    [expanded, toggle, getTogglerProps]
  )

  return value
}
