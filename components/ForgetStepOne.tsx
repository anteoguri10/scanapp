import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import AuthInput from "./AuthInput";
import CostumButton from "./CostumButton";
import { Link } from "expo-router";

type Types = {
    goNextStep:()=>any
  };
  


export default function ForgetStepOne(props:Types) {
  const [email, setEmail] = useState<string>("");

  function bus() {
    console.log("login");
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
      <Text>Forgot Password</Text>
      <Text>What the dog doing</Text>
      <AuthInput placeholder="Email" isPassword={false} setState={setEmail} />
      <CostumButton title="Send email" isEnabled={true} onPress={props.goNextStep} />
      <Link href={"/login"}>Back to login</Link>
    </View>
  );
}
