const PLACEHOLDER_URL_API = "https://jsonplaceholder.typicode.com/users"
const userID = 1;

// fetch ALL
fetch(`${PLACEHOLDER_URL_API}`, {})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))


// fetch by ID
fetch(`${PLACEHOLDER_URL_API}/${userID}`, {})
.then(resp => resp.json())
.then(console.log)


// fetch by POST
fetch(`${PLACEHOLDER_URL_API}`, {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));


// fetch by PUT
fetch(`${PLACEHOLDER_URL_API}/${userID}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: 'kassi',
      body: 'maison',
      userId: 3,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));