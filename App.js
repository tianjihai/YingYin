/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import { StackNavigator } from 'react-navigation'
import Brief from './page/brief-introduction'
import Home from './page/home'
import AllMovies from './page/all-movies'
import Cinemas from './page/cinemas'

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Brief: {
      screen: Brief
    },
    AllMovies: {
      screen: AllMovies
    },
    Cinemas: {
       screen: Cinemas
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default class App extends Component {
  render() {
    return <RootStack />
  }
}
