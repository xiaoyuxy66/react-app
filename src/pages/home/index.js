import React,{PureComponent} from 'react';
 //PureComponent底层实现了一个shouldComponentUpdate的功能，提升性能，但要配合immutable
import './home.less';
import {connect} from 'react-redux';
import { actionCreators } from './store';

import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import Topic from './components/Topic';

class Home extends PureComponent{

  handleScrollTop(){
    window.scrollTo(0,0);
  }
  render(){
    return (
      <div className="home-container">
        <div className="home-left">
          <Topic/>
          <List/>
        </div>
        <div className="home-right">
          <Recommend/>
          <Writer/>
        </div>
        {
          this.props.showScroll ? <div className="back-top" onClick={()=>this.handleScrollTop()}>顶部</div>:''
        }
      </div>
    )
  }

  //挂载结束去请求接口
  componentDidMount(){
    this.props.getHomeList();
    this.bindEvents();
  }
  
  bindEvents(){
    //绑定在window上的事件在组件卸载的时候一定要移除，否则对其他组件有影响
    window.addEventListener("scroll",this.props.changeScrollTopShow);
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState=(state)=>{
  return{
    showScroll: state.getIn(['home','showScroll'])
  }
};
const mapDispatchToProps=(dispatch)=>{
  return{
    getHomeList(){
      dispatch(actionCreators.getHomeList())
    },
    changeScrollTopShow(){
      console.log(document.documentElement.scrollTop);
      if (document.documentElement.scrollTop>400){
        dispatch(actionCreators.changeScrollTop(true));
      }else{
        dispatch(actionCreators.changeScrollTop(false));
      }
    }
  }
};

export default connect(mapState,mapDispatchToProps)(Home);