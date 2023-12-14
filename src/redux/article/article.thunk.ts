import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "@app/redux/article/types";

const baseUrl = 'https://newsapi.org/v2/everything';
const apiKey = 'c5f5ca77d3c4438ea2edbd54fdb75acc';
const pageSize = 10;

export const fetchPost = createAsyncThunk('post/fetchPost', async (page: number) => {
  const url = `${baseUrl}?q=education&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;
  const response = await fetch(url);
  const responseData = (await response.json());

  return responseData.articles as Article[];
});
