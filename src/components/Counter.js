/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-06-15 15:19:49
 * @LastEditTime: 2020-06-15 18:42:47
 * @LastEditors: zhangcunxia
 * @Description: 
 */ 
import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { connect } from '../mini-redux/react-redux'
import { increase, decrease, asyncIncrease } from '../reducer/counter';


class Counter extends Component {
    render() {
        const { num, increase, decrease, asyncIncrease } = this.props;
        return (
            <div>
                <button onClick={increase}>增加</button>
                <span> {num} </span>
                <button onClick={decrease}>减少</button>
                <button onClick={asyncIncrease}>异步增加</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    num: state.num
})

const mapDispatchToProps = {
    decrease,
    increase,
    asyncIncrease,
}

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter
