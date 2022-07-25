// useExpanded.js
import { useCallback, useMemo, useRef, useState } from "react"

export default function useExpanded(initialExpanded = false) {
  const [expanded, setExpanded] = useState(initialExpanded)

  const toggle = useCallback(
    () => setExpanded(prevExpanded => !prevExpanded),
    []
  )

  const resetRef = useRef(0)

  const reset = useCallback(() => {
    // perform actual reset
    setExpanded(initialExpanded)
    // increase reset count - call this resetRef
    ++resetRef.current
  }, [initialExpanded])

  //partial application:  this calls 2 functions at once
  const callFunctionsInSequence =
    (...fns) =>
    (...args) => {
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
    () => ({ getTogglerProps, expanded, toggle, resetDep: resetRef, reset }),
    [expanded, toggle, getTogglerProps, resetDep, reset]
  )

  return value
}
