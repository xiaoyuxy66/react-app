## 一个react从零搭建项目
### 目录
  1. src/common/公共组件目录
  2. src/store  redux目录
  3. src/static静态文件（图片,字体）
  4. src/pages 页面组件

### 库（library）
  1. styled-components (感觉不习惯，还是用less吧，vscode有相关提示插件可以装一下)
  2. redux 既然用了redux就把数据都存进去把 combinereducers把小的reducer合并成大的reducer
  3. react-redux
  4. less
  5. less-loader@4.1.0，关于配置less 自行百度
  6. react-transition-group(用法github)
  7. immutable.js 管理store中的数据(facebook)=>生成一个immutable(不可改变)的对象(针对一个组件)——把state变成immutable对象 -----reducer.js中的state不能改变
    - fromJS() 将js转化成immutable
    - toJS() 将immutable转化成js
    - getIn() 接收一个数组[],替换链式的get().
    - set() immutable对象的set方法，会结合以前immutabl对象的值和设置的值，返回一个全新的对象
    - get() immutable对象需要用get方法获取
    - merge() 同时改变多个数据内容state，避免一直设置set() 
    - 于PureComponent相结合使用，优化性能
  8. redux-immutable (统一数据格式让store中的所有数据都变成immutable)
  9. react-router-dom
    - 单页面应用整个网站在你访问过程中只加载一次html，但是通过a标签跳转，跳转一次就会的加载，耗性能
    - 
### 步骤（step）
  1. create-react-app脚手架创建项目，根据自己要求删减无用代码。
  2. 便于css管理这里用到了styled-components插件,把css文件改成js文件
  3. npm run eject打开webpack配置，lessloader,取别名
  4. mock假数据，create-react-app有一个特性，里面的public文件夹下面建一个api文件夹，然后ajax可以获取到文件夹里面的内容.  (上线之前记得删除)
  5. react最难的就是设计reducer里面的数据
  6. 绑定在window上的事件在组件卸载的时候一定要移除，否则对其他组件有影响
