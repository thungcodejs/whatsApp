import { configureStore } from "@reduxjs/toolkit";import authSlice from "./authSlice";import UserSlice from "./UserSlice";export const store = configureStore({    reducer: {        auth: authSlice,        users: UserSlice    }})