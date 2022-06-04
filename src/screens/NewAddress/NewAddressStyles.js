import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    paddingHorizontal: 25,
    paddingVertical: 20,
    justifyContent: "space-between"
  },
  textTitleContact: {
    fontSize: 18,
    textAlign: "left"
  },
  editInfoContainer: {
    marginTop: 10,
    height: 320,
    justifyContent: "space-around"
  },
  switchContainer: {
    flexDirection :'row',
    alignItems: "center",
    justifyContent: "space-between",
    // marginTop: 40
  },
  button: {
    
  }
})

export default styles