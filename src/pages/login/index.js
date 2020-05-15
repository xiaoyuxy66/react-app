import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import './login.less';
import { actionCreators } from './store';

class Login extends PureComponent{
  render(){
    if(!this.props.loginStatus){
      return (
        <div className="login-container">
          <div className="login-box">
            <input placeholder="账号" type="text" ref={(input) => { this.account = input }} />
            <input placeholder="密码" type="password" ref={(input) => { this.pwd = input }} />
            <button onClick={() => this.props.getLogin(this.account, this.pwd)}>登陆</button>
          </div>
        </div>
      )
    }else{
      return <Redirect to='/'></Redirect>
    }
    
  }
}
const mapState=(state)=>{
  return{
    loginStatus:state.getIn(['login','loginStatus'])
  }
}
const mapDispatch=(dispatch)=>{
  return{
    getLogin(account,pwd){
      dispatch(actionCreators.login(account.value, pwd.value));
    }
  }
}
export default connect(mapState,mapDispatch)(Login)