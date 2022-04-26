import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    padding: 10,
    backgroundColor: Color.WHITE,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 30,
    elevation: 7
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    fontWeight: "500",
    color: Color.PRIMARY_RED_COLOR
  }
})

export default styles