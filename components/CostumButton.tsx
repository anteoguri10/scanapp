import { View, Text, Button } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

type ButtonTypes = {
  title: string;
  onPress:()=>any,
  isEnabled:boolean,
};

export default function CostumButton(props: ButtonTypes) {
  return (
    <TouchableOpacity
    disabled={!props.isEnabled}
     onPress={props.onPress}
      style={{
        backgroundColor: "purple",
        padding: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}
