import React from "react";
import { Modal, View, Text } from "react-native";
import { styles } from "../assets/components/appStyle";

export default ({ children, visibility }) => {
  return (
    <Modal animationType={"slide"} transparent={true} visible={visibility}>
      <View style={styles.center}>
        <View style={styles.ModalView}>{children}</View>
      </View>
    </Modal>
  );
};
