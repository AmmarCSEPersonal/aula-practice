import {get} from 'axios';

export default () => dispatch => {
 dispatch({
  type: 'GET_IMAGES',
  payload: get('tileData.json').then(response => 
dispatch({
  type: 'Images_recieved',
  payload: response.data
 })
)
 })
}
