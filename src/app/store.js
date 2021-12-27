import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/crypoApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
