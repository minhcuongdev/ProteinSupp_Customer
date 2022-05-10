import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    paddingHorizontal: 25,
    paddingVertical: 15
  },
  image :{
    width: 280,
    height: 170,
    alignSelf: "center",
  },
  textField: {
    marginBottom: 20
  },
  textFieldContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 100
  }
})

export default styles