export let ACCESS_TOKEN = "";

export const BASE_URL = "http://127.0.0.1:4000";

//=========================================

export const setToken = (tok) => {
  ACCESS_TOKEN = tok;
  console.log(ACCESS_TOKEN);
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

const getCollegeFormData = async () => {
  let data = {
    token: ACCESS_TOKEN,
  };
  let url = BASE_URL + "/form/collegeformdata";
  let method = "POST";

  let response = await performRequest(url, method, data);
  return response;
};

const updateCollegeFormData = async (collegeFormData) => {
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

const getParentFormData = async () => {
  let data = {
    token: ACCESS_TOKEN,
  };
  let url = BASE_URL + "/form/parentdata";
  let method = "POST";

  let response = await performRequest(url, method, data);
  return response;
};

const updateParentFormData = async (parentData) => {
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

const performRequest = async (url, method, data = {}) => {
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
