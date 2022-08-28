// import fetch from "node-fetch";
import axios from "axios";
const baseURL = "https://fakestoreapi.com";
const login = async (username, password) => {
  console.log(username, password);
  try {
    const response = await axios({
      method: "POST",
      url: `${baseURL}/auth/login`,
      data: {
        password,
        username,
      },
    });

    console.log(response.data);
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default { login };
