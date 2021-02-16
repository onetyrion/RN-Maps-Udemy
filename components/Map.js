import React from "react";
import MapView, { Marker } from "react-native-maps";
import { styles } from "../assets/components/appStyle";

export default ({ longPress, Localizaciones, visibilityMarker }) => {
  return (
    <MapView style={styles.MapView} onLongPress={longPress}>
      {visibilityMarker &&
        Localizaciones.map((x, i) => (
          <Marker coordinate={x.coordinate} name={x.name} key={i} />
        ))}
    </MapView>
  );
};
