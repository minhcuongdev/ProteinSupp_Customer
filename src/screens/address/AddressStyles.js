import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  addressItems: {
    flex: 1,
    padding: 10,
    backgroundColor: Color.WHITE,
  },
  buttonContainer: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginTop: 10
  },
  spacing: {
    height: 20
  }
})

export default styles