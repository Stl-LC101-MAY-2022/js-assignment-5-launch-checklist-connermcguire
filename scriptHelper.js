// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(typeof(testInput) == String) {
        return "Not a Number"
    } else if(typeof(testInput) == Number) {
        return "Is a Number"
    } else {
        return "Empty"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotName = document.getElementById('pilotName')
    let copilotName = document.getElementById('copilotName')
    let fuel = document.getElementById('fuelLevel')
    let cargo = document.getElementById('cargoMass')
    if(validateInput(pilotName) !== "Not a Number" || validateInput(copilotName) !== "Not a Number" || validateInput(fuel) !== "Not a Number" || fuel < 10000 || validateInput(cargo) !== "Not a Number" || cargo > 10000) {
        // Use magic to set faulty items div to visible
        if(validateInput(pilotName) !== "Not a Number") {
            let updatedLi = document.getElementById('pilotStatus')
            updatedLi.textContent = `"${pilotName}" is an invalid name.`
            }
        if(validateInput(copilotName) !== "Not a Number") {
            let updatedLi = document.getElementById('copilotStatus')
            updatedLi.textContent = `"${copilotName}" is an invalid name.`
        }
        if(validateInput(fuel) !== "Is a Number") {
            let updatedLi = document.getElementById('fuel')
            updatedLi.textContent = `"${fuel}" should be a number.`
        }
        if(validateInput(fuel) === "Not a Number") {
            if(fuel < 10000) {
            let updatedLi = document.getElementById('fuel')
            updatedLi.textContent = `"${fuel}" is not enough fuel for the journey!`
            }
        }
        if(validateInput(cargo) !== "Is a Number") {
            let updatedLi = document.getElementById('pilotStatus')
            updatedLi.textContent = `"${cargo}" should be a number.`
        }
        if(validateInput(cargo) === "Is a Number") {
            if(cargo > 10000) {
            let updatedLi = document.getElementById('fuel')
            updatedLi.textContent = `"${cargo}" is too much mass for the shuttle to take off!`
            }
        }
        
    }
}

// function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//     let pilotName = document.getElementById('pilotName')
//     let copilotName = document.getElementById('copilotName')
//     let fuel = document.getElementById('fuelLevel')
//     let cargo = document.getElementById('cargoMass')
//     if(validateInput(pilotName) === "Not a Number") {
//         let updatedLi = document.getElementById('pilotStatus')
//         updatedLi.textContent = `Pilot ${pilotName} Ready`
//     }
//     if(validateInput(copilotName) === "Not a Number") {
//         let updatedLi = document.getElementById('copilotStatus')
//         updatedLi.textContent = `Co-Pilot ${copilotName} Ready`
//     }
//     if(validateInput(fuel) === "Is a Number") {
//         let updatedLi = document.getElementById('fuel')
//         if(fuel >= 10000)
//         updatedLi.textContent = `Pilot ${fuel} Ready`
//     }
//     if(validateInput(pilotName) === "Not a Number") {
//         let updatedLi = document.getElementById('pilotStatus')
//         updatedLi.textContent = `Pilot ${pilotName} Ready`
//     }
// }
// function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//     let pilotName = document.getElementById('pilotName')
//       if(typeof(pilotName) != '') {
//           document.getElementById("pilotName").style.borderColor = "red";
//       }
//       let copilotName = document.getElementById('copilotName')
//       if(typeof(copilotName) != '') {
//           document.getElementById("copilotName").style.borderColor = "red";
//       }
//       let fuel = document.getElementById('fuelLevel')
//       if(typeof(fuelLevel) != Number) {
//           document.getElementById("fuelLevel").style.borderColor = "red";
//       }
//       let cargo = document.getElementById('cargoMass')
//       if(typeof(cargoMass) != Number) {
//           document.getElementById("cargoMass").style.borderColor = "red";
//       } 
//   }

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
