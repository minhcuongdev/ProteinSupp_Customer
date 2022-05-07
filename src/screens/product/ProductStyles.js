import { StyleSheet, StatusBar } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Color.WHITE,
    // paddingHorizontal: 25,
    alignItems: "center",
  },
  title: {
    marginVertical: 20,
  },
  search: {
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 25
  },
  scroll:{
    marginHorizontal: 25,
    marginBottom: 25
  },
  body: {
    flexWrap: "wrap",
  },
});

export default styles;
