import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

export const searchFocus=()=>({
  type: constants.SEARCH_FOCUS
})
export const searchBlur=()=>({
  type:constants.SEARCH_BLUR
})
export const mouseEnter=()=>({
  type:constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: constants.MOUSE_OUT
})
export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page:page
})



//不需要导出的数据要不放在底部要不放在顶部
const getSearchList = (data) => ({
  type: constants.SEARCH_LIST,
  data: fromJS(data),
  page:1,
  totalPage:Math.ceil(data.length/10)
})
//有了中间建就可以返回一个函数了
export const getList=()=>{
  return (dispatch)=>{
    axios.get('/api/header.json').then(res=>{
      var data = res.data;
      if(data.success){
        dispatch(getSearchList(data.data));
      }
    }).catch(res=>{
      console.log(res);
    });
  }
}
