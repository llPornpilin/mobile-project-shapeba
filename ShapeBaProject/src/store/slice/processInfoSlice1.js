import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedStartDate: '',
  selectedSex: 'male',
  weight: '',
  height: '',
  birthdate: '',
  openStartDatePicker: false,
  accomplish: '',
  goalweight:'',
  activitylevel:''
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
    setaccomplish: (state, action) => {
      state.accomplish = action.payload;
      console.log(state.accomplish);
    },
    setGoalweight: (state, action) => {
      state.goalweight = action.payload;
      console.log(state.goalweight)
    },
    setActivitylevel: (state, action) => {
      state.activitylevel = action.payload;
      console.log(state.activitylevel)
    }
  },
});

export const {
  setSelectedStartDate,
  setSelectedSex,
  setWeight,
  setHeight,
  setBirthdate,
  setOpenStartDatePicker,
  setaccomplish,
  setGoalweight,
  setActivitylevel
} = processInfoSlice1.actions;

export const processInfoSelector = (state) => state.processInfo;

export default processInfoSlice1.reducer;
