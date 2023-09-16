import { View, Text, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Text></Text>
      <Button
        title="Go to Details"
        onPress={() => {
          // Navigate to Details route with params
          navigation.navigate("Details", {
            itemId: 1088,
            otherParam: 'InwDIC'
          });
        }}
      />
    </View>
  );
};

export default HomeScreen;
