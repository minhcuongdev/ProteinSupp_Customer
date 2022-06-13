import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    padding: 25,
  }, 
  text: {
    textAlign: "left"
  },
  starWrapper: {
    flexDirection: "row",
    marginVertical: 15,
    alignSelf: "center"
  },
  star: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  starIcon: {
    marginHorizontal: 5
  },
  textInput: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Color.PRIMARY_YELLOW_COLOR,
    padding: 10,
    marginTop: 15
  },
  button: {
    marginBottom: 0
  }
});

export default styles