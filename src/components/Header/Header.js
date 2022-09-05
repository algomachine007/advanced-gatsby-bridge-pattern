import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle, user }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <h1>{siteTitle} </h1>

          <h4>{user.username}</h4>
        </Link>
      </h1> */}

      <h1>{siteTitle}</h1>

      <h4>{user.username}</h4>
    </div>
  </header>
)

export default Header

Header.defaultProps = {
  siteTitle: ``,
  user: {
    name: "",
    email: "",
    username: "",
  },
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
}
