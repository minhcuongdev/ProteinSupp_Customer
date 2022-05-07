import { StyleSheet } from "react-native";

import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE
  },
  scroll: {
    padding: 25,
    flex: 1,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center"
  },
  priceAndRateProduct:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  rateStar: {
    width: 80,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: Color.GRAY_02,
    justifyContent: "space-between"
  },
  productContainer:{
    width: "100%"
  },
  title:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10
  },
  textTitle: {
    width: "70%",
    textAlign: "left"
  },
  text: {
    textAlign: "left",
    fontSize: 12,
    marginTop: 5 
  },
  description: {
    width: "100%",
    marginTop: 5
  },
  textWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  feedback:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  starWrapper:{
    width: 200,
    flexDirection: "row"
  },
  buttonContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10
  },
  buttonSeeAllContainer: {
    width: "100%",
    flexDirection: "row",
    height: 50,
    alignItems : "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Color.PRIMARY_YELLOW_COLOR
  },
  textSeeAll: {
    fontSize: 16,
    lineHeight: 25,
  },
  buttonSeeAll: {
    width: "100%",
    height: "90%",
    alignItems : "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  spacing: {
    height: 50
  }
})

export default styles