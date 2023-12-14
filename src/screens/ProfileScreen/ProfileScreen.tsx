import { View } from "react-native";
import { StyleSheet } from "react-native";

import Avatar from "@app/components/Avatar/Avatar";

import ProfileTextContainer, {
  ProfileTextContainerProps
} from "@app/components/Profile/ProfileTextContainer/ProfileTextContainer";

function ProfileScreen() {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
      gap: 40,
    },
    textContainers: {
      gap: 30,
    },
  });

  const textContainers: ProfileTextContainerProps[] = [
    { title: 'Освітній ступінь', description: 'Бакалавр' },
    { title: 'Факультет', description: 'Факультет електронних технологій, автотранспорту і машинобудування' },
    { title: 'Спеціальність', description: '125 - Кібербезпека' },
    { title: 'Освітня програма', description: 'Кібербезпека' },
    { title: 'Хоббі', description: 'Програмування, CTF' },
  ];

  return (
    <>
      <View style={styles.root}>
        <Avatar source={require('@app/assets/img/my-photo.jpg')} size={100} />
        <View style={styles.textContainers}>
          {textContainers.map((textContainer, index) => <ProfileTextContainer
            key={index}
            title={textContainer.title}
            description={textContainer.description}
          />)}
        </View>
      </View>
    </>
  )
}

export default ProfileScreen;
