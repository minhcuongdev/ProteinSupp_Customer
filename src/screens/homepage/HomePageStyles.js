import { StyleSheet,StatusBar } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 25,
    backgroundColor: Color.WHITE
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingRight: 25
  },
  textWrapper: {

  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28
  },
  searchContainer: {
    marginBottom: 10,
    paddingRight: 25
  },
  bannerContainer: {
    height: 140,
    backgroundColor: "white",
    marginRight: 25,
    marginVertical: 25,
    borderRadius: 15,
    elevation: 5,
    overflow: "hidden"
  },
  promotionProductContainer: {

  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 25
  },
  product: {
    marginTop: 10,
  }
})

export default styles