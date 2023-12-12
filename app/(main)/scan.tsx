import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet } from "react-native";
import { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const Scan = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [cameraType, setCameraType] = useState(
    BarCodeScanner.Constants.Type.back
  );

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleSwitchCamera = () => {
    setCameraType(
      cameraType === BarCodeScanner.Constants.Type.back
        ? BarCodeScanner.Constants.Type.front
        : BarCodeScanner.Constants.Type.back
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        key={cameraType}
        type={cameraType}
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      <SafeAreaView
        style={{ position: "absolute", width: "100%", paddingHorizontal: 10 }}
      >
        <Text style={{ alignSelf: "center" }}>Goofy ah name</Text>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <View>
            <Text>Bussing Show</Text>
            <Text>69:30</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              handleSwitchCamera();
            }}
          >
            <Text>Switch camera</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Scan;
