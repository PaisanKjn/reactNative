import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import MyInput from './components/MyInput';
import IncrementCounter from './components/IncrementCounter';
import Form from './components/Form';
import Login2 from './components/Login2';


export default function App() {
  return (
    <View style = {styles.container}> 
      <Login2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,   
     //justifyContent:'center',    
     alignItems:'center'   
  }
 })

