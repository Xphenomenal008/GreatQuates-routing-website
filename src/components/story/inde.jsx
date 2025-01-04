import { configureStore, createSlice } from "@reduxjs/toolkit";


const intialstate = {
    allquates: [],
    fetchy: null,   //these are all used by useselector as it.
    load:true
};

const quateslice = createSlice({
    name: "quateslice",
    initialState: intialstate,
    reducers: {
        addquates(state, action) {
            state.allquates = action.payload;
        },
        addfetchy(state) {
            state.fetchy = true;
        },
        load(state){
            state.load = false
        }
    }
});

const addmanually = {
    manuallyadded: {}  
};

const manualslice = createSlice({
    name: "manualadded",
    initialState: addmanually,
    reducers: {
        manualadded(state, action) {
            state.manuallyadded = action.payload; // Expecting an object with 'author' and 'text'
        }
    }
});

const store = configureStore({
    reducer: {
        quateslice: quateslice.reducer,
        manualadded: manualslice.reducer // If you're using useSelector hook for taking data from here
    }
});

export default store;
export const quateslicy = quateslice.actions; // If you want to access action through dispatch, you need this.
export const manualslicy = manualslice.actions; // If you want to access action through dispatch, you need this.