import {
  START_GAME_TIMER,
} from '../constants/actions'

export const simpleAction = () => ({
  type: 'SIMPLE_ACTION',
  payload: 'result_of_simple_action'
})