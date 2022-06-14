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
  },
  circleActive: {
    width: 25, 
    height: 25, 
    borderRadius: 25, 
    backgroundColor: Color.PRIMARY_YELLOW_COLOR
  },
  circleInActive: {
    width: 25, 
    height: 25, 
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Color.PRIMARY_YELLOW_COLOR
  },
  statusWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20
  },
  line: {
    position: 'absolute',
    height: 44,
    width: 1,
    backgroundColor: Color.PRIMARY_YELLOW_COLOR
  },
  line1: {
    left: 11,
    top: 45
  },
  line2: {
    bottom: 45,
    left: 11
  }
})

export default styles