/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-06-15 18:46:44
 * @LastEditTime: 2020-06-15 18:51:34
 * @LastEditors: zhangcunxia
 * @Description: 
 */ 
const thunk = ({dispatch, getState}) => (next) => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    // 默认什么都没干
    return next(action);
}
export default thunk; 