import {createSlice} from "@reduxjs/toolkit";
import tuitsItems from './tuitsItems.json';

const tuitsSlice = createSlice({
                                name: 'tuitsItems',
                                initialState: tuitItems
                               });

export default tuitsSlice.reducer;