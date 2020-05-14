// 返回一个函数
//网站庞大，将来reducer也会很庞大，因此要把总的reducer拆分成小的reducer
import * as constans from './constants';
import {fromJS} from 'immutable';

//fromJS() 将js转化成immutable
const defaultState = fromJS({
  focused: false,
  list: [], //此时list数组也是一个immutable数组，必须往里面放immutable
  mouseIn:false,
  page:1,
  totalPage:0
});
export default (state = defaultState, action) => {
  switch (action.type){
    case constans.SEARCH_FOCUS:
      //const newState = JSON.parse(JSON.stringify(state));
      //newState.focused = true;

      //immutable对象的set方法，会结合以前immutabl对象的值和设置的值，返回一个全新的对象
      return state.set("focused", true);
    case constans.SEARCH_BLUR:
      return state.set("focused", false);
    case constans.SEARCH_LIST:
      // return state.set("list", action.data)
      //             .set("page", action.page)
      //             .set("totalPage", action.totalPage);
      //merge同时改变多个数据内容，避免很多set
      return state.merge({
        list: action.data,
        page: action.page,
        totalPage: action.totalPage
      });
    case constans.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case constans.MOUSE_OUT:
      return state.set("mouseIn", false);
    case constans.CHANGE_PAGE:
      return state.set("page", action.page);
      
    default:
      return state;
  }
}