import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    padding: 25
  },
  itemNotificationButton: {
  
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: Color.PRIMARY_YELLOW_COLOR,
    marginBottom: 10,
    marginTop: 10
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Color.PRIMARY_YELLOW_COLOR,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15
  },
  textWrapper: {
    alignItems: "flex-start"
  },
  titleText:{
    fontSize: 18,
    lineHeight: 24
  },
  descriptionText: {
    fontSize: 9,
    lineHeight: 14,
  }
})

export default styles