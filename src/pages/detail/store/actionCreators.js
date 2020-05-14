
import axios from 'axios';
import * as constans from './contansts';
//获取list改变store中的topiclist
const changeDetail = (data) => ({
  type: constans.CHANGE_DETAIL,
  detailContent:data
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id).then(res => {
      if (res.data.success) {
        dispatch(changeDetail(res.data.data))
      }
    }).catch(res => {
      console.log(res);
    })
  }
}

