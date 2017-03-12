import React from 'react';

const className = 'settings-container'

export default class SettingsContainer extends React.Component {
    constructor(props) {
        super();

        this.state = {
            showSettings: true,
            showMetaData: true,
            showPaper: false,
            showStaves: false,
            showStaff: false,
            showClef: false,
            showStaffTypes: false
        }

    }

    render() {
        let {applicationState} = this.props;

        let staffSettings = {
            'staffLineThickness': applicationState.settings.staffSettings.staffLineThickness,
            'staffLineColor': applicationState.settings.staffSettings.staffLineColor,
            'staffLineSpacing': applicationState.settings.staffSettings.staffLineSpacing,
            'staffSpacing': applicationState.settings.staffSettings.staffSpacing,
            'spaceBetweenGrandStaff': applicationState.settings.staffSettings.spaceBetweenGrandStaff
        }

        let clefSettings = {
            'clefThickness': applicationState.settings.staffSettings.clefThickness,
            'clefColor': applicationState.settings.staffSettings.clefColor,
        }

        let staffTypes = {
            'Piano': 'piano',
            'Treble': 'treble',
            'Bass': 'bass',
            'Grand Staff': 'piano'
        }

        return (
            <div className={className}>
                <p onClick={() => this.toggle('showSettings')}>
                    Settings <i className={"pull-right fa fa-" + (this.state.showSettings ? 'minus' : 'plus')}/>
                </p>
                <div className={"inner-container" + (!this.state.showSettings ? ' hidden' : '')}>
                    {this.makeSettingGroup('meta-data', 'Meta Data', 'showMetaData',
                        applicationState.metaData, 'metaData')}
                    {this.makeSelectGroup('staff-type', 'Staff Type', 'showStaffTypes',
                        staffTypes)}
                    {this.makeSettingGroup('paper', 'Paper', 'showPaper',
                        applicationState.settings.paperSettings, 'settings', 'paperSettings')}
                    {this.makeSettingGroup('staves', 'Staves', 'showStaves',
                        applicationState.settings.stavesSettings, 'settings', 'stavesSettings')}
                    {this.makeSettingGroup('staff', 'Staff', 'showStaff',
                        staffSettings, 'settings', 'staffSettings')}
                    {this.makeSettingGroup('clef', 'Clef', 'showClef',
                        clefSettings, 'settings', 'staffSettings')}
                </div>
            </div>
        )
    }

    makeSettingGroup(className, title, stateBinding, data, locationOnGlobalState, locationOnGlobalStateLvl2) {
        let settingsArray = Object.keys(data).map(item => {
            let type = !isNaN(data[item]) ? 'number' : ''
            let stepSize = isNaN(data[item]) ? '' : data[item] % 1 === 0 ? '1' : '0.1'
            return (
                <div className="form-group row" key={item}>
                    <label className="control-label col-sm-5 text-right">{item}:</label>
                    <div className="col-sm-7">
                        <input className="form-control" step={stepSize} type={type} name={item} value={data[item]}
                        onChange={(e) => this.updateSetting(e, item, locationOnGlobalState, locationOnGlobalStateLvl2)}
                        />
                    </div>
                </div>
            )
        })


        return (
            <div className={className + " setting-group"}>
                <h4 className="setting-title" onClick={() => this.toggle(stateBinding)}>
                    {title} <i className={"fa fa-chevron-" + (this.state[stateBinding] ? 'up' : 'down')}/>
                </h4>
                <div className={"settings " + className + (!this.state[stateBinding] ? ' hidden' : '')}>
                    {settingsArray}
                </div>
            </div>
        )
    }

    makeSelectGroup(className, title, stateBinding, selectOptions) {
        let options = Object.keys(selectOptions).map(item => {
            return (
                <option key={item} value={selectOptions[item]}>
                    {item}
                </option>
            )
        })

        return (
            <div className={className + " setting-group"}>
                <h4 className="setting-title" onClick={() => this.toggle(stateBinding)}>
                    {title} <i className={"fa fa-chevron-" + (this.state[stateBinding] ? 'up' : 'down')}/>
                </h4>
                <div className={"settings " + className + (!this.state[stateBinding] ? ' hidden' : '')}>
                    <select name='staff-type'>
                        {options}
                    </select>
                </div>
            </div>
        )
    }

    updateSetting(e, item, locationOnGlobalState, locationOnGlobalStateLvl2) {
        let newValue = e.target.value
        console.log(newValue, item, locationOnGlobalState,locationOnGlobalStateLvl2)
        this.props.emitter.emit('updateSetting', newValue, item, locationOnGlobalState, locationOnGlobalStateLvl2)
    }

    toggle(component) {
        this.setState({
            [component]: !this.state[component]
        })

    }
}