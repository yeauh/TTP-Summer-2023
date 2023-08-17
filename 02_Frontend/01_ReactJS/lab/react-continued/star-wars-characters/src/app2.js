const axios = require("axios");
const express = require("express");
const app = express();

function App() {
    const getQuote = () => {
        axios.get("https://api.quotable.io/random")
        .then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        // <button onClick={(getQuote)}>Get Quote</button>
        <p>Hi</p>
    );
}

app.listen(3000, () => {
    console.log(`App is running on port 3000`);
});

export default App;
/*
const axios = require('axios');
const { red, green } = require("chalk");

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(red(error));
  }
}

// export default getUser(); */