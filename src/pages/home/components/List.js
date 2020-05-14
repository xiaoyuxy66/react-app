import React, { Component } from 'react';
import {connect} from 'react-redux';
import { actionCreators } from '../store';
import {Link} from 'react-router-dom';

class List extends Component {
  render() {
    const { articalPage, articleList, getMoreList}=this.props;
    return (
      <div className="list-container">
          {
            articleList.map((item,index)=>{
              return (
                <Link key={index} to={`/detail/${item.get("id")}`}>
                  <div className="list-item">
                    <div className="list-info">
                      <h3>{item.get("title")}</h3>
                      <p>{item.get("desc")}</p>
                    </div>
                    <img alt="" src={item.get("imgUrl")} />
                  </div>
                </Link>
              )
            })
          }
        <div className="load-more" onClick={() => getMoreList(articalPage)}>加载更多</div>
      </div>
      
    )
  }

}
const mapStateToProps=(state)=>{
  return{
    articleList: state.getIn(['home', "articleList"]),
    articalPage: state.getIn(['home', "articalPage"]),
  }
};

const mapDispatchToProps=(dispatch)=>{
  return{
    getMoreList(page){
      dispatch(actionCreators.getMoreList(page))
    }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(List);