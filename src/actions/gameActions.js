import {
  START_GAME_TIMER,
  TICK_GAME_TIMER,
  STOP_GAME_TIMER
} from '../constants/actions'

let timer = null

export const startGameTimer = (dispatch) => {
  clearInterval(timer)
  timer = setInterval( () => dispatch( tick() ), 1000 )
  dispatch({ type: START_GAME_TIMER })
  dispatch( tickGameTimer() )
}

export const tickGameTimer = () => ({
  type: TICK_GAME_TIMER
})

export const stopGameTimer = () => {
  clearInterval(timer)
  return { type: STOP_GAME_TIMER }
}
