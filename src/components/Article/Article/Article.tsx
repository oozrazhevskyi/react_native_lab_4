import { Image, Text, View } from "react-native";

import defaultStyles from './styles';

export interface ArticleProps {
  title: string
  description: string
  author: string
  publishedAt: string
}

function Article({ title, description, author, publishedAt }: ArticleProps) {
  const styles = defaultStyles();

  return (
    <>
      <View style={styles.root}>
        <Text
          numberOfLines={2}
          ellipsizeMode='tail'
          style={styles.title}
        >
          {title}
        </Text>
        <Text>
          {description}
        </Text>
        <View style={styles.bottomTab}>
          <Text style={styles.author}>
            {author}
          </Text>
          <Text>
            {publishedAt}
          </Text>
        </View>
      </View>
    </>
  )
}

export default Article;
