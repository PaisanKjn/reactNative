import { View, Text, Button } from "react-native";
import React from "react";

const IndexScreen = ({ navigation, route }) => {
  // const { post } = route.params;
  // Post updated, do something with route.params.post
  React.useEffect(() => {

  }, [route.params?.post]);
  return (
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>  
      <Button title="Create Post" onPress={() => navigation.navigate("CreatePost")} />
      <Text>Post: {route.params?.post}</Text>
    </View>
  );
};

export default IndexScreen;
