import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const CustomSIdeBarMenu = (props) => {
  const BASE_PATH =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/";
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Image */}
      <Image
        source={require("../assets/react_logo.png")}
        style={styles.sideMenuProfileIcon}
      />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem 
            label = 'Visit Us'
            onPress={() => Linking.openURL('https://it.tni.ac.th')}
            labelStyle = {{color: '#fff'}}
        />
        
        
        <View style = {styles.customItem}>
        <Text style = {{color: '#fff'}} onPress={() => Linking.openURL('https://arknights.fandom.com/wiki/Lee')}>WebSite TNI</Text>
        <Image
        source = {{uri: BASE_PATH + 'star_filled.png'}}
        style = {styles.iconStyle}
        />
        </View>
      </DrawerContentScrollView>
      <Text style = {{textAlign: "center", color: '#ccc'}}> www.tni.ac.th</Text>

     
    </SafeAreaView>
  );
};

export default CustomSIdeBarMenu;

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});
