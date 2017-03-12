import React from 'react';
import {EventEmitter} from 'fbemitter';
import {render} from 'react-dom';
import App from './app.jsx';

import {initialState} from './static/initialState.js';

const emitter = new EventEmitter();


let applicationState = initialState

function update() {
    render(
        <App applicationState={applicationState} emitter={emitter} />,
        document.querySelector("#app")
    );
}

update();

emitter
    .addListener('updateSetting', (value, name, location, location2) => {
        if (!isNaN(value)) {
            value = parseFloat(value)
        }

        if (location2) {
            applicationState[location][location2][name] = value
        } else {
            applicationState[location][name] = value
        }
        console.log(applicationState)
        update();
    })