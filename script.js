// Selecting page elements
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countryInput = document.querySelector("#countrySearch");
getCountry=(country)=>{
    const url ="https://restcountries.eu/rest/v2/name/";
    const request = new XMLHttpRequest;
    request.responseType = "json";
    request.open("GET",url+country);
    request.send()
console.log(request)
    request.onreadystatechange=()=>{
        if (request.readyState === XMLHttpRequest.DONE) {
            const [data] = request.response;
              renderCountry(data);
        }
    }
}
// btn.addEventListener('click', displayCountry);
getCountryAndNeighbour=(country)=>{
    const url = "https://restcountries.eu/rest/v2/name/";
   const alpha ="https://restcountries.eu/rest/v2/alpha/";
   const request = new XMLHttpRequest();
   request.open("GET",url+country);
    request.send()
    request.addEventListener('load',function (){
        const [data] = JSON.parse(this.responseText);
  renderCountry(data);
  const neighbour = data.borders[0]
  const request2 = new XMLHttpRequest();
  request2.open("GET",alpha+neighbour);
  request2.send()
    request2.addEventListener('load',function (){
        const data = JSON.parse(this.responseText);
  renderCountry(data);
///////3rd
  const neighbourHun = data.borders[2];
  console.log(data.borders[2])
  const request3 = new XMLHttpRequest();
  request3.open("GET",alpha+neighbourHun);
  request3.send()
    request3.addEventListener('load',function (){
        const data1 = JSON.parse(this.responseText);
  renderCountry(data1);})
})
})
}
btn.addEventListener('click', displayCountries);