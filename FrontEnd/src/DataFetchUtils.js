export let ACCESS_TOKEN = "";

export const BASE_URL = "http://127.0.0.1:4000";

//=========================================

export const setToken = (tok) => {
  ACCESS_TOKEN = tok;
  // console.log(ACCESS_TOKEN);
};

const setAccesToken = async () => {
  // console.log("Here");
  if (ACCESS_TOKEN !== "") {
    // console.log("here inside");
    try {
      let res = await fetch(BASE_URL + "/refresh_token");
      let token = res.json();
      ACCESS_TOKEN = token.token;
    } catch (e) {}
  }
};

//=========================================

setInterval(setAccesToken, 14 * 60 * 1000);

//=========================================
export const LoginUser = async (email, password) => {
  let dataToSend = {
    user: {
      email,
      password,
    },
  };

  let url = BASE_URL + "/user/login";
  let method = "POST";
  let response = await performRequest(url, method, dataToSend);

  return response;
};

export const SignUp = async (email, password) => {
  let dataToSend = {
    user: {
      email,
      password,
    },
  };

  let url = BASE_URL + "/user/add";
  let method = "POST";
  let response = await performRequest(url, method, dataToSend);

  return response;
};

export const logoutUser = async () => {
  let url = BASE_URL + "/user/logout";
  let method = "GET";
  let d = await performRequest(url, method);
  return d;
};

//=========================================

export const getUserData = async () => {
  let data = {
    token: ACCESS_TOKEN,
  };
  let url = BASE_URL + "/user/get";
  let method = "POST";

  let response = await performRequest(url, method, data);

  return response;
};

export const getUserDataAll = async () => {
  let data = {
    token: ACCESS_TOKEN,
  };
  let url = BASE_URL + "/user/getalldata";
  let method = "POST";

  let response = await performRequest(url, method, data);

  return response;
};

export const updateUserData = async (userData) => {
  let data = {
    userData: userData,
    token: ACCESS_TOKEN,
  };
  let url = BASE_URL + "/user/update";
  let method = "PUT";

  let response = performRequest(url, method, data);
  return response;
};

export const deleteUser = async () => {
  let data = {
    token: ACCESS_TOKEN,
  };
  let url = BASE_URL + "/user/delete";
  let method = "DELETE";

  let response = await performRequest(url, method, data);
  return response;
};

//========================================

export const getCollegeFormData = async () => {
  let data = {
    token: ACCESS_TOKEN,
  };
  let url = BASE_URL + "/form/collegeformdata";
  let method = "POST";

  let response = await performRequest(url, method, data);
  return response;
};

export const updateCollegeFormData = async (collegeFormData) => {
  let data = {
    collegeFormData: collegeFormData,
    token: ACCESS_TOKEN,
  };
  let url = BASE_URL + "/form/collegeformdata";
  let method = "PUT";

  let response = await performRequest(url, method, data);
  return response;
};

//=========================================

export const getParentFormData = async () => {
  let data = {
    token: ACCESS_TOKEN,
  };
  let url = BASE_URL + "/form/parentdata";
  let method = "POST";

  let response = await performRequest(url, method, data);
  return response;
};

export const updateParentFormData = async (parentData) => {
  let data = {
    parentData: parentData,
    token: ACCESS_TOKEN,
  };
  let url = BASE_URL + "/form/parentdata";
  let method = "PUT";

  let response = await performRequest(url, method, data);
  return response;
};

//=========================================

export const performRequest = async (url, method, data = {}) => {
  let options = {
    method: method,
    headers: { "Content-Type": "application/json" },
    mode: "cors",
    credentials: "include",
  };
  if (method !== "GET") {
    options.body = JSON.stringify(data);
  }

  let response = await fetch(url, options);

  let d = await response.json();
  return d;
};

//===============================================

