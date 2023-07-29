import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Login = () => {
  const submit = () => {
    alert("email: " + textInputEmail + "\npassword: " + textInputPass);
  };

  const [textInputPass, setPass] = useState("");
  const [textInputEmail, setEmail] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Email"
        style={styles.textInputStyle}
        value={textInputEmail}
        onChangeText={(value) => {
          setEmail(value);
        }}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInputStyle}
        value={textInputPass}
        onChangeText={(value) => {
          setPass(value);
        }}
      />
      <Text>{"\n"}</Text>
      <Button
        style={styles.submitButton}
        title="SUBMIT"
        onPress={() => submit()}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: "100%",
    height: 40,
    width: 400,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
  submitButton: {
    backroundColor: "#111111",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
