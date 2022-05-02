import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE
  },
  body: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 30
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
    marginTop: 20,
    marginBottom: 40,
  },
  textSignUpWrapper: {
    flexDirection: "row",
    marginTop: 30,
  },
});

export default styles