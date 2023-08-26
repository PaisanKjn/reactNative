import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const UseEffectFlatList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetching data from API using Axios
    // then = respond
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // Handle successful response
        setData(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        // Handle error
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <ActivityIndicator size="large" color="#1145bc" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.postTitle}>Post from API using FlatList</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} // changing numeric value to sting
        renderItem={({item}) => (
          <View style={styles.post}>
            <Text style = {styles.postTitle}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default UseEffectFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "20",
  },
  post: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    bordErColor: "#ccc",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
