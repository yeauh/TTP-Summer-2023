const React = require('react');
const useEffect = require("react");
const useState = require("react");
const axios = require('axios');
const express = require('express');
const app = express();
const port = 3001;


function StarWarsCharacters() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        console.log("Component mounted");
      }, []);
      useEffect(() => {
        axios
          .get("http://localhost:3001/api/people")
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data", error);
          });
      }, []);
      axios
        .get("http://localhost:3001/api/people")
        .then((response) => {
            setCharacters(response.data.results);
        })
        .catch((error) => {
            console.error("Error fetching data", error);
        });
    
      return (
        <div>
          <h1>Star Wars Characters</h1>
          <ul>
            {characters.map((character) => (
              <li key={character.name}>
                <h2>{character.name}</h2>
                <p>Gender: {character.gender}</p>
                <p>Birth Year: {character.birth_year}</p>
                <p>Height: {character.height}</p>
                <p>Homeworld: {character.homeworld}</p>
                <p>Species: {character.species[0]}</p>
              </li>
            ))}
          </ul>
        </div>
      );
}
app.get("/api/people", async (req, res) => {
    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      res.send(response.data);
      res.send(StarWarsCharacters());
    } catch (error) {
      console.error("Error fetching data", error);
      res.status(500).send("Error fetching data from Star Wars API");
    }
  });
  
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });

// export default StarWarsCharacters;
/*
const axios = require("axios");
const express = require("express");
const app = express();
const PORT = 3001;

app.get("/api/people", async (req, res) => {
    try {
        const response = await axios.get("https://swapi.dev/api/people/");
        res.send(response.data);
    } catch (error) {
        console.error("Error fetching data", error);
        res.status(500).send("Error fetching data from Star Wars API")
    };
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

function StarWarsCharacters() {

    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3001/api/people")
            .then(((response) => {
                console.log(response.data);
                setCharacters(response.data.results);
            })
            .catch((error) => {
                console.log("Error fetching data", error);
            })
            )
    }, []);
    useEffect(() => {
        const fetchCharacters = async () => {
          try {
            const response = await axios.get("https://swapi.dev/api/people/");
            console.log(response.data.results);
          } catch (error) {
            console.error("Error fetching data", error);
          }
        };
      
        fetchCharacters();
      }, []);


    return (
        <div>
            <h1>Star Wars Characters</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.name}>{character.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default StarWarsCharacters();
*/