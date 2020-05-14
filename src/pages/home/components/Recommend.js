import React, { Component } from 'react';
import {connect} from 'react-redux';

class Recommend extends Component {
  render() {
    return (
      <div className="recommend-container">
        {
          this.props.recommendList.map(item=>{
            return (
              <div 
                className="recommend-item" 
                style={{ backgroundImage: `url(${item.get('imgUrl')})` }}
                key={item.get('id')
              }></div>
            )
          })
        }
      </div>
    )
  }
}
const mapState=(state)=>{
  return{
    recommendList: state.getIn(['home','recommendList'])
  }
};
export default connect(mapState,null)(Recommend);