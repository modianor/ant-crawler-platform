import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'

class D3ArchimedeanSpiralLine extends React.Component {
    constructor(props) {
        super(props)
        this.archimedeanSpiralLine = {
            width: null,
            height: null,
            outerRadius: null,
            keys: null,
            fy: (x, a = 0, b = 1) => a + b * x // r = a + bθ（其中 a 和 b 均为实数。当θ = 0时，a为起点到极坐标原点的距离。 dr/dθ = b ，b为螺旋线旋转的角速度）
        }
    }

    componentDidMount() {
        const containerWidth = this.chartRef.parentElement.offsetWidth
        const margin = {top: 60, right: 60, bottom: 60, left: 60}
        const names = {
            degree_0: '0°',
            degree_45: '45°',
            degree_90: '90°',
            degree_135: '135°',
            degree_180: '180°',
            degree_225: '225°',
            degree_270: '270°',
            degree_315: '315°'
        }
        this.archimedeanSpiralLine.width =
            containerWidth - margin.left - margin.right
        this.archimedeanSpiralLine.height = this.archimedeanSpiralLine.width
        this.archimedeanSpiralLine.outerRadius =
            this.archimedeanSpiralLine.width * 0.5
        this.archimedeanSpiralLine.keys = Object.keys(names)
        const {width, height, outerRadius, keys, fy} = this.archimedeanSpiralLine
        let chart = d3
            .select(this.chartRef)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
        const a = this.props.a
        const b = this.props.b
        let points = []
        let formatXY = d3.format('.2f')
        d3.range(0, 4800, 5).forEach(function (item) {
            const angle = formatXY((item * Math.PI) / 180)
            const radius = formatXY(fy(angle, a, b))
            points.push([angle, radius])
        })
        let x = d3
            .scaleBand()
            .range([0, 2 * Math.PI])
            .align(0)
            .domain(keys)
        let y = d3
            .scaleLinear()
            .range([0, outerRadius])
            .domain([0, 100])

        let g = chart
            .append('g')
            .attr(
                'transform',
                'translate(' +
                containerWidth / 2 +
                ',' +
                (height + margin.top + margin.bottom) / 2 +
                ')'
            )

        let yAxis = g
            .append('g') // 画y轴圈圈及文字
            .attr('text-anchor', 'start')
        let yTick = yAxis
            .selectAll('g')
            .data(Array.reverse(y.ticks(10)))
            .enter()
            .append('g')

        yTick
            .append('circle')
            .attr('fill', '#ddd')
            .attr('stroke', '#999')
            .attr('fill-opacity', 0.3)
            .attr('r', y)

        yTick
            .append('text')
            .attr('x', 6)
            .attr('y', function (d) {
                return -y(d)
            })
            .attr('dy', '0.35em')
            .attr('fill', 'none')
            .attr('stroke', '#fff')
            .attr('stroke-width', 5)
            .text(y.tickFormat(10, 'r'))

        yTick
            .append('text')
            .attr('x', 6)
            .attr('y', function (d) {
                return -y(d)
            })
            .attr('dy', '0.35em')
            .text(y.tickFormat(10, 'r'))

        let tick = g
            .selectAll('.tick') // 绘画所有轴线条
            .data(
                keys.map(key => {
                    return [
                        {angle: 0, radius: 0},
                        {angle: x(key), radius: outerRadius}
                    ]
                })
            )
            .enter()
            .append('g')
            .attr('class', 'tick')

        tick
            .append('path') // 开始绘画所有的轴线条
            .attr('class', 'tick-line')
            .style('stroke', '#999')
            .style('stroke-width', 1)
            .attr('fill', 'none')
            .attr(
                'd',
                d3
                    .lineRadial()
                    .angle(function (d) {
                        return d.angle
                    })
                    .radius(function (d) {
                        return d.radius
                    })
                    .curve(d3.curveLinearClosed)
            )

        g.selectAll('.tick-type') // 绘所有轴添加类型名
            .data(keys)
            .enter()
            .append('text')
            .attr('class', 'tick-type')
            .attr('text-anchor', function (d) {
                return x(d) > Math.PI ? 'end' : 'start'
            })
            .attr('x', function (d) {
                return Math.sin(x(d)) * (outerRadius + 10)
            })
            .attr('y', function (d) {
                return -1 * Math.cos(x(d)) * (outerRadius + 10)
            })
            .text(function (d) {
                return names[d]
            })

        g.append('g') // 开始绘画旋线条
            .attr('class', 'line-container')
            .append('path')
            .datum(points)
            .attr('class', 'spiral-line')
            .style('stroke', 'blue')
            .style('fill', 'none')
            .style('stroke-width', 1)
            .attr(
                'd',
                d3
                    .lineRadial()
                    .angle(function (d) {
                        return d[0]
                    })
                    .radius(function (d) {
                        return y(d[1])
                    })
                    .curve(d3.curveLinear)
            )
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.a !== this.props.a || nextProps.b !== this.props.b) {
            // 更新线条
            const {outerRadius, fy} = this.archimedeanSpiralLine
            const a = nextProps.a
            const b = nextProps.b
            let points = []
            let formatXY = d3.format('.2f')
            d3.range(0, 4800, 5).forEach(function (item) {
                const angle = formatXY((item * Math.PI) / 180)
                const radius = formatXY(fy(angle, a, b))
                points.push([angle, radius])
            })
            let y = d3
                .scaleLinear()
                .range([0, outerRadius])
                .domain([0, 100])
            let g = d3.select(this.chartRef).select('.line-container')
            g.select('.spiral-line').remove()
            g.append('path') // 绘画线条
                .datum(points)
                .attr('class', 'spiral-line')
                .style('stroke', 'blue')
                .style('fill', 'none')
                .style('stroke-width', 1)
                .attr(
                    'd',
                    d3
                        .lineRadial()
                        .angle(function (d) {
                            return d[0]
                        })
                        .radius(function (d) {
                            return y(d[1])
                        })
                        .curve(d3.curveLinear)
                )
        }
    }

    render() {
        return (
            <div className="archimedean-spiral-line-simple">
                <svg ref={r => (this.chartRef = r)}/>
            </div>
        )
    }
}

D3ArchimedeanSpiralLine.propTypes = {
    a: PropTypes.number,
    b: PropTypes.number
}

export default D3ArchimedeanSpiralLine
