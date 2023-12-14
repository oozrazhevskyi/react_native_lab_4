import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "@app/redux/article/types";
import { fetchPost } from "@app/redux/article/article.thunk";

interface ArticleState {
  articles: Article[],
  isLoading: boolean,
  isPending: boolean,
  numberPage: number,
}

const initialState: ArticleState = {
  articles: [],
  isLoading: false,
  isPending: false,
  numberPage: 1,
}


export const articleSlice = createSlice({
  name: 'articleSlice',
  initialState,
  reducers: {
    increasePage: (state, { payload }: PayloadAction<number>) => {
      state.numberPage = payload;
      state.isPending = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPost.pending, state => {
      state.isLoading = true;
    })
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.articles = [...state.articles, ...action.payload];
      state.isLoading = false;
      state.isPending = false;
    })
    builder.addCase(fetchPost.rejected, state => {
      state.isLoading = false;
      state.isPending = false;
    })
  }
});

export const { increasePage } = articleSlice.actions;
export const reducer = articleSlice.reducer;
