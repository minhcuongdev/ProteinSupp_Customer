import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  
  },
  cardContainer: {
    width: "100%",
    borderRadius: 10,
    elevation: 10,
    backgroundColor:Color.WHITE,
    padding: 20,
  },
  productsContainer: {
    marginTop: 20
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default styles