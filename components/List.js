import React from "react";
import { FlatList, Text, View, Button } from "react-native";
import { styles } from "../assets/components/appStyle";

export default ({ locaciones, closeModal }) => {
  return (
    <>
      <View style={styles.Lista}>
        <FlatList
          data={locaciones.map((x) => x)}
          renderItem={(val) => (
            <View style={styles.item} key={val.index}>
              <Text>{val.item.name}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.buttonModal}>
        <Button title="Cerrar" onPress={closeModal} />
      </View>
    </>
  );
};
