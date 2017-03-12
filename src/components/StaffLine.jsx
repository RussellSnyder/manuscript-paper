import React from 'react';

export default class StaffLine extends React.Component {
    render() {
        let {strokeWidth, color, y} = this.props

        let style = {
            strokeWidth: strokeWidth,
            stroke: color
        }

        return (
            <line x1={0} x2={'100%'} y1={y} y2={y}
                  className="staff-line" style={style} />
        )
    }
}