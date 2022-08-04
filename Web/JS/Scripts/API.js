const key = "0f6827f510mshfc52cf711f030b9p11173ajsnebc96922ae68";
let searchLocation = "New delhi";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  },
};

fetch(
  `https://hotels4.p.rapidapi.com/locations/search?query=${searchLocation}&locale=en_US`,
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
