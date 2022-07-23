import * as React from "react"

import * as styles from "../components/index.module.css"

const cardData = [
  { title: "One", subText: "one" },
  { title: "Two", subText: "two" },
  { title: "Three", subText: "three" },
  { title: "Four", subText: "four" },
  { title: "Five", subText: "four" },
  { title: "Six", subText: "four" },
  { title: "Seven", subText: "four" },
  { title: "Eight", subText: "four" },
]

const VouchaCard = ({ elemRef }) => {
  const [isOverfloww, setIsOverflow] = React.useState(false)

  React.useEffect(() => {
    const docWidth = document.documentElement.offsetWidth

    const isOverflow =
      elemRef?.current?.getBoundingClientRect().right > docWidth ? true : false

    setIsOverflow(isOverflow)
  }, [])

  return (
    <div
      ref={elemRef}
      className={styles.voucha}
      data-variant={isOverfloww && "isLarge"}
    >
      <h2> VOUCHA </h2>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni in quod
        impedit architecto ex possimus harum mollitia, culpa voluptas
        perspiciatis dicta deleniti quibusdam alias repellat deserunt modi
        blanditiis iusto! Laborum.
      </p>
    </div>
  )
}

const Card = ({
  title,
  subText,
  hoverMe,
  elemRef,
  selectedIndex,
  index,
  state,
}) => {
  return (
    <div className={styles.card} ref={elemRef}>
      <h1>{title}</h1>
      <p>{subText}</p>

      <button onMouseEnter={hoverMe} onMouseLeave={hoverMe}>
        Hover Me
      </button>

      {selectedIndex === index && state && <VouchaCard elemRef={elemRef} />}
    </div>
  )
}

const IndexPage = () => {
  const elemRef = React.useRef(null)
  const [size, setSize] = React.useState({})
  const [state, setState] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(null)

  React.useEffect(() => {
    if (elemRef.current) {
      const { x, y, width, height, top } =
        elemRef.current.getBoundingClientRect()
      setSize({ ...x, y, width, height, top })
    }
  }, [])

  const hoverMe = idx => {
    setSelectedIndex(idx)
    setState(!state)
  }
  return (
    <div className={styles.wrapper}>
      {cardData.map(({ title, subText }, index) => (
        <Card
          index={index}
          elemRef={elemRef}
          title={title}
          subText={subText}
          hoverMe={() => hoverMe(index)}
          selectedIndex={selectedIndex}
          state={state}
        />
      ))}
    </div>
  )
}

export default IndexPage
