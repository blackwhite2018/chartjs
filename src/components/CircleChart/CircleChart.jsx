import React, { Component } from 'react';
import Chart from 'chart.js';

export default class CircleChart extends Component {
    constructor(props) {
        super(props);
        this.data = {
            datasets: [{
                data: [props.data.jsRate, props.data.javaRate, props.data.sharpRate],
                backgroundColor: ['yellow', 'green', 'blue']
            }],
            labels: ['JavaScript', 'Java', 'C#']
        };
    }

    componentDidMount() {
        this.chart = new Chart('languages', {
            type: 'doughnut',
            data: this.data
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.data !== prevProps.rates) {
            this.updateChart(this.props.data);
        }
    }

    updateChart = rates => {
        this.chart.data.datasets[0].data = [rates.jsRate, rates.javaRate, rates.sharpRate];
        this.chart.update();
    };

    render() {
        return (
            <div>
                <canvas id="languages" width="100" height="100"></canvas>
            </div>
        )
    }
};