export const tranformToUserDataStruct = (data) => {
  let cleardData = {};
  for (const i in data) {
    if (data[i] !== "") {
      cleardData[i] = data[i];
    }
  }
  // console.log(cleardData);
  let transformedData = {};
  for (const i in cleardData) {
    switch (i) {
      case "studentName":
        transformedData["Name"] = cleardData[i];
        break;
      case "studentPermanentAdd":
        transformedData["address1"] = cleardData[i];
        break;
      case "studentNumber":
        transformedData["phoneNum1"] = cleardData[i];
        break;
      case "studentDOB":
        transformedData["dateOfBirth"] = cleardData[i];
        break;
      case "studentPOB":
        transformedData["placeOfBirth"] = cleardData[i];
        break;
      // case "studentName":
      //   transformedData["Name"] = cleardData[i];
      //   break;
      // case "studentName":
      //   transformedData["Name"] = cleardData[i];
      //   break;
    }
  }
  return transformedData;
};
export const tranformToParentDataStruct = (data) => {
  let cleardData = {};
  for (const i in data) {
    if (data[i] !== "") {
      cleardData[i] = data[i];
    }
  }
  let transformedData = {
    motherData: {},
    fatherData: {},
    gardianData: {},
  };
  for (const i in cleardData) {
    // console.log(i, cleardData[i]);
    // console.log();
    if (i === "fathersName") {
      transformedData["fatherData"]["Name"] = cleardData[i];
    } else if (i === "fathersWorkAdd") {
      transformedData["fatherData"]["workAddress"] = cleardData[i];
    } else if (i === "fathersNumber") {
      transformedData["fatherData"]["phoneNum1"] = cleardData[i];
    } else if (i === "fathersEmail") {
      transformedData["fatherData"]["email"] = cleardData[i];
    } else if (i === "fathersOccupation") {
      transformedData["fatherData"]["occupation"] = cleardData[i];
    }
    // ====
    else if (i === "mothersName") {
      transformedData["motherData"]["Name"] = cleardData[i];
    } else if (i === "mothersNumber") {
      transformedData["motherData"]["phoneNum1"] = cleardData[i];
    } else if (i === "mothersOccupation") {
      transformedData["motherData"]["occupation"] = cleardData[i];
    } else if (i === "localGuardiansName") {
      transformedData["gardianData"]["Name"] = cleardData[i];
    } else if (i === "localGuardiansOccupation") {
      transformedData["gardianData"]["occupation"] = cleardData[i];
    } else if (i === "localGuardiansNumber") {
      transformedData["gardianData"]["phoneNum1"] = cleardData[i];
    } else if (i === "localGuardiansWorkAdd") {
      transformedData["gardianData"]["workAddress"] = cleardData[i];
    } else if (i === "localGuardiansEmail") {
      transformedData["gardianData"]["email"] = cleardData[i];
    } else if (i === "localGuardiansAdd") {
      transformedData["gardianData"]["address1"] = cleardData[i];
    }
  }

  return transformedData;
};

export const tranformToUserCollegeDataStruct = (data) => {
  let cleardData = {};
  for (const i in data) {
    if (data[i] !== "") {
      cleardData[i] = data[i];
    }
  }
  let transformedData = {
    secondryExam: {},
    seniorSecondryExam: {},
    DiplomeExam: {},
    GraduationExam: {},
  };

  for (const i in cleardData) {
    switch (i) {
      case "secondaryYear":
        transformedData["secondryExam"]["year"] = cleardData[i];
        break;
      case "secondaryCollegeNameAndPlace":
        transformedData["secondryExam"]["CollegeName"] = cleardData[i];
        break;
      case "secondaryUniversityOrBoard":
        transformedData["secondryExam"]["University"] = cleardData[i];
        break;
      case "secondaryDivisionAndPercentage":
        transformedData["secondryExam"]["DivisionOrPercent"] = cleardData[i];
        break;
      case "seniorSecondaryYear":
        transformedData["seniorSecondryExam"]["year"] = cleardData[i];
        break;
      case "seniorSecondaryCollegeNameAndPlace":
        transformedData["seniorSecondryExam"]["CollegeName"] = cleardData[i];
        break;
      case "seniorSecondaryUniversityOrBoard":
        transformedData["seniorSecondryExam"]["University"] = cleardData[i];
        break;
      case "seniorSecondaryDivisionAndPercentage":
        transformedData["seniorSecondryExam"]["DivisionOrPercent"] =
          cleardData[i];
        break;
      case "diplomaYear":
        transformedData["DiplomeExam"]["year"] = cleardData[i];
        break;
      case "diplomaCollegeNameAndPlace":
        transformedData["DiplomeExam"]["CollegeName"] = cleardData[i];
        break;
      case "diplomaUniversityOrBoard":
        transformedData["DiplomeExam"]["University"] = cleardData[i];
        break;
      case "diplomaDivisionAndPercentage":
        transformedData["DiplomeExam"]["DivisionOrPercent"] = cleardData[i];
        break;
      case "graduationYear":
        transformedData["GraduationExam"]["year"] = cleardData[i];
        break;
      case "graduationCollegeNameAndPlace":
        transformedData["GraduationExam"]["CollegeName"] = cleardData[i];
        break;
      case "graduationUniversityOrBoard":
        transformedData["GraduationExam"]["University"] = cleardData[i];
        break;
      case "graduationDivisionAndPercentage":
        transformedData["GraduationExam"]["DivisionOrPercent"] = cleardData[i];
        break;
    }
  }
  return transformedData;
};

