import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacityBase, Image } from "react-native";
import React from "react";
import TouchablePractice from "./components/TouchablePractice";

const App = () => {
  return (
    <View style = {styles.container}>
      <TouchablePractice/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
});
