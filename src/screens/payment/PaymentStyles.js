import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    paddingHorizontal: 25,
    paddingVertical: 25
  },
  addressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  addressText: {
    fontSize: 16,
    lineHeight: 24,
    color: Color.PRIMARY_YELLOW_COLOR,
    textAlign: "left"
  },
  addressCardContainer: {
    width: "100%",
    padding: 20,
    borderRadius: 15,
    elevation: 10,
    backgroundColor: Color.WHITE,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20
  },
  textAddressCardWrapper: {
    flex: 1,
    alignItems: "flex-start",
    width: 300
  },
  textTitleAddressCard: {
    fontSize: 14,
    color: Color.PRIMARY_YELLOW_COLOR,
    lineHeight:20
  },
  textAddressCard: {
    fontSize: 10,
    textAlign: "justify",
    lineHeight: 16,
    marginTop: 5,
    color: Color.NEUTRAL_02
  },
  methodPaymentContainer:{
    marginTop: 15,
    flexDirection: "row",
    marginBottom: 20
  },
  methodButtonContainer: {
    width: 110,
    padding: 5,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: Color.WHITE,
    borderWidth: 1,
    marginRight: 10
  },
  image: {
    width: 100,
    height: 48,
  },
  discountContainer: {
    width: "90%",
    alignSelf: "center",
    marginVertical: 30
  },
  billWrapper: {
    marginBottom: 10
  },
  billItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  }
})

export default styles