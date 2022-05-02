import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  title: {
    marginVertical: 25
  },
  body: {
    paddingHorizontal: 15,
    flexWrap: "wrap"
  }
})

export default styles