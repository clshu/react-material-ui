import React, { Fragment } from 'react'
import { Header, Footer } from './Layout'
import Exercises from './Exercises'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Exercises />
      <Footer />
    </Fragment>
  )
}

export default App
