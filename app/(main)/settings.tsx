import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import UpdateInput from "../../components/UpdateInput";
import { Link, router } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const Settings = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();

  function onSignOut(){
    router.replace('login')
  }

  return (
    <SafeAreaView style={{ padding: 10,backgroundColor:'white',height:'100%' }}>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
        <Link href='scan'>Back</Link>
        <Text>Eventa</Text>
        <TouchableOpacity>
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
      <Text>Edit profile</Text>
      <UpdateInput
        label="First name"
        isPassword={false}
        setState={setFirstName}
      />
      <UpdateInput
        label="Last name"
        isPassword={false}
        setState={setLastName}
      />
      <UpdateInput label="Email" isPassword={false} setState={setEmail} />
      <UpdateInput label="Password" isPassword={true} setState={setPassword} />
      <UpdateInput
        label="New password"
        isPassword={true}
        setState={setNewPassword}
      />
      <UpdateInput
        label="Confirm new password"
        isPassword={true}
        setState={setConfirmNewPassword}
      />

      <TouchableOpacity onPress={()=>onSignOut()}>
        <Text>Sign out</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Settings;
