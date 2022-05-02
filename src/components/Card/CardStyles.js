import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  productContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    width: 160,
    marginHorizontal: 10,
    marginVertical: 15,
    alignItems: "center",
    backgroundColor: Color.WHITE,
    borderRadius: 20,
    elevation: 10,
  },
  img: {
    width: 120,
    height: 120,
  },
  namePr:{
    fontSize: 9,
    lineHeight: 14,
    color: Color.BLACK,
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center"
  },
  pricePr:{
    fontSize: 9,
    lineHeight: 14,
    color: Color.PRIMARY_YELLOW_COLOR,
    textAlign: "center"
  },
  productCartContainer: {
    flexDirection: "row",
    padding: 10 ,
    backgroundColor: Color.WHITE,
    elevation: 5,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10
  },
  checkboxWrapper: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: Color.PRIMARY_YELLOW_COLOR,
    position: "relative"
  },
  iconCheckedBox: {
    width: 20,
    position: "absolute",
    top: -2,
    left: -2
  },
  product: {
    flexDirection: 'row',
    alignItems: "center"
  },
  imagePr :{
    width: 60,
    height: 60
  },
  textWrapper: {
    alignSelf: "flex-end",
    alignItems: "flex-start",
    justifyContent: "space-around",
    height: 50,
    marginLeft: 10,
  },
  textNamePr :{
    fontSize: 10,
    lineHeight: 15,
    width: 150,
    textAlign: "left"
  },
  textPricePr: {
    fontSize: 14,
    lineHeight: 18
  }
});

export default styles