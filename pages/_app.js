import React from "react"
import "bootstrap/dist/css/bootstrap.css"

import Header from "../components/header"

const Bootstrap = ({ Component, pageProps, currentUser }) => {
  return (
    <React.Fragment>
      <Header currentUser={currentUser} />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  )
}

export default Bootstrap
