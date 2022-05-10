import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  scroll: {
    paddingHorizontal: 25
  },
  avatarContainer: {
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: Color.PRIMARY_YELLOW_COLOR,
    marginBottom: 10
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  cameraContainer: {
    position: "absolute",
    right: 0,
    bottom: 10,
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderRadius: 50
  },
  textTitle: {
    fontSize: 17,
    textAlign: "left"
  },
  textInputContainer: {
    marginVertical: 10
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 10
  },
  selectedIconWrapper :{
    flexDirection : "row",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  selectedContainer: {
    flexDirection :"row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Color.NEUTRAL_03,
    width: 140,
    paddingVertical: 5,
    justifyContent: "flex-start",
    paddingLeft: 10,
    borderRadius: 10,
  },
  selectedIconContainer: {
    width: 40,
    height: 40,
    justifyContent:"center",
    alignItems: "center",
  },
  selectedIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.PRIMARY_YELLOW_COLOR,
  }
})

export default styles