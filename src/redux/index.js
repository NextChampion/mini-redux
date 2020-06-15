/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-06-15 15:22:43
 * @LastEditTime: 2020-06-15 15:55:27
 * @LastEditors: zhangcunxia
 * @Description: 
 */ 
import {createStore} from 'redux'
import counter from '../reducer/counter'

const store = createStore(counter);

console.log('init', store.getState());

store.subscribe(()=>{
    const currentState = store.getState();
    console.log('当前数字是:',currentState.num);
})

export default store