export const tranformFromUserData = (data) => {
  let cleardData = {};
  for (const i in data) {
    if (data[i] !== "") {
      cleardData[i] = data[i];
    }
  }
  let transformedData = {};

  //  studentName
  //     studentNumber
  //     studentDOB
  //     studentPOB
  //     studentPermanentAdd

  for (let i in cleardData) {
    switch (i) {
      case "Name":
        transformedData["studentName"] = cleardData[i];
        break;

      // case "email":
      //   transformedData["studentName"] = cleardData[i]
      // break;

      case "address1":
        transformedData["studentPermanentAdd"] = cleardData[i];
        break;

      // case "workAddress":
      //   break;

      case "phoneNum1":
        transformedData["studentNumber"] = cleardData[i];
        break;

      // case "phoneNum2":
      //   break;

      case "dateOfBirth":
        transformedData["studentDOB"] = cleardData[i];
        break;

      // case "occupation":
      //   break;

      case "placeOfBirth":
        transformedData["studentpOB"] = cleardData[i];
        break;
    }
  }
  return transformedData;
};

export const tranformFromUserParentData = (data) => {
  // let cleardData = {};
  let transformedData = {};

  if (Object.keys(data.motherData).length !== 0) {
    for (let i in data.motherData) {
      //      mothersName
      //     mothersOccupation
      //     mothersNumber
      switch (i) {
        case "Name":
          transformedData["mothersName"] = data.motherData[i];
          break;
        case "occupation":
          transformedData["mothersOccupation"] = data.motherData[i];
          break;
        case "phoneNum1":
          transformedData["mothersNumber"] = data.motherData[i];
          break;
        default:
          break;
      }
    }
  }
  if (Object.keys(data.fatherData).length !== 0) {
    for (let i in data.motherData) {
      //     fathersName
      //     fathersOccupation
      //     fathersNumber
      //     fathersWorkAdd
      //     fathersEmail
      switch (i) {
        case "Name":
          transformedData["fathersName"] = data.fatherData[i];
          break;
        case "occupation":
          transformedData["fathersOccupation"] = data.fatherData[i];
          break;
        case "phoneNum1":
          transformedData["fathersNumber"] = data.fatherData[i];
          break;
        case "email":
          transformedData["fathersEmail"] = data.fatherData[i];
          break;
        case "workAddress":
          transformedData["fathersWorkAdd"] = data.fatherData[i];
          break;
        default:
          break;
      }
    }
  }
  if (Object.keys(data.gardianData).length !== 0) {
    for (let i in data.gardianData) {
      //     localGuardiansName
      //     localGuardiansOccupation
      //     localGuardiansNumber
      //     localGuardiansWorkAdd
      //     localGuardiansEmail
      //     localGuardiansAdd
      switch (i) {
        case "Name":
          transformedData["localGuardiansName"] = data.gardianData[i];
          break;
        case "occupation":
          transformedData["localGuardiansOccupation"] = data.gardianData[i];
          break;
        case "phoneNum1":
          transformedData["localGuardiansNumber"] = data.gardianData[i];
          break;
        case "email":
          transformedData["localGuardiansEmail"] = data.gardianData[i];
          break;
        case "workAddress":
          transformedData["localGuardiansWorkAdd"] = data.gardianData[i];
          break;
        case "address1":
          transformedData["localGuardiansAdd"] = data.gardianData[i];
          break;
        default:
          break;
      }
    }
  }

  return transformedData;
};

