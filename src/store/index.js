import { createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
//中间件，引入thunk插件后，我们可以在actionCreators内部编写逻辑，处理请求结果。而不只是单纯的返回一个action对象，可以返回一个action函数

//compose一个包装函数，里面的函数依次执行
//redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
//redux使用这两个中间件
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);
const store = createStore(
  reducer, 
  enhancer
);
export default store;