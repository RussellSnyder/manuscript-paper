import React from 'react';
import {calculateStaffHeight} from '../../helpers/staffLineHelper.js'

export default class TrebelClef extends React.Component {
    render() {

        let {clefColor, clefThickness} = this.props

        let staffHeight = calculateStaffHeight(5, this.props)

        let pathStyle = {
            stroke: clefColor,
            fill: 'transparent',
            strokeWidth: clefThickness / 2 + 'mm',
            shapeRendering: 'geometricPrecision'
            // strokeLinecap: 'rounded'
        }

        let circleStyle = {
            fill: clefColor,
            shapeRendering: 'geometricPrecision'
            // strokeLinecap: 'rounded'
        }

        let trebleClefHeight = staffHeight + (staffHeight * 2/5)


        return (
        <svg width={trebleClefHeight * 0.4 + 'mm'} height={trebleClefHeight + 'mm'}
             xmlns="http://www.w3.org/2000/svg"
//             viewBox={`0 40 100 60`}
             viewBox={`0 0 40 100`}
             preserveAspectRatio={"xMidYMid meet"}
             className="treble-clef"
        >
                <path d="M38 62 C 40 45, 5 45, 18 65" style={pathStyle}/>
                <path d="M5 62 C 4 75, 40 80, 38 62" style={pathStyle}/>
                <path d="M32 25 C 32 35, 0 50, 5 62" style={pathStyle}/>
                <path d="M20 25 C 18 0, 35 10, 32 25" style={pathStyle}/>
                <path d="M30 85 C 20 25, 20 25, 20 25" style={pathStyle}/>
                <path d="M5 87.5 C 5 100, 35 100, 30 85" style={pathStyle}/>
                <circle cx="10" cy="87.5" r={clefThickness * 1.1 + 'mm'} style={circleStyle} />
        </svg>
        )
    }
}

// old treble clef
{/*<svg width={trebleClefHeight + 'mm'} height={trebleClefHeight + 'mm'}*/}
     {/*xmlns="http://www.w3.org/2000/svg"*/}
     {/*viewBox={`0 55 60 60`} className="clef">*/}
    {/*<g className="treble-clef">*/}

        {/*<path style={pathStyle}*/}
              {/*d="M 20,79 C 19,79 19,79 18,80 C 18,80 18,81 18,82 C 18,82 18,83 18,83 C 18,84 19,84 19,84 C 20,84 20,84 20,85 C 20,85 20,85 19,85 C 18,84 18,84 17,83 C 17,82 16,82 16,81 C 16,80 17,79 17,78 C 18,77 19,76 19,76 L 19,72 C 17,74 16,75 15,76 C 14,78 14,79 14,81 C 14,82 14,82 14,83 C 14,84 15,84 15,85 C 16,86 18,87 20,87 C 20,87 21,87 22,86 L 20,79 z M 21,78 L 22,86 C 24,85 25,84 25,82 C 25,81 24,81 24,80 C 24,80 23,79 23,79 C 22,79 21,78 21,78 z M 19,68 C 19,68 19,67 20,67 C 20,66 21,66 21,65 C 21,65 22,64 22,63 C 22,63 22,62 22,61 C 22,61 22,61 22,61 C 22,60 22,60 22,60 C 22,60 21,60 21,60 C 21,60 20,60 20,61 C 19,61 19,62 19,63 C 18,64 18,65 18,66 C 18,67 18,67 19,68 z M 18,69 C 18,67 17,65 17,64 C 17,63 17,62 18,61 C 18,60 18,59 19,58 C 19,57 19,57 20,57 C 20,56 21,56 21,56 C 21,56 21,56 21,56 C 21,56 21,56 21,57 C 23,58 23,60 23,63 C 23,64 23,65 23,66 C 22,67 22,68 21,69 C 21,70 20,71 19,72 L 20,76 C 21,76 21,76 21,76 C 22,76 23,76 23,76 C 24,76 24,77 25,77 C 25,78 26,79 26,79 C 26,80 26,81 26,81 C 26,83 26,84 25,85 C 25,86 24,86 22,87 C 23,87 23,88 23,89 C 23,90 23,91 23,91 C 23,92 24,92 24,93 C 24,93 23,94 23,95 C 23,95 22,96 21,96 C 21,97 20,97 19,97 C 18,97 17,96 16,96 C 16,95 15,94 15,93 C 15,93 15,92 15,92 C 16,92 16,91 16,91 C 17,91 17,91 17,91 C 18,91 18,91 19,91 C 19,91 19,91 19,92 C 20,92 20,93 20,93 C 20,94 19,94 19,94 C 19,95 18,95 18,95 L 17,95 C 18,96 18,96 19,96 C 20,96 20,96 21,96 C 21,96 21,95 22,95 C 22,95 22,94 22,94 C 23,94 23,93 23,92 C 23,92 23,91 23,91 C 22,90 22,90 22,89 C 22,88 22,88 22,87 C 21,87 20,87 20,87 C 19,87 18,87 17,87 C 16,86 15,86 14,85 C 13,84 13,83 12,82 C 12,81 12,80 12,79 C 12,78 12,77 12,76 C 13,75 13,74 14,73 C 14,73 15,72 16,71 C 16,70 17,70 18,69 z "/>*/}
    {/*</g>*/}
{/*</svg>*/}
