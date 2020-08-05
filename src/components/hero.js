import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import goals from "../images/Goals1.png"
import goals2 from "../images/Goals2.png"
import logo from "../images/logo.png"
import headerImage from "../images/header.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>
      <img
        src={logo}
        alt="Daily Goal Reminders: Logo"
        width="32px"
        style={{
          transform: "translateY(27.3px) translateX(-9px)",
        }}
      />
      Daily Goal Reminders
    </h1>

    <p style={{ textAlign: "center", maxWidth: 440 }}>
      Daily Goal Reminders is the macOS app for staying organized in a busy
      remote world.
    </p>
    <p>Temporariy Offline for Updates! Be back soon!</p>
    {/* <Button>Get The App</Button> */}
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src={goals}
        alt="outlines of shapes and confetti in the background"
        style={{
          borderRadius: "5px",
          marginTop: "3rem",
        }}
      />
      <img
        src={goals2}
        alt="outlines of shapes and confetti in the background"
        style={{
          borderRadius: "5px",
          marginTop: "3rem",
        }}
      />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
