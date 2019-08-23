export default //function userReducer(state = 'defaultState', action) {
function userReducer(state = 'defaultState', { type, payload }) {
  /*if (action.type === 'updateUserState') {
        return action.payload.newState;*/
  if (type === 'updateUserState') {
    return payload.newState;
  }

  return state; // default value of state
}
