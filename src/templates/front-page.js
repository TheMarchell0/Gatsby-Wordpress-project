import React from "react"
import { Link } from "gatsby"

const FrontPageTemplate = props => {
  console.log("page", props)
  return (
    <>
      <Link to="/hi">TO HI</Link>
      <h1>FRONT</h1>
    </>
  )
}
export default FrontPageTemplate
