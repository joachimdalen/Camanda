import React from "react";
import update from "immutability-helper";
import getPath from 'lodash/get';
import setIn from 'lodash/fp/set';

export function getError(errorName, state) {
    return (<span className="help-block"><strong>{state.error[errorName]}</strong></span>)
}

export function hasError(errorName, state) {
    if (state.error !== null) {
        if (state.error[errorName] !== undefined) {
            return true;
        }
    }
    return false;
}

export function handleChange(e, par) {
    let parts = e.target.name.split(".");
    switch (parts.length) {
        case 1:
            par.setState({
                [parts[0]]: e.target.value
            });
            break;
        case 2:
            par.setState({
                [parts[0]]: update(par.state[parts[0]],
                    {
                        [parts[1]]: {
                            $set: e.target.value
                        }
                    })
            });
            break;
    }
}

export function getLocalVariable(name) {
    return new Promise(function (resolve, reject) {
        var variable = $('#' + name).val();

        if (variable !== '' && variable !== undefined) {
            resolve(variable);
        } else {
            reject(Error("Value not defined"));
        }
    });
}

/*
https://stackoverflow.com/a/42491445/8136108
*/
export function linkMultiCheck(name, value, ev, thiss) {
    let values = getPath(thiss.state, name, []);
    if (ev.target.checked) {
        values = [...values, value];
    } else {
        values = values.filter(v => v !== value);
    }
    thiss.setState(setIn(name, values));
}
export function humanFileSize(bytes, si) {
    var thresh = si ? 1000 : 1024;
    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }
    var units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    var u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1) + ' ' + units[u];
}