import { StyleSheet, ViewStyle } from "react-native";


type ArticlesScreenStyle = {
  root: ViewStyle
}

export default (): ArticlesScreenStyle => {
  return StyleSheet.create({
    root: {
      flexGrow: 1,
      gap: 20,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
}
