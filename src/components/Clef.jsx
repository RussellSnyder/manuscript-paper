import React from 'react';
import BassClef from './subComponents/BassClef.jsx';
import TrebleClef from './subComponents/TrebleClef.jsx';

export default class Clef extends React.Component {
    render() {
        let clef = null;

        switch (this.props.staffType) {
            case 'bass':
                clef = <BassClef {...this.props} />
                break
            case 'treble':
                clef = <TrebleClef {...this.props} />
                break
            default:
                clef = <BassClef {...this.props} />
        }


        return clef
    }
}