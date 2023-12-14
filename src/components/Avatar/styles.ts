import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

export type Avatar = {
  root: ViewStyle
  image: ImageStyle
  label: TextStyle
}


export default ({ size }: { size: number }): Avatar => {
  return StyleSheet.create({
    root: {
      alignItems: 'center'
    },
    image: {
      width: size,
      height: size,
      borderRadius: size / 2,
    },
    label: {
      maxWidth: size,
      width: '100%',
      textAlign: 'center',
      fontWeight: '700',
    }
  })
}
