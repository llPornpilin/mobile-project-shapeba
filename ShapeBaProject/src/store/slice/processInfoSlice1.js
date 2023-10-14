import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedStartDate: '',
  selectedSex: 'male',
  weight: '',
  height: '',
  birthdate: '',
  openStartDatePicker: false,
};

const processInfoSlice1 = createSlice({
  name: 'processInfo',
  initialState,
  reducers: {
    setSelectedStartDate: (state, action) => {
      state.selectedStartDate = action.payload;
    },
    setSelectedSex: (state, action) => {
      state.selectedSex = action.payload;
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    setBirthdate: (state, action) => {
      state.birthdate = action.payload;
    },
    setOpenStartDatePicker: (state, action) => {
      state.openStartDatePicker = action.payload;
    },
  },
});

export const {
  setSelectedStartDate,
  setSelectedSex,
  setWeight,
  setHeight,
  setBirthdate,
  setOpenStartDatePicker,
} = processInfoSlice1.actions;

export const processInfoSelector = (state) => state.processInfo;

export default processInfoSlice1.reducer;
