/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-06-15 15:19:49
 * @LastEditTime: 2020-06-15 15:55:07
 * @LastEditors: zhangcunxia
 * @Description: 
 */ 
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../reducer/counter';


class Counter extends Component {
    render() {
        const { num, increase, decrease } = this.props;
        return (
            <div>
                <button onClick={increase}>增加</button>
                <span> {num} </span>
                <button onClick={decrease}>减少</button>
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
}

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter
