import { createSlice } from '@reduxjs/toolkit';

//TDEE
export const calculateTDEE = (state) => {
  const { weight, height, selectedSex, activitylevel, age, accomplish } = state;

  let bmr = 0;
  if (selectedSex === 'male') {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height * 100) - (5.677 * age);
  } else if (selectedSex === 'female') {
    bmr = 47.593 + (9.247 * weight) + (3.098 * height * 100) - (4.330 * age);
  }

  let tdee = 0;
  switch (activitylevel) {
    case 'Little or no exercise':
      tdee = bmr * 1.2;
      break;
    case '1-3 times/week':
      tdee = bmr * 1.375;
      break;
    case '4-5 times/week':
      tdee = bmr * 1.55;
      break;
    case 'Intense exercise 6-7 times/week':
      tdee = bmr * 1.725;
      break;
    case 'Very intense exercise daily':
      tdee = bmr * 1.9;
      break;
    default:
      tdee = bmr;
  }

  if (accomplish === 'Lose weight') {
    tdee -= 500; // ลดแคลลอรีลง 500 ถ้าเป็นการลดน้ำหนัก
  } else if (accomplish === 'Gain weight') {
    tdee += 500; // เพิ่มแคลลอรีขึ้น 500 ถ้าเป็นการเพิ่มน้ำหนัก
  }

console.log("TDEE:", tdee);
console.log("Weight:", weight);
console.log("Height:", height);
console.log("Sex:", selectedSex);
console.log("Activity Level:", activitylevel);
console.log("Age:", age);
console.log("Accomplish:", accomplish);

  return tdee;
};


const initialState = {
  selectedStartDate: '',
  selectedSex: '',
  weight: '',
  height: '',
  birthdate: '',
  openStartDatePicker: false,
  accomplish: '',
  goalweight:'',
  activitylevel:'',
  age: '',
};

const processInfoSlice1 = createSlice({
  name: 'processInfo',
  initialState,
  reducers: {
    setSelectedStartDate: (state, action) => {
      state.selectedStartDate = action.payload;
      console.log(state.openStartDatePicker)
    },
    setSelectedSex: (state, action) => {
      state.selectedSex = action.payload;
      console.log(state.selectedSex)
      
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
      console.log(state.weight)
    },
    setHeight: (state, action) => {
      state.height = action.payload;
      console.log(state.height)
    },
    setBirthdate: (state, action) => {
      state.birthdate = action.payload;
      console.log(state.birthdate)
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
    },
    setAge: (state, action) => { // action สำหรับ set ค่า age
      state.age = action.payload;
    },
  }
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
  setActivitylevel,
  setAge,
} = processInfoSlice1.actions;

export const processInfoSelector = (state) => state.processInfo;

export default processInfoSlice1.reducer;
