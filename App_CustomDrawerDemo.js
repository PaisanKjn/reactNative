
import React from "react";
import "react-native-gesture-handler";
import { View, Text, Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator,
  DrawerContent,
DrawerContentScrollView,
DrawerItem,
DrawerItemList, } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem
      label = "Help"
      onPress = {()=>Linking.openURL('https://reactnative.dev')}
      />
    </DrawerContentScrollView>
  )
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
    drawerContent = {(props) => <CustomDrawerContent {...props}/>}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#f0f8ff",
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
