import { Image, Text, View } from "react-native";

import defaultStyles from './styles';

interface AvatarProps {
  source: any
  size: number
  label?: string
}

function Avatar({ source, size, label }: AvatarProps) {
  const styles = defaultStyles({ size });
  const isLabelEmpty = label === '';

  return (
    <>
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={source}
        />
        {!isLabelEmpty && <Text style={styles.label}>
          {label}
        </Text>}
      </View>
    </>
  )
}

export default Avatar;
