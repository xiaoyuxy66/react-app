import React from 'react';
import './header.less';
import {connect} from 'react-redux';
import { Link} from 'react-router-dom';
// import Img from '../../static/logo.png';
import {CSSTransition} from 'react-transition-group';
import {creators} from './store';
import {actionCreators} from '../../pages/login/store';

class Header extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //     focused:false
  //   }
  //   this.handleFocusInput = this.handleFocusInput.bind(this);
  //   this.handleBlurInput = this.handleBlurInput.bind(this);
  // }
  //定义一个返回搜索内容代码的函数
  getSearchContent(){
    const { 
      list, 
      page, 
      totalPage,
      focused,
      mouseIn, 
      handleMouseEnter, 
      handleMouseLeave,
      handleChange
    }=this.props;

    const pageList=[];
    const newList = list.toJS(); //将immutable对象转化为js对象
    for(let i=(page-1)*10;i<page*10;i++){
      pageList.push(
        <a href=" " key={i}>{newList[i]}</a>
      );
    }
    if (focused || mouseIn) {
      return (
        <div className="search-info" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="search-title">
            搜索内容
            <span 
              onClick={()=>handleChange(page,totalPage)}
              ref={(span)=>{this.spanText=span}}
            >换一批</span>
          </div>
          <div className="search-content">
            {
            /* {
              list.map((item,index)=>{
                 return <a href=" " key={index}>{item}</a>
              })
            } */
              pageList
            }
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  render(){
    //解构
    const { 
      focused, 
      handleFocusInput, 
      loginStatus,
      list,
      handleBlurInput,
      logout
    }=this.props;

    return(
      <div className="header">
        <Link className="left logo" to="/">
          <img src={require("../../static/logo.png")} alt="logo"/>
        </Link>
        <div className="header-center left">
          <ul>
            <li className="active"><a href=" ">首页</a></li>
            <li><a href=" ">下载APP</a></li>
            <li className="inputWrap">
              <CSSTransition 
                in={focused} 
                timeout={200}
                classNames="slider"
              >
                <input
                  placeholder="搜索" 
                  onFocus={() => handleFocusInput(list)}
                  onBlur={handleBlurInput}
                />
              </CSSTransition>
              <i className={focused ? "iconfont iconsousuo zoom" : "iconfont iconsousuo"}></i>
              {this.getSearchContent()}
            </li>
          </ul>
        </div>
        <div className="header-right right">
          <ul>
            {
              loginStatus ? 
              <li onClick={logout} style={{cursor:PointerEvent}}>退出</li> : 
              <li><Link to="/login">登陆</Link></li>
            }
            <li><Link to="/write">写文章</Link></li>
          </ul>
        </div>
      </div>
    );
  }
  // handleFocusInput(){
  //   this.setState({
  //     focused:true
  //   });
  // }
  // handleBlurInput() {
  //   this.setState({
  //     focused: false
  //   });
  // }
}

const mapStateToProps=(state)=>{
  //get() immutable对象需要用get方法获取
  return{
    //focused:state.get("header").get("focused")
    //接收一个数组[], 替换链式的get().
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    mouseIn:state.getIn(["header", "mouseIn"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    loginStatus: state.getIn(['login','loginStatus'])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    handleFocusInput(list){
      //避免多次请求数据
      list.size === 0 && dispatch(creators.getList());
      dispatch(creators.searchFocus());
    },
    handleBlurInput(){
      // const action = {
      //   type: 'search_blur',
      // };
      dispatch(creators.searchBlur());
    },
    handleMouseEnter(){
      dispatch(creators.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(creators.mouseLeave());
    },
    //分页面
    handleChange(page,totalPage){
      console.log(page, totalPage)
      if (page < totalPage){
        dispatch(creators.changePage(page+1));
      }else{
        dispatch(creators.changePage(1));
      }
    },
    //退出登陆
    logout(){
      dispatch(actionCreators.logout());
    }
  }
}
//连接组件与store
export default connect(mapStateToProps,mapDispatchToProps)(Header);
// export default Header;