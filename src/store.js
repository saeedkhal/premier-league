import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './features/events/eventsSlice';
import cardsReducer from './features/cards/cardsSlice';
import newsSlice from './features/news/newsSlice';
import clubsSlice from './features/clubs/clubsSlice';
import tableSlice from './features/table/tableSlice';
import resultsSlice from './features/results/resultsSlice';
import fixtureSlice from './features/fixture/fixtureSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    cards: cardsReducer,
    news: newsSlice,
    clubs: clubsSlice,
    table: tableSlice,
    results: resultsSlice,
    fixture: fixtureSlice
  },
});
