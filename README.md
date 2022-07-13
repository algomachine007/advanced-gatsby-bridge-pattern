https://github.com/themithy/react-design-patterns

Steps:

1. In gatsby-node, you have to map pages

Bridge Pattern: Now let us consider a pattern very useful in front-end projects. A component that seems very simple to implement but usually turns the opposite is the button component. It starts with some border radius and primary and secondary color palette. However in the life-time of the project several features are requested that make this component bloated or split in two with not obvious reason. This includes:

the color palette going well beyound primary and secondary.
the necessity to display a icon on button.
a link that should look like a button.
This is where the bridge pattern comes in play, as it decouples the abstraction (how the component works) from the implementation (how the component looks like).

import React from 'react'

const ButtonUI = ({
theme,
...props
}) => {
return (
<button
{...props}
style={{
  backgroundColor: theme.backgroundColor,
  color: theme.color,
}}/>
)
}

const Link = ({
url,
uiComponent,
uiProps,
children,
}) => {
const bridgeProps = {
...uiProps,
onClick: () => window.open(url, '\_blank')
}

return React.createElement(uiComponent, bridgeProps, children)
}

const Client = () => {
const theme = { backgroundColor: 'blue', color: 'white' }
return (

<Link
url="http://github.com/themithy/react-design-patterns"
uiComponent={ButtonUI}
uiProps={{ theme }} >
See other patterns
</Link>
)
}

export default Client

Observer Pattern
This one is what I would call an intuitive design pattern and is heavily used in the wild.

const Observer = () => {
React.useEffect(() => {
const someFunction = () => {}

    document.addEventListener('click', someFunction)
    return () => {
      document.removeEventListener('click', someFunction)
    }

}, [])
}
