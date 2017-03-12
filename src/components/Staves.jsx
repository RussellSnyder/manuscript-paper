import React from 'react';
import Staff from './Staff.jsx'

const className = 'Staves'

export default class Staves extends React.Component {
    render() {
        let {marginX, marginY, numStaves} = this.props.stavesSettings;
        let {width, height} = this.props.paperSettings;

        let staves = [];
        for (let i = 0; i < numStaves; i++) {
            staves.push(<Staff  {...this.props.staffSettings} key={'staff-' + i} />)
        }

        let style = {
            width: `${width - (marginX * 2)}mm`,
            margin: `${marginY}mm ${marginX}mm`
        }

        return (
            <div className={className} style={style}>
                {staves}
            </div>
        )

    }
}