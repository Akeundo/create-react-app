export default function productReducer(
  state = ['default1', 'dafault2'],
  action
) {
  /* if (action.type === 'changeState') {
         return action.payload.newState;
     }*/
  return state; // default value of state
}
