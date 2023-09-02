import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const ThirdPage = ({navigation}) => {
  return (
    <View style = {styles.container}>
     <Text style = {styles.textStyle}>This is the Third Page of the App</Text>
      <Text></Text>
      <Button
      title = 'go back'
      onPress={() => navigation.goBack()}
      />
      <Button
      title = 'go to second page'
      onPress={() => navigation.navigate('second')}
      />
      <Button
      title = 'reset navigation to first page'
      onPress={() => navigation.navigate('first')}
      />
    </View>
  )
}

export default ThirdPage

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    },
    textStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16
    },
    })