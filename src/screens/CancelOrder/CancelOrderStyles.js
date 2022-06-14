import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    padding: 25
  },
  warning: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: Color.PRIMARY_YELLOW_COLOR,
    marginTop: 10
  },
  text: {
    textAlign: "justify",
    alignSelf: "center"
  },
  circleActive: {
    width: 25, 
    height: 25, 
    borderRadius: 25, 
    backgroundColor: Color.PRIMARY_YELLOW_COLOR,
    marginRight: 10
  },
  circleInActive: {
    width: 25, 
    height: 25, 
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Color.PRIMARY_YELLOW_COLOR,
    marginRight: 10
  },
  textWrapper: {
    flexDirection: "row",
    marginVertical: 15
  }
})

export default styles