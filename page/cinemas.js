import React, {Component} from 'react'
import Loading from './loading'
import api from '../api/api'
import {
  View,
  ScrollView,
  Text,
  StyleSheet
} from 'react-native'

export default class Cinemas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cinemasList: []
    }
  }
  static navigationOptions = {
    title: '附近电影院'
  }
  componentWillMount() {
    api.getCinemasList()
      .then(res => res.json())
      .then(resData => {
        this.setState({
          cinemasList: resData.result.list
        })
      })
  }
  render() {
    if (this.state.cinemasList.length >= 1)
      return (
        <ScrollView>
          <View style={styles.item}>
            <View style={styles.itemTop}>
              <Text style={styles.itemName}>{this.state.cinemasList[0].name}</Text>
              <View style={styles.priceWrapper}><Text style={styles.itemPrice}>{this.state.cinemasList[0].price}</Text><Text style={styles.unit}>元起</Text></View>
            </View>
            <Text style={styles.itemSite}>{this.state.cinemasList[0].site}</Text>
            <View style={styles.itemBottom}>
              <View style={styles.seat}>
                <Text style={styles.seatFont}>座</Text>
              </View>
              <View style={styles.discount}>
                <Text style={styles.discountFont}>惠</Text>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.itemTop}>
              <Text style={styles.itemName}>{this.state.cinemasList[1].name}</Text>
              <View style={styles.priceWrapper}><Text style={styles.itemPrice}>{this.state.cinemasList[1].price}</Text><Text style={styles.unit}>元起</Text></View>
            </View>
            <Text style={styles.itemSite}>{this.state.cinemasList[1].site}</Text>
            <View style={styles.itemBottom}>
              <View style={styles.seat}>
                <Text style={styles.seatFont}>座</Text>
              </View>
              <View style={styles.discount}>
                <Text style={styles.discountFont}>惠</Text>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.itemTop}>
              <Text style={styles.itemName}>{this.state.cinemasList[2].name}</Text>
              <View style={styles.priceWrapper}><Text style={styles.itemPrice}>{this.state.cinemasList[2].price}</Text><Text style={styles.unit}>元起</Text></View>
            </View>
            <Text style={styles.itemSite}>{this.state.cinemasList[2].site}</Text>
            <View style={styles.itemBottom}>
              <View style={styles.seat}>
                <Text style={styles.seatFont}>座</Text>
              </View>
              <View style={styles.discount}>
                <Text style={styles.discountFont}>惠</Text>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.itemTop}>
              <Text style={styles.itemName}>{this.state.cinemasList[3].name}</Text>
              <View style={styles.priceWrapper}><Text style={styles.itemPrice}>{this.state.cinemasList[3].price}</Text><Text style={styles.unit}>元起</Text></View>
            </View>
            <Text style={styles.itemSite}>{this.state.cinemasList[3].site}</Text>
            <View style={styles.itemBottom}>
              <View style={styles.seat}>
                <Text style={styles.seatFont}>座</Text>
              </View>
              <View style={styles.discount}>
                <Text style={styles.discountFont}>惠</Text>
              </View>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.itemTop}>
              <Text style={styles.itemName}>{this.state.cinemasList[4].name}</Text>
              <View style={styles.priceWrapper}><Text style={styles.itemPrice}>{this.state.cinemasList[4].price}</Text><Text style={styles.unit}>元起</Text></View>
            </View>
            <Text style={styles.itemSite}>{this.state.cinemasList[4].site}</Text>
            <View style={styles.itemBottom}>
              <View style={styles.seat}>
                <Text style={styles.seatFont}>座</Text>
              </View>
              <View style={styles.discount}>
                <Text style={styles.discountFont}>惠</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )
    else 
      return (
        <View>
          <Text>附近暂无电影院哦！(●'◡'●)</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  item: {
    height: 120,
    backgroundColor: '#fff',
    paddingBottom: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: 'rgba(155,155,155,0.4)',
    paddingLeft: 20,
    paddingTop: 10
  },
  itemTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 10
  },
  itemName: {
    fontSize: 20,
    color: '#000',
  },
  itemPrice: {
    color: 'red',
    fontSize: 19
  },
  itemBottom: {
    flexDirection: 'row',
  },
  seat: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 24,
    height: 24,
    borderColor: '#87cefa',
    borderWidth: 1,
    borderRadius: 4
  },
  seatFont: {
    color: '#87cefa'
  },
  discount: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    width: 24,
    height: 24,
    backgroundColor: '#ffa500',
    borderRadius: 4
  },
  discountFont: {
    color: '#fff'
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 50,
    marginRight: 50,
  },
  unit: {
    color: 'red',
    fontSize: 16,
    marginLeft: 6
  }
})
