import React from "react"

import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
import "../styles/button.css"

const Button = ({ children }) => (
  <a href="https://apps.apple.com/us/app/daily-goal-reminders/id1524106873?mt=12">
    <button
      style={{
        padding: ".5rem 2.5rem",
        color: COLORS.lightWhite,
        fontWeight: 700,
        background: GRADIENT,
        borderRadius: BORDER_RADIUS,
        borderWidth: 0,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  </a>
)

export default Button
