import { StyleSheet } from "react-native";
import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    paddingHorizontal: 25
  },
  avatarContainer: {
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: Color.PRIMARY_YELLOW_COLOR,
    marginBottom: 10
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  textWrapper: {
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10
  },
  textTitle: {
    fontSize: 17
  },
  text: {
    fontSize: 15,
    textAlign: "justify"
  }
})

export default styles