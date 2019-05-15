import React from 'react'
import {StyleSheet, Text, View, ActivityIndicator, Image, Button, Keyboard } from 'react-native';
import style from '../Style'
import { StackNavigator } from 'react-navigation'
import List from './List'

export default class Search extends React.Component{

  static navigationOptions = {
    title: 'Rechercher une Ville',
    tabBarIcon: () => {
        return  <Image source={require('.icon/ic_home.png')} style={{widht:20, height:20}}/>
      }
    }

  constructor (props) {
    super(props)
    this.state = {
     city:
     }
  }

setCity (city) {
  this.setState{(city)}
}

submit () {
  Keyboard.dismiss()
this.props.navigation.navigate('Result', {city: this.state.city})

}


render(){
return(
<View style={style.container}>
   <TextInput
  underlineColorAndroid='transparent'
  onChangeText={(text) => this.setCity(text)}
  onSubmitEditting={() => this.submit()}
  style={style.input}
  value={this.state.city}

/>
<Button color={style.color} onPress={() => this.submit()} title="Rechercher"/>
</View>
)
}

}

const navigationOptions = {
  headerStyle= style.header,
  headerTitleStyle: style.headerTitle
}
export default StackNavigator({
  Search: {
    screen: Search
    navigationOptions
  },
  Result:{
    screen: List
    navigationOptions
  }
})
