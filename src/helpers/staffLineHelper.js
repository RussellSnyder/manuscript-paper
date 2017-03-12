import React from 'react'

import BassClef from '../components/subComponents/BassClef.jsx';
import TrebleClef from '../components/subComponents/TrebleClef.jsx';
import StaffLine from '../components/StaffLine.jsx'

import Clef from '../components/Clef.jsx'

function _generateStaffStyle(staffHeight, staffSettingsObject) {
    let {staffSpacing} = staffSettingsObject;

    return {
        height: staffHeight + 'mm',
        width: '100%',
        marginBottom: staffSpacing + 'mm'
    }

}

function _generateGrandStaffStyle(staffSettingsObject) {
    let {spaceBetweenGrandStaff, staffSpacing} = staffSettingsObject;

    let singleStaffHeight = calculateStaffHeight(8, staffSettingsObject)
    let totalHeight = singleStaffHeight * 2 + spaceBetweenGrandStaff

    return {
        topStaff: {
            height: singleStaffHeight + 'mm',
            width: '100%'
        },
        bottomStaff: {
            y: singleStaffHeight + spaceBetweenGrandStaff + 'mm',
            height: singleStaffHeight + 'mm',
            width: '100%'
        },

        container: {
            height: totalHeight + 'mm',
            width: '100%',
            marginBottom: staffSpacing + 'mm'
        }
    }

}

function generateBlankLine(staffSettingsObject, index, offset = 0) {
    let {staffLineThickness, staffLineSpacing} = staffSettingsObject

    return (
        <StaffLine strokeWidth={staffLineThickness + 'mm'} key={'blank-staffLine-' + index}
                                y={index * staffLineSpacing + staffLineThickness + offset + 'mm'}
                                stroke={'transparent'} className={`blank-staffline-${index}`} />)

}

function _generateStaffLines(numberOfStaffLines, staffSettingsObject, offset = 0) {
    let {staffLineThickness, staffLineColor, staffLineSpacing} = staffSettingsObject


    let staffLines = []

    // treble clef is getting cut off
    // need to add two blank lines on top for it
    staffLines.push(generateBlankLine(staffSettingsObject, 0, offset))
    staffLines.push(generateBlankLine(staffSettingsObject, 1, offset))

    for (let i = 2; i < numberOfStaffLines + 2; i++) {
        staffLines.push(<StaffLine strokeWidth={staffLineThickness + 'mm'} key={'staffLine-' + i}
                                   y={i * staffLineSpacing + staffLineThickness + offset + 'mm'}
                                   color={staffLineColor} className={`staffline-${i}`}/>)
    }

    // add a line underneath cause yolo
    staffLines.push(generateBlankLine(staffSettingsObject, numberOfStaffLines + 2, offset))


    return staffLines

}

function calculateStaffHeight(numberOfLinesInStaff, staffSettingsObject) {
    let {staffLineThickness, staffLineSpacing} = staffSettingsObject

    return numberOfLinesInStaff * (staffLineThickness + staffLineSpacing)
}

function generateStaff(staffSettingsObject) {
    let {staffType} = staffSettingsObject

    let numberOfStaffLines = staffType === 'treble' || staffType === 'bass' ? 5 : 4;

    let staffLines = _generateStaffLines(numberOfStaffLines, staffSettingsObject)

    return (
        <svg style={_generateStaffStyle(calculateStaffHeight(7, staffSettingsObject), staffSettingsObject)}
             className="staff">
            {staffLines}
            <Clef {...staffSettingsObject} />
        </svg>
    )
}

function generateGrandStaff(staffSettingsObject) {
    let {spaceBetweenGrandStaff} = staffSettingsObject

    let topStaffLines = _generateStaffLines(5, staffSettingsObject)
    let bottomStaffLines = _generateStaffLines(5, staffSettingsObject)

    let styles = _generateGrandStaffStyle(staffSettingsObject)

    let bassClefOffset = calculateStaffHeight(8, staffSettingsObject) + spaceBetweenGrandStaff


    return (
        <svg style={styles.container} className="grand-staff">
            <svg style={styles.topStaff} className="top-staff">
                {topStaffLines}
                <TrebleClef {...staffSettingsObject} />
            </svg>
            <svg style={styles.bottomStaff} className="bottom-staff" y={bassClefOffset + 'mm'}>
                {bottomStaffLines}
                <BassClef {...staffSettingsObject} grandStaff={true}/>
            </svg>
        </svg>
    )
}


export {generateStaff, generateGrandStaff, calculateStaffHeight}