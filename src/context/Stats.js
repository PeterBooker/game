import { createContext } from 'react'

const defaultValue = {
  isRunning: false,
  timePassed: 0,
  score: '',
}

const updateFunction = ( state, action ) => {
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

const Stats = createContext({
  stats: defaultValue,
  setStats: updateFunction,
})

export default Stats
