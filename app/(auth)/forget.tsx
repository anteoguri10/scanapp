import { View, Text } from "react-native";
import React from "react";
import AuthInput from "../../components/AuthInput";
import { useState } from "react";
import { Link } from "expo-router";
import CostumButton from "../../components/CostumButton";
import { FlatList } from "react-native";
import ForgetStepOne from "../../components/ForgetStepOne";
import ForgetStepTwo from "../../components/ForgetStepTwo";
import { Dimensions } from "react-native";
import { useRef } from "react";
const windowWidth = Dimensions.get("window").width;
const ForgetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const flatlistRef = useRef<any>();

  function scrollToIndex() {
    flatlistRef.current.scrollToIndex({ animated: true, index: 1 });
  }

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      ref={flatlistRef}
      scrollEnabled={false}
      horizontal
      data={[0, 1]}
      renderItem={({ item, index }) => {
        return index === 0 ? (
          <View style={{ flex: 1, width: windowWidth }}>
            <ForgetStepOne goNextStep={scrollToIndex} />
          </View>
        ) : (
          <View style={{ flex: 1, width: windowWidth }}>
            <ForgetStepTwo />
          </View>
        );
      }}
    />
  );
};

export default ForgetPassword;
