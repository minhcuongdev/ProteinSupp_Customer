import { StyleSheet, StatusBar } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE
  },
  header: {
    width: "100%",
    height: "23%",
    position: "relative"
  },
  headerRedCircle: {
    width: 200,
    height: 200,
    backgroundColor: Color.PRIMARY_RED_COLOR,
    borderRadius: 100,
    position: "absolute",
    left: 60,
    top: -100

  },
  headerYellowCircle: {
    width: 200,
    height: 200,
    backgroundColor: Color.PRIMARY_YELLOW_COLOR,
    borderRadius: 100,
    position: "absolute",
    left: -60,
    top: -20
  },
  body: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 30
  },
  title: {
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 34,
    textAlign: "center",
    color: Color.PRIMARY_YELLOW_COLOR
  },
  description: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: Color.SECONDARY_YELLOW_COLOR,
    width: 300
  },
  socialButtonWrapper: {
    width: "100%",
    marginTop: 60,
    marginBottom: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textFieldWrapper: {
    width: "100%",
    height: 180,
    justifyContent: "space-around",
  },
  textForgotPassword: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    fontWeight: "500",
    color: Color.PRIMARY_RED_COLOR,
    marginTop: 20,
    marginBottom: 60
  },
  textSignUpWrapper: {
    flexDirection: "row",
    marginTop: 10,
  },
  textSignUpYellow: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "600",
    color: Color.PRIMARY_YELLOW_COLOR,
    marginRight: 10
  },
  textSignUpRed: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "600",
    color: Color.PRIMARY_RED_COLOR
  }
});

export default styles