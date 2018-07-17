import React, { Component } from 'react'
import FlatMovies from '../components/flat-movies'
import {
  View
} from 'react-native'

export default class AllMovies extends Component {
  static navigationOptions = {
    title: '正在热映'
  }
  render() {
    const { params } = this.props.navigation.state
    return <FlatMovies
        list={params.list}
        type={params.type}
        navigate={params.navigate} />
}
}
