import { ActivityIndicator, Button, ScrollView, View } from "react-native";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentPage, selectIsLoading, selectIsPending, selectPosts } from "@app/redux/article/article.selectors";
import { fetchPost } from "@app/redux/article/article.thunk";
import { useAppDispatch } from "@app/redux/configureStore";

import defaultStyles from './styles';
import Article from "@app/components/Article/Article/Article";
import { increasePage } from "@app/redux/article/article.slice";

function ArticlesScreen() {
  const dispatch = useAppDispatch();
  const isPostLoading = useSelector(selectIsLoading);
  const articles = useSelector(selectPosts);
  const currentPage = useSelector(selectCurrentPage);
  const isPending = useSelector(selectIsPending);

  const styles = defaultStyles();

  useEffect(() => {
    if (!isPending) return;

    dispatch(fetchPost(currentPage));
  }, [isPending]);

  const handlePress = (): void => {
    dispatch(increasePage(currentPage + 1));
  };

  const content = isPostLoading
    ? <ActivityIndicator size='large' />
    : <View>
      {articles.map((article) => <Article
        key={article.title}
        title={article.title}
        description={article.description}
        author={article.author}
        publishedAt={article.publishedAt}
      />)}
      <Button title={'Отримати більше новин'} onPress={handlePress} />
    </View>

  return (
    <>
      <ScrollView contentContainerStyle={styles.root}>
        {content}
      </ScrollView>
    </>
  )
}

export default ArticlesScreen;
