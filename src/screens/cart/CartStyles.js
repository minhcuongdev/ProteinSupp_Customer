import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.WHITE,
  },
  productCartContainer: {
    height: "67%",
    backgroundColor: Color.WHITE,
    marginBottom: 20,
    paddingTop: 10
  },
  totalPriceWrapper: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 25,
    justifyContent: "space-between",
    marginVertical: 20
  },
  button: {
    width: "100%",
    paddingHorizontal: 25
  }
})

export default styles