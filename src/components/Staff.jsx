import React from 'react';
import {generateStaff, generateGrandStaff} from '../helpers/staffLineHelper.js'

export default class Staff extends React.Component {
    render() {
        let {staffType} = this.props

        let staff = null;

        switch(staffType) {
            case 'bass':
                staff = generateStaff(this.props)
                break
            case 'treble':
                staff = generateStaff(this.props)
                break
            case 'piano':
                staff = generateGrandStaff(this.props)
                break
            default:
                staff = generateStaff(this.props)
        }

        return staff
    }
}