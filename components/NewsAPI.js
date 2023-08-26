import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";

const NewsAPI = () => {
  const [articles, setArticles] = useState();
  const [loding, setLoding] = useState(true);
  const urlAPI =
    "https://newsapi.org/v2/everything?q=apple&from=2023-08-25&to=2023-08-25&sortBy=popularity&apiKey=d9db622937494816bbf49f39e5c0350a";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(urlAPI);
      const data = await response.json();
      setArticles(data.articles); // using only articles in JSON
      setLoding(false);
    } catch (error) {
      console.error("Error fetching users: ", error);
      setLoding(false);
    }
  };

  const _renderItem = ({ item }) => {
    let urlToImage =
      item.urlToImage !== null
        ? item.urlToImage
        : "http://via.placeholder.com/150x150";
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "row", margin: 10 }}>
          <Image
            source={{ uri: urlToImage }}
            resizeMode="cover"
            style={{ flex: 1, width: "100%", height: "100%" }}
          />
        </View>
        <View style={{ width: 200, alignSelf: "center", margin: 5 }}>
          <Text style={{ fontSize: 14, marginBottom: 5 }}>{item.title}</Text>
          <Text style={{ fontSize: 10 }}>{item.source.name}</Text>
        </View>
      </View>
    );
  };

  const _onRefresh = () => {
    setLoding(true);
    getData();
  };

  return (
    <View>
      {loding ? (
        <ActivityIndicator size="large" color="#23aaba" />
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(index) => index.toString()}
          renderItem={_renderItem}
          refreshing = {loding}
          onRefresh={_onRefresh}
        />
      )}
    </View>
  );
};

export default NewsAPI;

const styles = StyleSheet.create({});
