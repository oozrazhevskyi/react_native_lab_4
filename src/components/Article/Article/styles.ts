import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export type ArticleStyle = {
  root: ViewStyle
  title: TextStyle
  author: TextStyle
  bottomTab: ViewStyle
}

export default (): ArticleStyle => {
  return StyleSheet.create({
    root: {
      gap: 20,
      shadowColor: '#000000',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.33,
      shadowRadius: 5,
      padding: 10
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center',
    },
    bottomTab: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    },
    author: {
      fontWeight: '700',
    }
  })
}
