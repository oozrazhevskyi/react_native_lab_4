import React from "react";
import { TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export interface IconButtonProps {
  name: string;
  size: number;
  onPress?: () => void
}

function IconButton({ name, size, onPress }: IconButtonProps) {
  return (
    <>
      <TouchableHighlight onPress={onPress}>
        <View>
          <Icon
            name={name}
            size={size}
            color={'#4f7942'}
          />
        </View>
      </TouchableHighlight>
    </>
  );
}

export default IconButton;
