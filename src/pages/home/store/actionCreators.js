
import axios from 'axios';
import * as constans from './contansts';
import {fromJS} from 'immutable';
//获取list改变store中的topiclist
const changeHomeList = (topicList, articleList, recommendList)=>({
  type: constans.CHANGE_HOME_LIST,
  topicList: fromJS(topicList),
  recommendList: fromJS(recommendList),
  articleList: fromJS(articleList)
})
const changeArticalList = (articleList,page) => ({
  type: constans.CHANGE_ARTICAL_LIST,
  articleList: fromJS(articleList),
  nextPage:page
})

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      if (res.data.success) {
        dispatch(changeHomeList(res.data.data.topicList, res.data.data.articleList, res.data.data.recommendList))
      }
    }).catch(res => {
      console.log(res);
    })
  }
}
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+page).then(res => {
      if (res.data.success) {
        dispatch(changeArticalList(res.data.data,page+1))
      }
    }).catch(res => {
      console.log(res);
    })
  }
}
export const changeScrollTop = (isShowScroll)=>{
  return{
    type: constans.CHANGE_SCROLL,
    showScroll: isShowScroll,
  }
}
