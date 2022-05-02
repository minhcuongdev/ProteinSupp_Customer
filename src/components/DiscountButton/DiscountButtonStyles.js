import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Color.PRIMARY_YELLOW_COLOR_3,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: 12,
    marginLeft: 10
  }
})

export default styles