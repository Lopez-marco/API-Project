TRN-Api-key='0c008ba5-e97f-47d3-8664-f031bc9049a7'
// GET https://public-api.tracker.gg/v2/apex/standard/profile/{platform}/{platformUserIdentifier}

// const key='0c008ba5-e97f-47d3-8664-f031bc9049a7';
const URL='https://public-api.tracker.gg/v2/apex/standard/profile/psn/little_joker34'

// function platform(){

// }

fetch(URL)
.then(function(result) {
    return result.json();
}).then (function(json){
    displayResults(json);
    console.log(json);
});