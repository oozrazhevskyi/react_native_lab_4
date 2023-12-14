import { Article } from "@app/redux/article/types";
import { RootState } from "@app/redux/configureStore";

export const selectPosts = (state: RootState): Article[] => state.articleSlice.articles;
export const selectIsLoading = (state: RootState): boolean => state.articleSlice.isLoading;
export const selectCurrentPage = (state: RootState): number => state.articleSlice.numberPage;
export const selectIsPending = (state: RootState): boolean => state.articleSlice.isPending;
