import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Color.GRAY_01,
    borderColor: Color.GRAY_02,
    borderWidth: 2,
    borderRadius: 30,
    position: "relative",
  },
  input: {
    paddingVertical: 13,
    paddingHorizontal: 20,
    fontSize: 16,
    lineHeight: 24,
  },
  icon: {
    position: "absolute",
    right: 13,
    top: 13,
    width: 30,
    height: 30,
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
