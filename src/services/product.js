// import axios from "axios";
const baseURL = "https://fakestoreapi.com";
export const products = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => json)
    .catch((e) => e);
};

// const login = async (username, password) => {
//   console.log(username, password);
//   try {
//     const response = await axios({
//       method: "POST",
//       url: `${baseURL}/auth/login`,
//       data: {
//         password,
//         username,
//       },
//     });

//     console.log(response.data);
//     if (response.data.token) {
//       localStorage.setItem("user", JSON.stringify(response.data));
//     }
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default { login };
