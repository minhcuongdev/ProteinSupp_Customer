import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    justifyContent: "flex-end"
  },
  addressItems: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    backgroundColor: Color.WHITE,
  },
  buttonContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    marginTop: 10
  },
  spacing: {
    height: 20
  }
})

export default styles