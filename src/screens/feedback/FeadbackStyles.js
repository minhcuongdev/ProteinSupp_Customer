import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    padding: 25
  },
  starWrapper: {
    flexDirection: "row",
    marginBottom: 15
  },
  noSeeMoreContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.GRAY_01
  },
  text: {
    fontSize: 12
  },
  spacing: {
    height: 30
  }
})

export default styles