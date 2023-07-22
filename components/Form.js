import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, {useState} from 'react'

const Form = () => {

    const [name, setName] = useState('Taylor');
    const [age, setAge] = useState(0);


  return (
    <View style = {styles.container}>
      <TextInput
      placeholder='Enter a name'
      style = {styles.textInputStyle}
      value = {name}
      onChangeText={(value) => {setName(value)}}
      />
      <Text>{'\n\n'}</Text>
      <Button
      title = 'INCREMENT AGE'
      onPress = {() => {setAge(age + 1)}}
      />

      <Text>{'\n\n'}Hello, {name}. You are {age}</Text>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },

})