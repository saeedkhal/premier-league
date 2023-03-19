import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './features/events/eventsSlice';
import cardsReducer from './features/cards/cardsSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    cards: cardsReducer
  },
});
