import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { useState } from "react";

const sampleList = [
  { id: 1, title: "Button" },
  { id: 2, title: "Card" },
  { id: 3, title: "Input" },
  { id: 4, title: "Avatar" },
  { id: 5, title: "CheckBox" },
  { id: 6, title: "Header" },
  { id: 7, title: "Icon" },
  { id: 8, title: "Lists" },
  { id: 9, title: "Rating" },
  { id: 10, title: "Pricing" },
  { id: 11, title: "Avatar" },
  { id: 12, title: "CheckBox" },
  { id: 13, title: "Header" },
  { id: 14, title: "Icon" },
  { id: 15, title: "Lists" },
];

const FlatList_HeaderFooter = () => {
  const [listItems, setListItems] = useState(sampleList);

  const EmptyListMessage = ({ item }) => {
    return (
      <Text>
        style = {styles.emptyListStyle}
        onPress = {() => getItem(item)}
        No Data Found
      </Text>
    );
  };

  // ItemView function
  const ItemView = ({ item }) => {
    return (
      // FlatList item
      <View style={styles.itemStyle}>
        <Text onPress={() => getItem(item)}>
          {item.id}.{item.title.toUpperCase()}
        </Text>
      </View>
    );
  };

  // ItemSeparatorView function
  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#c8c8c8",
        }}
      />
    );
  };

  const ListHeader = () => {
    // View to set in header
    return (
      <View style={styles.headerFooterStyle}>
        <Text style={styles.textStyle}>This is a sample header</Text>
      </View>
    );
  };

  const ListFooter = () => {
    // View to set in header
    return (
      <View style={styles.headerFooterStyle}>
        <Text style={styles.textStyle}>This is a sample footer</Text>
      </View>
    );
  };

  // GetItem fucntion
  const getItem = (item) => {
    // Function for clicking on item
    alert("Id: " + item.id + "Value: " + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.emptyListStyle}>
        <FlatList
          data={listItems}
          ItemSeparatorComponent={ItemSeparatorView}
          ListHeaderComponent={ListHeader}
          ListFooterComponent={ListFooter}
          renderItem={ItemView}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={EmptyListMessage}
        />
      </View>
    </SafeAreaView>
  );
};

export default FlatList_HeaderFooter;

const styles = StyleSheet.create({
  emptyListStyle: {
    //padding: 10,
    fontSize: 18,
    textAlign: "center",
  },
  itemStyle: {
    padding: 10,
    textAlign: "left",
  },
  headerFooterStyle: {
    width: "100%",
    height: 45,
    backgroundColor: "#606070",
  },
  textStyle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    padding: 7,
  },
});
