import { createContext } from 'react'

const defaultValue = {
  name: ''
}

const updateFunction = ( state, action ) => {
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

const Settings = createContext({
  settings: defaultValue,
  setSettings: updateFunction,
})

export default Settings
