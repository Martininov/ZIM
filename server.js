async function getMatches() {
  const url = "https://1x-bet.mobi/LiveFeed/GetSportsShortZip?sports=40&lng=fr&gr=54&country=96";
  
  const response = await fetch(url, {
    headers: {
      "Accept-Encoding": "gzip, deflate, br",
      "Accept": "application/json"
    }
  });

  const data = await response.json();
  console.log(data);
}

getMatches();