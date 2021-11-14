document.getElementById("welcomeText").innerHTML = "Welcome Home!";
function getRep(){
    let input = document.getElementById("userInput").value;
    //const houseURL = "https://api.propublica.org/congress/v1/";

    // <link type="text/css" rel="stylesheet" href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css"/>

    //curl "https://api.propublica.org/congress/v1/117/house/members.json" -H "X-API-Key: HNTay9NNI5rasZvNpcMVbG1xgraTr27YLVK7CTr"
    let key = 'HNTay9NNI5rasZvNpcMVbG1xgraTr27YLVK7CTr';
    let houseURL = 'https://api.propublica.org/congress/v1/117/house/members.json'
    fetch(houseURL).then(function(result) {
      return result.json();
    }).then(function(json) {
      displayResults(json).then(data=>houseURL.push(...data));
    });
    function findMatch(houseURL, input) {return houseURL.filter(state => {const regex = new RegExp(input, 'gi'); return state.state.match(regex)})};
    function stateMatch() {const matchList = findMatch(houseURL, this.value); let final = []
      if (this.value.length == 0) {final = [];}
      else {final = matchList.map((state) => `<li><span class = "state">${state.state}</span> <br> <span class = "first_name">${first_name.first_name}</span> </li>`).join('');} results.innerHTML = final;}
    const searchInput = document.querySelector('.search');
    const results = document.querySelector('.suggestions');
    searchInput.addEventListener('input', stateMatch);

}
