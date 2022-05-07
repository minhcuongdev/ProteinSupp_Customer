import { StyleSheet } from "react-native";

import Color from "src/constants/Color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: Color.PRIMARY_YELLOW_COLOR,
    marginBottom: 20
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatarDetailContainer: {
    alignItems: "flex-start",
    marginLeft: 10
  },
  starWrapper: {
    flexDirection: "row",
    marginTop: 5
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  nameUser: {
    fontSize: 10,
    lineHeight: 12
  },
  commentContainer: {
    width: "100%",
    marginTop: 20
  },
  text: {
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 20
  }
})

export default styles