// Write your JavaScript code here!
// require('./scriptHelper');

// const { pickPlanet } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper")

window.addEventListener("load", function() {

    let listedPlanets
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   
    let listedPlanetsResponse = myFetch()
    listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
    }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets)
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })
   
});

window.addEventListener("submit", function(e) { // What is e for/if it's just submission event do I use that as the trigger for form Submission
   e.preventDefault()
   formSubmission(document, '', document.getElementById('pilotName'), document.getElementById('copilotName'), document.getElementById('fuelLevel'), document.getElementById('cargoMass'))
})
