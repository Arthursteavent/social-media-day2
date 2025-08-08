import { useRegister } from "@/hooks/useUser";
import { router } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";

const Page = () => {

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [profilePicture, setprofilePicture] = useState("");
  const { mutate: register, isPending } = useRegister()

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login</Text>
      <Text>Username</Text>
      <TextInput
        onChangeText={(text) => setusername(text)}
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 200,
          marginBottom: 10,
        }}
      />
      <Text>Password</Text>
      <TextInput
        onChangeText={(text) => setpassword(text)}
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 200,
          marginBottom: 10,
        }}
      />
      <Text>Email</Text>
      <TextInput
        onChangeText={(text) => setemail(text)}
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 200,
          marginBottom: 10,
        }}
      />
      <Text>Profile Picture</Text>
      <TextInput
        onChangeText={(text) => setprofilePicture(text)}
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 200,
          marginBottom: 10,
        }}
      />
      {isPending ? <ActivityIndicator /> : (<Button onPress={() => register({
        email: email,
        password: password,
        username: username,
        profile_url: profilePicture,
      })} title="register" />)}

    </View>
  );
};

export default Page;
