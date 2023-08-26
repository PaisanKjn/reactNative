import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacityBase, Image } from "react-native";
import React from "react";
import NewsAPI from "./components/NewsAPI";
const App = () => {
  return (
    <View>
      <NewsAPI/>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({});
