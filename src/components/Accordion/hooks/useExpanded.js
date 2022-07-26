import { useCallback, useMemo, useReducer, useRef } from "react"

export default function useExpanded(initialExpanded = false) {
  const initialState = {
    expanded: initialExpanded,
  }
  useExpanded.types = {
    toggleExpand: "EXPAND",
    reset: "RESET",
  }

  const internalReducer = (state, action) => {
    switch (action.type) {
      case useExpanded.types.toggleExpand:
        return {
          ...state,
          expanded: !state.expanded,
        }
      case useExpanded.types.reset:
        return {
          ...state,
          expanded: action.payload,
        }
      default:
        throw new Error(`Action type ${action.type} not handled`)
    }
  }

  // useState approach: const [expanded, setExpanded] = useState(initialExpanded)

  const [{ expanded }, setExpanded] = useReducer(internalReducer, initialState)

  const toggle = useCallback(
    () => setExpanded({ type: useExpanded.types.toggleExpand }),
    []
  )

  const resetRef = useRef(0)

  const reset = useCallback(() => {
    // perform actual reset
    setExpanded({
      type: useExpanded.types.reset,
      payload: initialExpanded, // pass a payload "initialExpanded"
    })
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
    () => ({ getTogglerProps, expanded, toggle, resetRef, reset }),
    [expanded, toggle, getTogglerProps, resetRef, reset]
  )

  return value
}
