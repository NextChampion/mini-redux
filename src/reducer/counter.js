/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-06-15 15:23:31
 * @LastEditTime: 2020-06-15 18:43:06
 * @LastEditors: zhangcunxia
 * @Description: 
 */ 

export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'
export const ASYNC_INCREASE = 'ASYNC_INCREASE'

const initState = {num: 10}
export default function counter(state = initState, action) {
    switch (action.type) {
        case INCREASE:
            return { num: state.num + 1 }
        case DECREASE:
            return { num: state.num - 1 }
        case ASYNC_INCREASE:
            return { num: state.num + 1 }
        default:
            return state.num || initState;
    }
}

export function increase() {
    return { type: INCREASE };
}

export function decrease() {
    return { type: DECREASE };
}

export function asyncIncrease() {
    return dispatch=> {
        setTimeout(() => {
            dispatch(increase())
        }, 1000);
    };
}