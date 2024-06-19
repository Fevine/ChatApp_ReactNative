import { Platform, StyleSheet } from "react-native";

export const DefaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  Title: {
    fontWeight: "600",
    fontSize: 30,
    color: "#fff"
  },
  Text: {
    fontWeight: "300",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Arial",
    color: "#bababa",
    textAlign: "center"
  }
});
