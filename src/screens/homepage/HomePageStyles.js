import { StyleSheet,StatusBar } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 10,
    backgroundColor: Color.WHITE
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingRight: 25,
    paddingLeft: 15
  },
  leftHeaderWrapper:{
    flexDirection: "row",
    alignItems: "center"
  },
  textWrapper: {
    marginLeft: 10
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 28
  },
  searchContainer: {
    marginBottom: 10,
    paddingRight: 25,
    paddingLeft: 15,
    paddingTop: 10
  },
  bannerContainer: {
    height: 140,
    backgroundColor: "white",
    marginRight: 25,
    marginLeft: 15,
    marginVertical: 25,
    borderRadius: 15,
    elevation: 5,
    overflow: "hidden",
  },
  promotionProductContainer: {
    marginLeft: 15
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 25
  },
  product: {
    marginTop: 10,
  },
  productCategory:{
    marginLeft: 15
  },
  productCate:{
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap", 
  }
})

export default styles