import {fromJS} from 'immutable';
import * as constans from './contansts';
const defaultStatus=fromJS({
  loginStatus:false
});
export default (state=defaultStatus,action)=>{
  switch(action.type){
    case constans.LOGIN:
      return state.merge({
        "loginStatus": action.login,
      });
    case constans.LOGOUT:
      return state.set('loginStatus', action.login)
    default:
      return state;
  }
}