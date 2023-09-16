import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const App = () => {
  const Tab = createMaterialBottomTabNavigator();
  function Feed() {
    return (
      <View>
        <Text>Feed</Text>
      </View>
    );
  }

  function Profile() {
    return (
      <View>
        <Text>Profile</Text>
      </View>
    );
  }

  function Notification() {
    return (
      <View>
        <Text>Notif</Text>
      </View>
    );
  }

  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: "pearl" }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
        name = 'Profile'
        component={Profile}
        options = {{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (<MaterialCommunityIcons name = 'account' color = {color} size={26}/>)
        }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
