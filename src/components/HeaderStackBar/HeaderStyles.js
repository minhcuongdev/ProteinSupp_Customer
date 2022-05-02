import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  headerLeft: {
    backgroundColor: Color.PRIMARY_YELLOW_COLOR,
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center"
  },
  headerRight: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between"
  },
  icon: {
    // backgroundColor: Color.PRIMARY_YELLOW_COLOR,
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center"
  },
  badge: {
    backgroundColor: Color.PRIMARY_RED_COLOR,
    position: "absolute",
    width: 20,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    top: 0,
    right: -5
  },
  textBadge: {
    fontSize: 5,
    lineHeight: 13
  }
})

export default styles