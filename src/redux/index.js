/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-06-15 15:22:43
 * @LastEditTime: 2020-06-15 18:50:13
 * @LastEditors: zhangcunxia
 * @Description: 
 */ 

// import {createStore, applyMiddleware} from 'redux'
import {createStore, applyMiddleware} from '../mini-redux/redux';
import counter from '../reducer/counter';
// import thunk from 'redux-thunk';
import thunk from '../middleware/thunk';

const store = createStore(counter, applyMiddleware(thunk)); 

console.log('init', store.getState());

store.subscribe(()=>{
    const currentState = store.getState();
    console.log('当前数字是:',currentState.num);
})

export default store