import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

const SecondPage = ({navigation}) => {
  return (
    <View style = {styles.container}>
     <Text style = {styles.textStyle}>This is the Second Page of the App</Text>
      <Text></Text>
      <Button
      title = 'go back'
      onPress={() => navigation.goBack()}
      />
      <Button
      title = 'go to second page...again'
      onPress={() => navigation.push('second')}
      />
      <Button
      title = 'go to first page'
      onPress={() => navigation.navigate('first')}
      />
      <Button
      title = 'go to third page'
      onPress={() => navigation.navigate('third')}
      />
    </View>
  )
}

export default SecondPage

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