const axios = require('axios');
const PLACEHOLDER_URL_API = "https://jsonplaceholder.typicode.com/users";
const userID = 1;

// Axios ALL
axios.get(PLACEHOLDER_URL_API)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => console.error("Erreur GET ALL:", error.message));

// Axios by ID
axios.get(`${PLACEHOLDER_URL_API}/${userID}`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => console.error("Erreur GET by ID:", error.message));

// axios by POST
axios.post(PLACEHOLDER_URL_API, {
    name: "Kassi",
    username: "Bilé",
    email: "Kassi@gmail.com"
  }, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => console.error("Erreur POST:", error.message));

// fetch by PUT
axios.put(`${PLACEHOLDER_URL_API}/${userID}`, {
    name: "Amon Marcel",
    username: "amon",
    email: "amon@gmail.com"
  }, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => console.error("Erreur PUT:", error.message));

// fetch by PUT
axios.delete(`${PLACEHOLDER_URL_API}/${userID}`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => console.error("Erreur DELETE:", error.message));