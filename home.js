import React, {Component} from 'react'
import Loading from './loading'
import ScrollMovies from '../components/scroll-movies'
import ColMovies from '../components/col-movies'
import api from '../api/api'
import {
  Image,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  StyleSheet
} from 'react-native'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotMovies: [],
      hotMoviesTemp: [],
      comingMovies: [],
      comingMoviesTemp: [],
      loadedHot: false,
      loadedComing: false
    };
  }
  static navigationOptions = {
    title: '电影'
  }
  componentDidMount() {
    api.getHotMoiveList()
      .then(response => response.json())
      .then(responseData => {
        let hotMoviesTemp = []
        for (let i = 0; i < 4; i++) {
          hotMoviesTemp.push(responseData.subjects[i])
        }
        this.setState({
          hotMovies: responseData.subjects,
          hotMoviesTemp: hotMoviesTemp,
          loadedHot: true,
        });
      });

    api.getComingList()
      .then(response => response.json())
      .then(responseData => {
        let comingMoviesTemp = [];
        for (let i = 0; i < 6; i++) {
          comingMoviesTemp.push(responseData.subjects[i])
        }
        this.setState({
          comingMoviesTemp: comingMoviesTemp,
          comingMovies: responseData.subjects,
          loadedComing: true
        })
      })
  }
  render() {
    let navigate = this.props.navigation.navigate;
    if (!this.state.loadedHot || !this.state.loadedComing) {
      return this.renderLoadingView();
    }
    return (
      <ScrollView style={styles.bgColor}>
        <View>
          <View style={styles.comingTitle}>
            <Text style={styles.tilteFont}>即将上映</Text>
            <TouchableHighlight onPress={() => navigate('AllMovies', { list: this.state.comingMovies, type: 'coming', navigate: navigate })}>
              <Text style={[styles.allFont, styles.FontMargin]}>查看全部{this.state.comingMovies.length}部 ></Text>
            </TouchableHighlight>
          </View>
          <ScrollMovies list={this.state.comingMoviesTemp} navigate={navigate} />
        </View>


        <View>
          <View style={styles.hotTitle}>
            <Text style={styles.tilteFont}>正在热映</Text>
            <TouchableHighlight onPress={() => navigate('AllMovies', { list: this.state.hotMovies, type: 'hot', navigate: navigate })}>
              <Text style={[styles.allFont, styles.FontMargin]}>查看全部{this.state.hotMovies.length}部 ></Text>
            </TouchableHighlight>
          </View>
          <ColMovies list={this.state.hotMoviesTemp} navigate={navigate} />
        </View>
      </ScrollView>
    );
  }
  renderLoadingView() {
    return <Loading />
  }
}

const styles = StyleSheet.create({
  tilteFont: {
    fontSize: 16
  },
  allFont: {
    fontSize: 14
  },
  FontMargin: {
    marginRight: 20
  },
  comingTitle: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20
  },
  hotTitle: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20
  },
  bgColor: {
    backgroundColor: '#fff'
  }
})
