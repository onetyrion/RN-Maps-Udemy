import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingTop: 10,
    flex: 1, //100%
    alignItems: "center", //CENTRAR HORIZONTAL
    justifyContent: "flex-start", //CENTRAR VERTICAL
  },
  item: {
    padding: 20,
    fontSize: 22,
    height: 50,
    justifyContent: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  center: {
    flex: 1, //100%
    alignItems: "center", //CENTRAR HORIZONTAL
    justifyContent: "center", //CENTRAR VERTICAL
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  MapView: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 150,
  },
  Panel: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center", //CENTRAR HORIZONTAL
    justifyContent: "center", //CENTRAR VERTICAL,
  },
  ModalView: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 0,
    minWidth: Dimensions.get("window").width - 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  wrapper: {
    height: 80,
  },
  Lista: {
    height: Dimensions.get("window").height - 350,
  },
  buttonModal: {
    padding: 20,
  },
  form: {
    padding: 15,
  },
});
