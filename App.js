import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./assets/components/appStyle";
import { Input, List, Map, Modal, Panel } from "./components";

export default function App() {
  const [locaciones, setLocaciones] = useState([]);
  const [nombre, setNombre] = useState("");
  const [locacionesTemp, setLocacionesTemp] = useState({});
  const [visibility, setVisibility] = useState(false);
  const [visibilityMarker, setVisibilityMarker] = useState(true);
  const [visibilityFilter, setVisibilityFilter] = useState("new_Locacion"); //NEW_Locacion / ALL_Locacion

  const handleLongPressMap = ({ nativeEvent }) => {
    setLocacionesTemp(nativeEvent.coordinate);
    setVisibilityFilter("new_Locacion");
    setVisibility(true);
  };
  const handleChangeText = (text) => {
    setNombre(text);
  };
  const handleLista = () => {
    setVisibilityFilter("all_Locacion");
    setVisibility(true);
  };
  const handleSubmit = (cancelable = false) => {
    if (cancelable === true) {
      const newLocacion = { coordinate: locacionesTemp, name: nombre };
      setLocaciones(locaciones.concat(newLocacion));
    }
    setLocacionesTemp({});
    setNombre("");
    setVisibility(false);
  };
  return (
    <View style={styles.container}>
      <Map
        longPress={handleLongPressMap}
        Localizaciones={locaciones}
        visibilityMarker={visibilityMarker}
      />
      <Modal visibility={visibility}>
        {visibilityFilter === "new_Locacion" ? (
          <View style={styles.form}>
            <Input
              title={"Nombre"}
              placeholder="Nombre del punto"
              onChangeText={handleChangeText}
            />
            <Button
              title="Aceptar"
              onPress={() => {
                handleSubmit(true);
              }}
            />
            <Button title="Cancelar" onPress={handleSubmit} />
          </View>
        ) : (
          <List
            locaciones={locaciones}
            closeModal={() => setVisibility(false)}
          />
        )}
      </Modal>
      <Panel
        onPressLeft={handleLista}
        textLeft="Lista"
        onPressRight={() => {
          setVisibilityMarker(!visibilityMarker);
        }}
      />
    </View>
  );
}
