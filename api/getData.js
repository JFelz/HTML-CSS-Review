

// An Asyncronous tool that returns success/failed states and (.then) with what to do with the data.
// You can also parse objects (coming in as text) into JSON format (to open in JS) by slapping a .json() at the end of the response.
let getSum = new Promise((resolve, reject) => {
// Fetch calls are used so JS can send network requests to a server. "GET", "POST", etc.
fetch("faux url address ", {
  method: "GET",
  headers: {
    "Content-Type": "application",
  },
  })
  .then(response => response.json())
  .then(data => resolve(data))
  .catch(error => reject(error));
});
