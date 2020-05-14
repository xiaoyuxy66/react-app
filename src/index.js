import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';
// import { GlobalStyle } from "./style.js";
// import App from './App';
import Header from './common/Header';
import Home from './pages/home';
import Detail from './pages/detail';
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import store from './store';

ReactDOM.render(
  // <React.StrictMode>
    //后面的组件样式都会生效
    //<GlobalStyle />  
  /**
   * BrowserRouter （里面是路由）里面的数据开始使用路由了
   * Route——是路由规则
   * exact 路径完全匹配才显示
   */
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Header />
          {/* <Route path="/" exact render={()=><div>home</div>}></Route> */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
        </BrowserRouter>
    </div>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);