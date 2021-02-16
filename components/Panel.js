// import {  } from 'native-base';
import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "../assets/components/appStyle";

export default ({ onPressLeft, textLeft, onPressRight }) => {
  return (
    <View style={styles.Panel}>
      <Button title={textLeft} onPress={onPressLeft} />
      <Button title="Mostrar / Ocultar" onPress={onPressRight} />
    </View>
  );
};
