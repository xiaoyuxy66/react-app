// 返回一个函数

const defaultState={};
export default (state=defaultState,action)=>{
  if(action.type===""){
    const newState =JSON.parse(JSON.stringify(state));
    return newState;
  }
  return state;
}