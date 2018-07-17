import React, {Component} from 'react';

import {Navigator} from 'react-native-deprecated-custom-components';
import Launch from './Login';

export default class navigator extends Component<Props> {
    render() {
        return (
            <Navigator
                initialRoute={{name: 'Welcome Page', component: Launch}}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>
                }}
            />
        )
    }
}