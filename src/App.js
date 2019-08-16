import React, { useReducer, useEffect } from 'react'
import './App.scss'

import Settings from './context/Settings'
import Stats from './context/Stats'

import Header from './components/Header'
import Side from './components/Side'
import Footer from './components/Footer'

const defaultSettings = {
  name: ''
}

const updateSettings = ( state, action ) => {
  switch( action.type ) {
    case 'update':
      return {
        ...state,
        ...action.settings
      }
  
    case 'delete':
      return {
        settings: {
          name: ''
        }
      }
  
    default:
      return state
  
  }
}

const defaultStats = {
  isRunning: false,
  timePassed: 0,
  score: '',
}

const updateStats = ( state, action ) => {
  switch( action.type ) {
    case 'update':
      return {
        ...state,
        ...action.stats
      }
  
    case 'reset':
      return {
        stats: {
          isRunning: false,
          timePassed: 0,
          score: '',
        }
      }
  
    default:
      return state
  
  }
}

const App = () => {
  const [ settings, setSettings ] = useReducer( updateSettings, defaultSettings )

  const [ stats, setStats ] = useReducer( updateStats, defaultStats )

  useEffect( () => {
    
  }, [])

  return (
    <Settings.Provider settings={settings} setSettings={setSettings}>
      <Stats.Provider stats={stats} setStats={setStats}>
        <div className="app">
          <Header />
          <main className="main">
            <section className="window">

            </section>
            <Side />
          </main>
          <Footer />
        </div>
      </Stats.Provider>
    </Settings.Provider>
  )
}

export default App
