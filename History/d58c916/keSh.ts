import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./Api";

export const store = configureStore({
  // reducer: todoReducer,
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
