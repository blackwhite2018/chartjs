import React, { Component } from 'react';

export default class WindowResizeDetector extends Component {
    componentDidMount() {
        window.addEventListener('resize', this.resizeHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeHandler);
    }

    resizeHandler = evt => {
        console.log('the page size was changed');
    };

    render() {
        return (
            <div>
                
            </div>
        )
    }
};
