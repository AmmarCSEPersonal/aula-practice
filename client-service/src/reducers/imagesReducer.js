export default (state = {}, action) => {
console.log(action);
 switch (action.type) {
  case 'GET_IMAGES':
    //no need to deep copy payload here
    //payload is a fresh object from xhr request
   return {
    result: action.payload
   }
  default:
   return state
 }
}
