import { createSlice } from '@reduxjs/toolkit';

//TDEE
export const calculateTDEE = (state) => {
  const { weight, height, selectedSex, activitylevel, age, accomplish } = state;

  let bmr = 0;
  if (selectedSex === 'male') {
    bmr = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)).toFixed(0);
  } else if (selectedSex === 'female') {
    bmr = (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)).toFixed(0);
  }

  let tdee = 0;
  switch (activitylevel) {
    case 'Little or no exercise':
      tdee = (bmr * 1.2).toFixed(0);
      break;
    case '1-3 times/week':
      tdee = (bmr * 1.375).toFixed(0);
      break;
    case '4-5 times/week':
      tdee = (bmr * 1.55).toFixed(0);
      break;
    case 'Intense exercise 6-7 times/week':
      tdee = (bmr * 1.725).toFixed(0);
      break;
    case 'Very intense exercise daily':
      tdee = (bmr * 1.9).toFixed(0);
      break;
    default:
      tdee = bmr;
  }

  if (accomplish === 'Lose weight') {
    tdee -= 500; // ลดแคลลอรีลง 500 ถ้าเป็นการลดน้ำหนัก
  } else if (accomplish === 'Gain weight') {
    tdee += 500; // เพิ่มแคลลอรีขึ้น 500 ถ้าเป็นการเพิ่มน้ำหนัก
  }

  // คำนวณเวลาที่ต้องใช้ในการลดหรือเพิ่มน้ำหนัก
  const weightChange = 10; // น้ำหนักที่ต้องการเปลี่ยน
  const calorieChange = 500; // แคลลอรีที่เปลี่ยนแปลง
  const months = weightChange * 7700 / calorieChange; // 7700 คือแคลอรีที่เผาผลาญในการลดหนามน้ำหนัก 1 กิโลกรัม

  console.log("TDEE:", tdee);
  console.log("Weight:", weight);
  console.log("Height:", height);
  console.log("Sex:", selectedSex);
  console.log("Activity Level:", activitylevel);
  console.log("Age:", age);
  console.log("Accomplish:", accomplish);
  console.log(`To ${accomplish} ${weightChange} kg, it will take approximately ${months.toFixed(0)} months.`);

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
  months:''
};

const processInfoSlice1 = createSlice({
  name: 'processInfo',
  initialState,
  reducers: {
    setSelectedStartDate: (state, action) => {
      state.selectedStartDate = action.payload;
      console.log(state.selectedStartDate)
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
    setMonths: (state, action) => {
      state.months = action.payload;
      console.log(state.months)
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
  setMonths

} = processInfoSlice1.actions;

export const processInfoSelector = (state) => state.processInfo;

export default processInfoSlice1.reducer;