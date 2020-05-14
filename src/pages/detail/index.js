import React,{Component} from 'react';
import './detail.less';
import {connect} from 'react-redux';
import { actionCreators} from './store';

class Detail extends Component{
  //从这里获取参数
  
  render(){
    console.log(this.props.match);
    console.log("如果是?id=1的方式就用this.props.location里面取");
    return(
      <div className="detail-container">
        <p className="detail-title"> {this.props.detailContent.title}</p>
        <div 
          className="detail-content" 
          dangerouslySetInnerHTML={{ __html: this.props.detailContent.content }}
        >
        </div>
      </div>
    )
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id);
  }
}
const mapSate=(state)=>{
  console.log(state.getIn(['detail', 'detailContent']))
  return{
    detailContent: state.getIn(['detail','detailContent'])
  }
}
const mapDispatch=(dispatch)=>{
  return{
    getDetail(id){
      dispatch(actionCreators.getDetail(id));
    }
  }
}

export default connect(mapSate,mapDispatch)(Detail);