import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import AuthInput from "./AuthInput";
import CostumButton from "./CostumButton";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
export default function ForgetStepTwo() {
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
      <Text>Reset Password sent</Text>
      <Text>What the dog doing sent that nigger</Text>
      <AuthInput placeholder="Email" isPassword={false} setState={setEmail} />
      <CostumButton
        title="ReSend email"
        isEnabled={true}
        onPress={() => {
          router.push("scan");
        }}
      />
      <TouchableOpacity>
        <Text>didnt get that my nigga?</Text>
      </TouchableOpacity>
      <Link href={"/login"}>Back to login</Link>
    </View>
  );
}
