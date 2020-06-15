import React, { PureComponent } from 'react';
import CircleChart from './components/CircleChart/CircleChart';
import WindowResizeDetector from './components/WindowResizeDetector/WindowResizeDetector';

const css = {
    width: '400px',
    height: '400px'
};

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            jsRate: 40,
            javaRate: 50,
            sharpRate: 20
        };
    }

    handleChange = evt => {
        this.setState({
            [evt.target.name]: +evt.target.value
        })
    };

    render() {
        return (
            <div className="container" style={ css }>
                <input type="text" name="jsRate" value={ this.state.jsRate } onChange={ this.handleChange } />
                <input type="text" name="javaRate" value={ this.state.javaRate } onChange={ this.handleChange } />
                <input type="text" name="sharpRate" value={ this.state.sharpRate } onChange={ this.handleChange } />
                <CircleChart
                    data={ this.state }
                />
                <WindowResizeDetector />
            </div>
        )
    }
};
