import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './App.scss'

import { simpleAction } from './actions'

import Header from './components/Header'
import Side from './components/Side'
import Footer from './components/Footer'

const App = ( props ) => {
  useEffect( () => {
    document.title = 'Tetris by Coast Digitial'
  }, [])

  const handleClick = (event) => {
    props.simpleAction()
  }

  return (
    <div className="app">
      <Header />
      <main className="main">
        <section className="window">
          <button onClick={handleClick}>Test Redux Action</button>
          <pre>Props: {JSON.stringify(props)}</pre>
        </section>
        <Side />
      </main>
      <Footer />
    </div>
  )
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  //userAction: () => dispatch(userAction()),
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
