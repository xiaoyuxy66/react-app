import {fromJS} from 'immutable';
import * as constans from './contansts';
const defaultStatus=fromJS({
  topicList: [],
  articleList: [],
  recommendList:[],
  articalPage:1,
  showScroll:false //返回顶部是否显示
});
export default (state=defaultStatus,action)=>{
  switch(action.type){
    case constans.CHANGE_HOME_LIST:
      return state.merge({
        "topicList": action.topicList,
        "articleList": action.articleList,
        "recommendList": action.recommendList
      });
    case constans.CHANGE_ARTICAL_LIST:
      return state.merge({
        "articalPage": action.nextPage,
        "articleList": state.get('articleList').concat(action.articleList),
      });
    case constans.CHANGE_SCROLL:
      return state.set('showScroll', action.showScroll)
    default:
      return state;
  }
}