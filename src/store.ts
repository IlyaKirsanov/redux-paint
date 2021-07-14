import { reducer as historyIndex } from "./modules/historyIndex/reducer";
import { reducer as currentStroke } from "./modules/currentStroke/reducer";
import { reducer as strokes } from "./modules/strokes/reducer";
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { logger } from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: combineReducers({ historyIndex, strokes, currentStroke }),
  middleware,
});
