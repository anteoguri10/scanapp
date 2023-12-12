import { View} from "react-native";
import React from "react";
import { TextInput } from "react-native";

type InputProps = {
  placeholder: string;
  isPassword: boolean;
  setState: React.Dispatch<React.SetStateAction<any>>;
};

const AuthInput = (props: InputProps) => {
  return (
    <View style={{ width: "100%", borderWidth: 1, padding: 5 ,marginBottom:10}}>
      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.isPassword}
        onChangeText={(e)=>{props.setState(e)}}
      />
    </View>
  );
};

export default AuthInput;
