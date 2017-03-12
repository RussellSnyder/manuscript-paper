import React from 'react';
import {calculateStaffHeight} from '../../helpers/staffLineHelper.js'

export default class BassClef extends React.Component {
    render() {

        let {clefColor, clefThickness, grandStaff, staffLineSpacing, staffLineThickness} = this.props


        let clefWidth = calculateStaffHeight(4, this.props)

        let clefHeight = calculateStaffHeight(4, this.props)

        let clefOffset = (staffLineSpacing + staffLineThickness) * 2


        let circleStyle = {
            fill: clefColor
        }

        let pathStyle = {
            stroke: clefColor,
            fill: 'transparent',
            strokeWidth: clefThickness + 'mm',
            strokeLinecap: 'rounded'
        }

        let fCircleSize = clefThickness * 1.8;
        let smallCircleSize = clefThickness * 3;


        return (
            <svg width={clefWidth + 'mm'} height={clefHeight + 'mm'} y={clefOffset + 'mm'}
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox={`0 0 100 100`} className="bass-clef">
                <circle cx="15" cy="25" r={fCircleSize + 'mm'} style={circleStyle}/>
                <path d="M7 25 C 0 0, 50 0, 50 25" style={pathStyle}/>
                <path d="M50 25 C 50 60, 3 80, 3 80" style={pathStyle}/>
                <circle cx="65" cy="15" r={smallCircleSize} style={circleStyle}/>
                <circle cx="65" cy="35" r={smallCircleSize} style={circleStyle}/>
            </svg>
        )
    }
}