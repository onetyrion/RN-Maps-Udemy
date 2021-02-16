import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "../assets/components/appStyle";

export default ({ title, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...rest} />
    </View>
  );
};
