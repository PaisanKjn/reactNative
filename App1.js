import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import DefineStyle from './components/DefineStyle';


export default function App() {
  return (
    <View style = {styles.container}> 
      <DefineStyle/>
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

