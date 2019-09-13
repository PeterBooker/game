export default (state = {}, action) => {

    switch (action.type) {
      case 'START_GAME_TIMER':
        return {
          result: action.payload
        }
      default:
        return state
    }
  
  }
  