// 返回一个函数
//网站庞大，将来reducer也会很庞大，因此要把总的reducer拆分成小的reducer
//combinereducers把小的reducer合并成大的reducer
// import {combineReducers} from 'redux';
import {combineReducers} from 'redux-immutable'; //让所有数据变成immutable对象

// import HeaderReducer from '../common/Header/store/reducer';
//reducer起了一个别名HeaderReducer
import { reducer as HeaderReducer} from '../common/Header/store';
import { reducer as HomeReducer} from '../pages/home/store';
import { reducer as detailReducer} from '../pages/detail/store';
import { reducer as loginReducer} from '../pages/login/store';

const reducer= combineReducers({
  header:HeaderReducer,
  home: HomeReducer,
  detail: detailReducer,
  login: loginReducer
});
export default reducer;