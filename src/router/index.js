import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//此插件可以满足缓存上一页的功能，即：返回上一页的时候，上一页的滚动条、动作状态等等和离开这个页面时的状态保持一致。
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'

import url from './routerUrl';
import Header from '../common/Header';

export default class RouterIndex extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <div>
          <Switch>
            {url.routerUrl.map((item, index) => {
              return (
                <Route 
                  key={index} 
                  exact
                  path={item.path} 
                  component={item.component}
                ></Route>
              )
            })}
          </Switch>
          {/* <CacheSwitch>
            {url.cacheUrl.map((f, i) => {
              return (<CacheRoute key={i} path={f.path} component={f.component}></CacheRoute>)
            })}
          </CacheSwitch> */}
        </div>
      </BrowserRouter>

    )
  }
}
