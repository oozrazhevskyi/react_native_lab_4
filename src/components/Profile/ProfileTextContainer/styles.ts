import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type ProfileTextContainerStyles = {
  root: ViewStyle
  title: TextStyle
  description: TextStyle
}

export default (): ProfileTextContainerStyles => {
  return StyleSheet.create({
    root: {
      gap: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
    },
    description: {
      fontSize: 16,
    }
  })
}
