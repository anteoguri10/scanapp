import { View, Text } from "react-native";
import React from "react";
import AuthInput from "../../components/AuthInput";
import CostumButton from "../../components/CostumButton";
import { useState } from "react";
import { Link, router } from "expo-router";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function loginDummy() {
    router.replace('scan')
  }

  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        padding: 10,
      }}
    >
      <Text>Logo</Text>
      <Text>login</Text>
      <AuthInput placeholder="Email" isPassword={false} setState={setEmail} />
      <AuthInput placeholder="Password" isPassword={true} setState={setEmail} />
      <CostumButton title="Login" onPress={loginDummy} isEnabled={true} />
      <Link href={"/forget"}>Forgot password?</Link>
    </View>
  );
};

export default Login;
