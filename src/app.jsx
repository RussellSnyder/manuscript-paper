import React from 'react';
import Staves from './components/Staves.jsx';
import {initialState} from './static/initialState.js';

import '../styles/index.scss';

export default class App extends React.Component {
    render() {
        let settings = initialState.settings;
        let {title, footer, createdAt} = initialState.metaData;

        let style = {
            width: `${settings.paperSettings.width}mm`,
            height: `${settings.paperSettings.height}mm`
        }

        return (
            <div className="manuscript-paper-app" style={style}>
                {title ? <h1 className="title">{title}</h1> : null}
                <Staves {...settings} />
                {footer ? <h2 className="footer">{footer}</h2> : null}
                {createdAt ? <h3 className="created-at">{createdAt}</h3> : null}
            </div>
        )
    }
}
