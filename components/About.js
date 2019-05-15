import React from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator, Button} from 'react-native';
import style from '../Style'

export default class About extends React.Component {

static navigationOptions = {
  tabBarIcon: () => {
      return  <Image source={require('.icon/_ic_search.png')} style={{widht:20, height:20}}/>
    }
  }

search() {
  this.props.navigation.navigate('Search')
}

render() {
  return(
    <View style={style.container}>
    <Text style={style.title}>on essai des chose</Text>
    <Button color={style.color} onPress={() => this.search()} title="Rechercher une ville"/>
    </View>
  )
 }
}
