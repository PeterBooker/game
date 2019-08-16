import React from 'react'
import './Side.scss'

import Stats from '../context/Stats'

const Side = () => {
  return (
    <Stats.Consumer>
      { ({ stats, setStats }) => {
        
        return (
          <aside className="side">
            <h2>Game Stats</h2>
              <ul className="game-stats">
                <li>Score: </li>
            </ul>
          </aside>
        )
      } }
    </Stats.Consumer>
  )
}

export default Side
