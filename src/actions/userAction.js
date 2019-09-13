export const userAction = text => ({
  type: 'SET_NAME',
  text
})

export const simpleAction = () => ({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
})