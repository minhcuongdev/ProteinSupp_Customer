import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Color.WHITE 
  },
  image :{
    width: 280,
    height: 170,
  },
  titleWrapper:{
    marginTop: 15,
    alignItems: 'center'
  },
  inputWrapper: {
    marginTop: 50,
    padding: 25,
    height: "22%",
    justifyContent: "space-between"
  },
  footer: {
    marginTop: 50,
    alignItems: "center"
  }
})

export default styles