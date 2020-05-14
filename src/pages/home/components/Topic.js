import React, { Component } from 'react';
import {connect} from 'react-redux';

class Topic extends Component {
  render() {
    return (
      <ul className="topic_container">
        {
          this.props.topicList.map(item=>{
            return (
              <li key={item.get('id')}>
                <a href=" ">{item.get("title")}</a>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    topicList: state.getIn(["home","topicList"])
  }
}
export default connect(mapStateToProps,null)(Topic);