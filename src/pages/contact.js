import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

import "../styles/aux.css"

const Contact = () => {
  return (
    <Layout>
      <div className="aux aux-contact" style={{ minHeight: "79vh" }}>
        <h2>Questions or Concerns?</h2>
        <p>
          Email me at{" "}
          <a href="mailto:michael@michaelcapecci.com">
            michael@michaelcapecci.com
          </a>
        </p>
        <Link to="/">⬅️ Return to Home</Link>
      </div>
    </Layout>
  )
}

export default Contact
