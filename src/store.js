import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './features/events/eventsSlice';
import cardsReducer from './features/cards/cardsSlice';
import newsSlice from './features/news/newsSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    cards: cardsReducer,
    news: newsSlice
  },
});
