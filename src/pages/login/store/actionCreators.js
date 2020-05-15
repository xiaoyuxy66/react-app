
import axios from 'axios';
import * as constans from './contansts';
const changeLogin = () => ({
  type: constans.LOGIN,
  login: true,
})
export const login = (account, pwd) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + pwd).then(res => {
      if (res.data.data) {
        dispatch(changeLogin())
      }else{
        alert('登陆失败')
      }
    }).catch(res => {
      console.log(res);
    })
  }
}
export const logout=()=>{
  return{
    type: constans.LOGOUT,
    login: false,
  }
}
