import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

const QRCodeBar = ({ name }) => {
  const onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error("An error occured", err)
    );
  };

  return (
    <QRCodeScanner
      onRead={this.onSuccess}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text style={styles.centerText}>
          Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{" "}
          on your computer and scan the QR code.
        </Text>
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>OK. Got it!</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default QRCodeBar;
