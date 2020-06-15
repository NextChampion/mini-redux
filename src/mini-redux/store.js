/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-06-15 14:42:14
 * @LastEditTime: 2020-06-15 14:55:24
 * @LastEditors: zhangcunxia
 * @Description: 最简单的redux
 */ 

 export function createStore(reducer) {
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