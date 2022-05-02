import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE
  },
  titleWrapper:{
    marginTop: 15,
    alignItems: "center"
  },
  body: {
    padding: 25
  },
  inputWrapper: {
    marginTop: 50,
    justifyContent: "space-between",
    height: "52%",
    marginBottom: 60
  },
  footer:{
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  }
});

export default styles