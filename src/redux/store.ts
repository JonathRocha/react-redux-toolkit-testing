import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import counterReducer from './counter';
import watchPropAEpic from './epics/watchPropA';

const epics = combineEpics(watchPropAEpic);

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: [epicMiddleware, ...getDefaultMiddleware()],
});

epicMiddleware.run(epics);

export type RootState = ReturnType<typeof store.getState>;
export default store;
