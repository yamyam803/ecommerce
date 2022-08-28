import axios from "axios";
// import bcrypt from "bcrypt";

// const crypt = require("bcrypt");
// const hash = ;

// const saltRounds = 10;
const baseURL = "https://fakestoreapi.com";
const daftar = async (data) => {
  // const salt = bcrypt.genSaltSync(saltRounds);
  // const a = bcrypt.hashSync(data.password, salt);
  try {
    const response = await axios({
      method: "POST",
      url: `${baseURL}/users`,
      data: {
        email: data.email,
        password: data.password,
        // password: bcrypt.hashSync(data.password, salt),
        phone: data.phoneNumber,
        username: data.username,
        name: {
          firstname: null,
          lastname: null,
        },
        address: {
          city: null,
          street: null,
          number: null,
          zipcode: null,
          geolocation: {
            lat: null,
            long: null,
          },
        },
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }

  //   console.log(username, password);
  //   try {
  //     const response = await fetch(`${baseURL}/auth/login`, {
  //       method: "POST",
  //       body: JSON.stringify({
  //         username,
  //         password,
  //       }),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
};

export default daftar;
