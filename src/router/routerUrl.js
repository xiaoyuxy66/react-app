import React from 'react';
//可以优化性能，页面不需要全部打包到一个js中，可以分页面打包，这样首页的js就不会太大
import Loadable from 'react-loadable';

//详情页
const Detail = Loadable({
  loader: () => import('../pages/detail'),
  loading(){
    return <div>正在加载</div>
  },
  timeout: 100
});
//首页
const Home = Loadable({
  loader: () => import('../pages/home'),
  // loading: Loading,
  loading() {
    return <div>正在加载</div>
  },
  timeout: 10000
});
//写文章
const Write = Loadable({
  loader: () => import('../pages/write'),
  loading() {
    return <div>正在加载</div>
  },
  timeout: 10000
});
const Login = Loadable({
  loader: () => import('../pages/login'),
  loading() {
    return <div>正在加载</div>
  },
  timeout: 10000
})

const routerUrl = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id",
    component: Detail,
  }, 
  {
    path: "/write",
    component: Write,
  }, 
];
export default {
  routerUrl
}
