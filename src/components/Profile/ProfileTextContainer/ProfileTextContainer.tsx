import { Text, View } from "react-native";

import defaultStyles from './styles';

export interface ProfileTextContainerProps {
  title: string
  description: string
}

function ProfileTextContainer({ title, description }: ProfileTextContainerProps) {
  const styles = defaultStyles();

  return (
    <>
      <View style={styles.root}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </>
  )
}

export default ProfileTextContainer;
