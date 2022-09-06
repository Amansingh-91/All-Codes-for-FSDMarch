const searchBar = document.querySelector(".searchBar");
const HotelNames = document.querySelector(".HotelNames");
// const CitySearch = document.querySelector(".citySearch");
// API to Search Location
const url =
  "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchLocation?query=";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9ea5d8e228msh6545e5867fb77e4p113b9fjsn2b8e5f6d266d",
    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
  },
};

const getData = (city) => {
  const completeUrl = url + city;
  fetch(completeUrl, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const geoId = response.data[0].documentId;
      console.log(geoId);
      fetch(
        `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=${geoId}&checkIn=2022-09-07&checkOut=2022-09-08`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);

          const mydata = response.data.data.map((hotel) => {
            return `<li>${hotel.title}</li>`;
          });
          console.log(mydata);
          let html = "<ul>";
          for (let i = 0; i < mydata.length; i++) {
            html += mydata[i];
          }
          html += "</ul>";
          HotelNames.innerHTML += html;
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
};
// searchBar.firstElementChild.value = "Jaipur";
searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  getData(e.target.firstElementChild.value);
});
// CitySearch.addEventListener("keyup", (e) => {
//   let value = e.target.value;
//   console.log(e.target.value);
//   if (value.length >= 3) {
//     console.log("i am here");
//   }
// });
