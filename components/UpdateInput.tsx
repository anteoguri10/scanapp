import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
type InputProps = {
  label: string;
  placeholder?: string;
  value?: string;
  isPassword: boolean;
  setState?: React.Dispatch<React.SetStateAction<any>>;
};

export default function UpdateInput(props: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(props.isPassword);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <Text>{props.label}</Text>
      <View
        style={{ width: "50%", borderBottomWidth: 1, flexDirection: "row" }}
      >
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          style={{ flex: 1 }}
          secureTextEntry={showPassword}
          onChangeText={(e)=>{props.setState(e)}}
        />
        {props.isPassword && (
          <TouchableOpacity onPress={()=>{setShowPassword(e=>!e)}}>
            <Text>E</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
