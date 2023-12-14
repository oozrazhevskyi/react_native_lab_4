import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export type BackButtonStyle = {
  root: ViewStyle
  label: TextStyle
}

export default (): BackButtonStyle => {
  return StyleSheet.create({
    root: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      fontSize: 20,
      textTransform: 'capitalize',
    },
  });
};