export const tranformFromUserCollegeData = (data) => {
  // let cleardData = {};
  let transformedData = {};

  if (Object.keys(data.secondryExam).length !== 0) {
    for (let i in data.secondryExam) {
      // secondaryYear
      //     secondaryCollegeNameAndPlace
      //     secondaryUniversityOrBoard
      //     secondaryDivisionAndPercentage
      // secondryExam;
      // console.log(i);
      switch (i) {
        case "year":
          transformedData["secondaryYear"] = data.secondryExam[i];
          break;
        case "CollegeName":
          transformedData["secondaryCollegeNameAndPlace"] =
            data.secondryExam[i];
          break;
        case "University":
          transformedData["secondaryUniversityOrBoard"] = data.secondryExam[i];
          break;
        case "DivisionOrPercent":
          transformedData["secondaryDivisionAndPercentage"] =
            data.secondryExam[i];
          break;
        // case "workAddress":
        //   transformedData["localGuardiansWorkAdd"] = data.gardianData[i];
        //   break;
        // case "address1":
        //   transformedData["localGuardiansAdd"] = data.gardianData[i];
        //   break;
        default:
          break;
      }
    }
  }
  if (Object.keys(data.seniorSecondryExam).length !== 0) {
    for (let i in data.seniorSecondryExam) {
      // seniorSecondaryYear
      //     seniorSecondaryCollegeNameAndPlace
      //     seniorSecondaryUniversityOrBoard
      //     seniorSecondaryDivisionAndPercentage
      // console.log(i);
      switch (i) {
        case "year":
          transformedData["seniorSecondaryYear"] = data.seniorSecondryExam[i];
          break;
        case "CollegeName":
          transformedData["seniorSecondaryCollegeNameAndPlace"] =
            data.seniorSecondryExam[i];
          break;
        case "University":
          transformedData["seniorSecondaryUniversityOrBoard"] =
            data.seniorSecondryExam[i];
          break;
        case "DivisionOrPercent":
          transformedData["seniorSecondaryDivisionAndPercentage"] =
            data.seniorSecondryExam[i];
          break;
        // case "workAddress":
        //   transformedData["localGuardiansWorkAdd"] = data.gardianData[i];
        //   break;
        // case "address1":
        //   transformedData["localGuardiansAdd"] = data.gardianData[i];
        //   break;
        default:
          break;
      }
    }
  }
  if (Object.keys(data.GraduationExam).length !== 0) {
    for (let i in data.GraduationExam) {
      //     graduationYear
      //     graduationCollegeNameAndPlace
      //     graduationUniversityOrBoard
      //     graduationDivisionAndPercentage
      switch (i) {
        case "year":
          transformedData["graduationYear"] = data.GraduationExam[i];
          break;
        case "CollegeName":
          transformedData["graduationCollegeNameAndPlace"] =
            data.GraduationExam[i];
          break;
        case "University":
          transformedData["graduationUniversityOrBoard"] =
            data.GraduationExam[i];
          break;
        case "DivisionOrPercent":
          transformedData["graduationDivisionAndPercentage"] =
            data.GraduationExam[i];
          break;
        // case "workAddress":
        //   transformedData["localGuardiansWorkAdd"] = data.gardianData[i];
        //   break;
        // case "address1":
        //   transformedData["localGuardiansAdd"] = data.gardianData[i];
        //   break;
        default:
          break;
      }
    }
  }
  if (Object.keys(data.DiplomeExam).length !== 0) {
    for (let i in data.DiplomeExam) {
      //     diplomaYear
      //     diplomaCollegeNameAndPlace
      //     diplomaUniversityOrBoard
      //     diplomaDivisionAndPercentage
      // console.log(i);
      switch (i) {
        case "year":
          transformedData["diplomaYear"] = data.DiplomeExam[i];
          break;
        case "CollegeName":
          transformedData["diplomaCollegeNameAndPlace"] = data.DiplomeExam[i];
          break;
        case "University":
          transformedData["diplomaUniversityOrBoard"] = data.DiplomeExam[i];
          break;
        case "DivisionOrPercent":
          transformedData["diplomaDivisionAndPercentage"] = data.DiplomeExam[i];
          break;
        // case "workAddress":
        //   transformedData["localGuardiansWorkAdd"] = data.gardianData[i];
        //   break;
        // case "address1":
        //   transformedData["localGuardiansAdd"] = data.gardianData[i];
        //   break;
        default:
          break;
      }
    }
  }
  return transformedData;
};

//     studentName
//     studentNumber
//     studentDOB
//     studentPOB
//     studentPermanentAdd
//---------------------
//     fathersName
//     fathersOccupation
//     fathersNumber
//     fathersWorkAdd
//     fathersEmail
//     mothersName
//     mothersOccupation
//     mothersNumber
//     localGuardiansName
//     localGuardiansOccupation
//     localGuardiansNumber
//     localGuardiansWorkAdd
//     localGuardiansEmail
//     localGuardiansAdd
//-------------------------------------
//     secondaryYear
//     secondaryCollegeNameAndPlace
//     secondaryUniversityOrBoard
//     secondaryDivisionAndPercentage
//     seniorSecondaryYear
//     seniorSecondaryCollegeNameAndPlace
//     seniorSecondaryUniversityOrBoard
//     seniorSecondaryDivisionAndPercentage
//     diplomaYear
//     diplomaCollegeNameAndPlace
//     diplomaUniversityOrBoard
//     diplomaDivisionAndPercentage
//     graduationYear
//     graduationCollegeNameAndPlace
//     graduationUniversityOrBoard
//     graduationDivisionAndPercentage
