import React, {Component} from 'react'
import Loading from './loading'
import api from '../api/api'
import {
  View,StyleSheet,Text,Image,Dimensions,ScrollView,
} from 'react-native'
export default class ReviewArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      loaded: false,
      openText: false
    }
  }
  static navigationOptions = {
    title: '电影简介'
  }
  componentDidMount() {
    let $this = this;
    let params = $this.props.navigation.state.params;
    api.getBriefIntroduction(params.id)
      .then(response => response.json())
      .then(responseData => {
        $this.setState({
          data: responseData,
          loaded: true
        })
      })
  }
  render() {
    const navigate = this.props.navigation.navigate;
    if (this.state.loaded)
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.wrapperImage}><Image style={styles.Image} source={{uri: this.state.data.images.small}} /></View>
          <View style={styles.wrapperTitle}>
            <Text style={styles.title}>{this.state.data.title}</Text>
          </View>
          <Text  style={styles.brief}>{this.state.data.summary}</Text>
        </View>
      </ScrollView>
    )
    return <Loading />
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    minHeight: Dimensions.get('window').height - 90
  },
  wrapperTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    borderBottomColor: 'rgba(155,155,155,0.4)',
    borderBottomWidth: 0.4
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 20,
    marginTop: 10,
    paddingBottom: 10
  },
  button: {
    height: 36,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff4500',
    borderRadius: 4,
    marginRight: 30
  },
  buttonFont: {
    fontSize: 14,
    color: '#ff4500'
  },
  greenFont: {
    color: '#32cd32',
    fontSize: 16,
    marginRight: 10
  },
  flexEnd: {
    alignSelf: 'flex-end'
  },
  wrapperImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 290,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingBottom: 20
  },
  Image: {
    height: 250,
    width: 200,
    marginTop: 20
  },
  brief: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 28
  },
})
