import React from 'react';
import Staves from './components/Staves.jsx';
import SettingsContainer from './components/SettingsContainer.jsx';

import '../styles/index.scss';

export default class App extends React.Component {
    render() {
        let {applicationState, emitter} = this.props;


        let settings = applicationState.settings;
        let {title, footer, createdAt} = applicationState.metaData;

        let style = {
            width: `${settings.paperSettings.width}mm`,
            height: `${settings.paperSettings.height}mm`
        }

        return (
            <div className="manuscript-paper-app" style={style}>
                <SettingsContainer applicationState={applicationState} emitter={emitter} />
                {title ? <h1 className="title">{title}</h1> : null}
                <Staves {...settings} />
                {footer ? <h2 className="footer">{footer}</h2> : null}
                {createdAt ? <h3 className="created-at">{createdAt}</h3> : null}
            </div>
        )
    }
}
