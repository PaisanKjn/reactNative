import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import React, {useState} from 'react'

const Login = () => {

    const checkTextInput = () => {
        // Check for the Name TextInput
        if (!textInputName.trim()) {
            alert('Please Enter Name');
            return;
        }
        // Check for the Email TextInput
        if (textInputEmail.trim().indexOf('@') == -1) {
            alert('Please Enter Email');
            return;
            
        }

        // Chekcked Successfully
        if (textInputName.trim() && textInputEmail.trim().indexOf('@') != -1) {
            alert('Success');
            return;
        }
        // Do whatever you want
    }

    const [textInputName, setName] = useState('');
    const [textInputEmail, setEmail] = useState('');

  return (
    <View>
      <TextInput
      placeholder='Enter Name'
      style = {styles.textInputStyle}
      value = {textInputName}
      onChangeText = {(value) => {setName(value)}}
      />
      <TextInput
      placeholder='Enter Email'
      style = {styles.textInputStyle}
      value = {textInputEmail}
      onChangeText = {(value) => {setEmail(value)}}
      />
      <Text>{'\n'}</Text>
      <Button
      color="#888888"
      title = 'SUBMIT'
      onPress={() => checkTextInput()}
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    textInputStyle: {
        width: '100%',
        height: 40,
        width: 400,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    }

})