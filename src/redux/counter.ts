import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        propA: 0,
        propB: 0,
        someText: '',
    },
    reducers: {
        increasePropA: (state) => ({ ...state, propA: state.propA + 1 }),
        increasePropB: (state) => ({ ...state, propB: state.propB + 1 }),
        lul: (state) => ({ ...state, someText: 'It worked!' }),
    },
});

const { actions, reducer } = counterSlice;

export const { increasePropA, increasePropB } = actions;
export default reducer;
