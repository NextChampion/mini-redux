/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-06-15 16:07:58
 * @LastEditTime: 2020-06-15 17:18:12
 * @LastEditors: zhangcunxia
 * @Description: 
 */ 

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreaters} from './redux'

export const connect = (mapStateToProps = state => state, mapDispatchToProps = {}) => (WrapComponent) => {
    return class ConnectComponent extends Component {
            static contextTypes = {
                store: PropTypes.object,
            }
            
            constructor(props, context) {
                super(props, context);
                this.state = { props: {} }
            }

            componentDidMount() {
                const { store } = this.context;
                store.subscribe(() => this.update())
                this.update();
            }

            update() {
                const { store } = this.context;
                const stateProps = mapStateToProps(store.getState());
                // 方法不能直接做属性, 需要用dispatch包一层
                const dispatchProps = bindActionCreaters(mapDispatchToProps, store.dispatch);
                this.setState({ props: { 
                    ...this.state.props, 
                    ...stateProps, 
                    ...dispatchProps, 
                }});
            }

            render() {
                return <WrapComponent {...this.state.props} />
            }
        }
    }

export class Provider extends Component {
    static childContextTypes = {
        store: PropTypes.object,
    }
    
    constructor(props, context) {
        super(props, context);
        this.store = props.store;
    }

    getChildContext() {
        return { store: this.store };
    }

    render() {
        return this.props.children;
    }
}
