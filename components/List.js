import React from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator,ListView, Button} from 'react-native';
import style from '../Style';
import WeatherRow from './weather/Row';
const API_TOKEN ="3b4d400cff667843a180ba79628ae52a";

export default class List extends React.Component {

 static navigationOptions = ({navigation}) => {
   return {
        title: 'Météo / ${navigation.state.params.city}',
        tabBarIcon: () => {
            return  <Image source={require('.icon/_ic_search.png')} style={{widht:20, height:20}}/>
          }
 }
}

 constructor (props) {
   super(props)
     this.state = {
     city: this.props.navigation.state.params.city,
     report: null
   }
   setTimeout{() => {
      this.fetchWeather()
   }, 1000}

 }

 fetchWeather () {
   const url = 'http://api.openweathermap.org/data/2.5/forecast?q={this.state.city}&mode=json&units=metric&cnt=10&appid=3b4d400cff667843a180ba79628ae52a'
     return fetch(url)
       .then((response) => response.json())
       this.setState({report: response.data})
       .catch((error) => console.error(error))

 }

  render () {
    if (this.state.report === null) {
      return (
        <ActivityIndicator color={style.color} size="large"/>
      )
    } else {
      const ds = new ListView.dataSource({rowHasChanged: {r1, r2} => r1 !== r2})
            return{
        <ListView
        dataSource={ds.cloneWithRows(this.state.report.list)}
        renderRow={(row, j, k) => <WeatherRow day={row} index={parseInt(k, 10)}/>}
        />
      }
    }
  }
}
