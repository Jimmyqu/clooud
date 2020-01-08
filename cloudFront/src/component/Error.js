import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static propTypes = {
        children: PropTypes.element
    }

    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能够显示降级后的 UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // 将错误日志上报给服务器
        // some code here...
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        // 这里我的自定义降级后UI为空即<Fragment />
        return hasError ? <p>发生错误，刷新重试</p> : children;
    }
}

export default ErrorBoundary;
