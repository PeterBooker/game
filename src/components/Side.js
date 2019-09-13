import React from 'react'
import './Side.scss'

import Settings from '../context/Settings'
import Stats from '../context/Stats'

const Side = () => {
  return (
    <Settings.Consumer>
      { ({ settings }) => {
        return (
          <aside className="side">
            <h2>Game Stats</h2>
              <ul className="game-stats">
                <li>Score: </li>
            </ul>
          </aside>
        )
      } }
    </Settings.Consumer>
  )
}

export default Side
