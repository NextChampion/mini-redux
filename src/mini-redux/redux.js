/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-06-15 14:42:14
 * @LastEditTime: 2020-06-15 18:36:51
 * @LastEditors: zhangcunxia
 * @Description: 最简单的redux
 */

 

 export function createStore(reducer, enhancer) {
     // 如果有增强器
     if (enhancer) {
         return enhancer(createStore)(reducer)
     }
     let currentState = {};
     const currentListeners = [];
     function getState() {
         return currentState;
     }
     function subscribe(listener) {
         currentListeners.push(listener)
     }
     function dispatch(action) {
        currentState = reducer(currentState, action);
        currentListeners.forEach(v => v());
        return action;
     }
     // 初始化
     dispatch({type: '@@@redux/init'})
     return {
        getState, 
        subscribe,
        dispatch,
     }
 }

 function bindActionCtearer(creator, dispatch) {
     return (...args) => dispatch(creator(...args));
 }

 export function bindActionCreaters(creaters,dispatch) {
    //  const bound = {}
    //  Object.keys(creaters).forEach(v => {
    //     const creater = creaters[v];
    //      bound[v] = bindActionCtearer(creater, dispatch)
    //  })
    //  return bound;
    return Object.keys(creaters).reduce((ret, item)=> {
        ret[item]=bindActionCtearer(creaters[item], dispatch)
        return ret;
    },{})
 }

 export function applyMiddleware(middleware) {
     return createStore => (...args) => {
         const store = createStore(...args);
         let dispatch = store.dispatch;
         const midApi = {
             getState: store.getState,
             dispatch: (...args) => dispatch(...args),
         }
        dispatch = middleware(midApi)(store.dispatch);
         return {
             ...store,
             dispatch,
         }
     }
 }