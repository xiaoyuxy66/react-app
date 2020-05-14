/**
 * index是一个出口文件，文件夹以外的尽量只使用这个出口文件
 */
import reducer from './reducer';
import * as constants from './constants';
import * as creators from './actionCreator';
//导出reducer，就是为了方便
export{
  reducer,
  creators,
  constants
}