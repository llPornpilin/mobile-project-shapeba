import { createSlice } from "@reduxjs/toolkit";
import { db, collection, getDocs, addDoc, doc, deleteDoc, updateDoc, arrayUnion, query, where } from '../../../firebase-cofig'

// export const calculateAge = (birthdate) => {
//   const currentYear = new Date();
//   const birthYear = new Date(birthdate);
//   console.log('currentYear ', currentYear );
//   console.log('birthYear ', birthYear );
//   console.log('birthdate ', birthdate );
//   const age = currentYear - birthYear;
//   return age;
// };

export const calculateTimeToGoal = (state) => {
  const { goalweight, weight, accomplish } = state;

  const weightChange = Math.abs(goalweight - weight);
  const calorieChange = 500;
  const daysInWeek = 7;
  const daysInMonth = 30;

  const weeksToGoal = (weightChange * 7700) / calorieChange / daysInWeek;
  const monthsToGoal = (weightChange * 7700) / calorieChange / daysInMonth;

  const timeUnit = accomplish === "Gain weight" ? "month" : "week";

  return {
    weeksToGoal: Math.floor(weeksToGoal),
    monthsToGoal: Math.floor(monthsToGoal),
    timeUnit,
  };
};
//TDEE
export const calculateTDEE = (state) => {
  const { weight, height, selectedSex, activitylevel, accomplish, age } = state;
  // const age = calculateAge(birthdate);

  let bmr = 0;
  if (selectedSex === "male") {
    bmr = (88.362 + ( 13.397 * weight + 4.799 * height - 5.677 * age)).toFixed(0);
  } else if (selectedSex === "female") {
    bmr = (447.593 + ( 9.247 * weight + 3.098 * height - 4.33 * age)).toFixed(0);
  }

  let tdee = 0;
  switch (activitylevel) {
    case "Little or no exercise":
      tdee = (bmr * 1.2).toFixed(0);
      break;
    case "1-3 times/week":
      tdee = (bmr * 1.375).toFixed(0);
      break;
    case "4-5 times/week":
      tdee = (bmr * 1.55).toFixed(0);
      break;
    case "Intense exercise 6-7 times/week":
      tdee = (bmr * 1.725).toFixed(0);
      break;
    case "Very intense exercise daily":
      tdee = (bmr * 1.9).toFixed(0);
      break;
    default:
      tdee = bmr;
  }

  if (accomplish === "Lose weight") {
    tdee -= 500; // ลดแคลลอรีลง 500 ถ้าเป็นการลดน้ำหนัก
  } else if (accomplish === "Gain weight") {
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

const saveUserInfo = () => {


}

const initialState = {
  // selectedStartDate: '',
  selectedSex: null, // กำหนดค่าเริ่มต้นให้เป็น null หรือค่าที่เหมาะสม
  weight: "",
  height: "",
  birthdate: "",
  openStartDatePicker: false,
  accomplish: "",
  goalweight: "",
  activitylevel: null, // กำหนดค่าเริ่มต้นให้เป็น null หรือค่าที่เหมาะสม
  age: 0,
  months: "",
};

const processInfoSlice1 = createSlice({
  name: "processInfo",
  initialState,
  reducers: {
    setSelectedStartDate: (state, action) => {
      state.selectedStartDate = action.payload;
      console.log(state.selectedStartDate);
    },
    setSelectedSex: (state, action) => {
      state.selectedSex = action.payload;
      console.log(state.selectedSex);
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
      console.log(state.weight);
    },
    setHeight: (state, action) => {
      state.height = action.payload;
      console.log(state.height);
    },

    setBirthdate: (state, action) => {
      state.birthdate = action.payload;
      console.log(state.birthdate);
      //คำนวนอายุ
      const getCurrentDate = new Date();
      // Calculate the difference in years
      const part = state.birthdate.split("/");
      let age = getCurrentDate.getFullYear() - parseInt(part[0]);
     
      // Check if the birthday hasn't occurred this year yet
      if (
        getCurrentDate.getMonth() < part[1] ||
        (getCurrentDate.getMonth() === part[1] &&
          getCurrentDate.getDate() < part[2])
      ) {
        age--;
      }
      // console.log("Age: ", age);
      setAge(age)

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
      console.log(state.goalweight);
    },
    setActivitylevel: (state, action) => {
      state.activitylevel = action.payload;
      console.log(state.activitylevel);
    },
    setAge: (state, action) => {
      state.age = parseInt(action.payload); // แปลง payload เป็นตัวเลขและอัปเดตอายุใน state
      console.log("age", state.age)
    },
    setMonths: (state, action) => {
      state.months = action.payload;
      console.log(state.months);
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
  setaccomplish,
  setGoalweight,
  setActivitylevel,
  setAge,
  setMonths,
} = processInfoSlice1.actions;

export const processInfoSelector = (state) => state.processInfo;

export default processInfoSlice1.reducer;
