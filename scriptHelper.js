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
    // Create HTML Tags
    let missionDestination = document.createElement('h2')
    let oList = document.createElement('ol')
    let starName = document.createElement('li')
    let starDiameter = document.createElement('li')
    let thisStar = document.createElement('li') 
    let starDistance = document.createElement('li')
    let numOfMoons = document.createElement('li')
    let starImg = document.createElement('img')    
    // Add Attributes
    starImg.setAttribute('src', `${imageUrl}`)
    // Add Text
    missionDestination.innerText = 'Mission Destination'
    starName.innerText = `Name: ${name}`
    starDiameter.innerText = `Diameter: ${diameter}`
    thisStar.innerText = `Star: ${star}`
    starDistance.innerText = `Distance from Earth ${distance}`
    numOfMoons.innerText = `Number of Moons: ${moons}`
    // Append Children
    oList.append(starName, starDiameter, thisStar, starDistance, numOfMoons)
    document.getElementById('missionTarget').append(missionDestination, oList, starImg)
}

// const loadBodyHandler = () => {
//
//     fetch('https://handlers.education.launchcode.org/static/astronauts.json'
//     ).then(res => {
//         return res.json()
//     }).then(data => {
//         let container = document.getElementById('container')
//         for(let i = 0; i < data.length; i++) {
//             // Parse JSON Data
//             let name = data[i].firstName + ' ' + data[i].lastName
//             let spaceTime = data[i].hoursInSpace
//             let status = data[i].active
//             let skillList = data[i].skills
//             let imgUrl = data[i].picture
//             // Create HTML Tags
//             let astronautDiv = document.createElement('div')
//             let bioDiv = document.createElement('div')
//             let nameHeader = document.createElement('h2')
//             let uList = document.createElement('ol')
//             let hours = document.createEle5ment('li')
//             let active = document.createElement('li') 
//             let skills = document.createElement('li')
//             let img = document.createElement('img')
//             // Add Attributes
//             astronautDiv.classList.add('astronaut')
//             bioDiv.classList.add('bio')
//             img.classList.add('avatar')
//             img.setAttribute('src', `${imgUrl}`)
//             // Add Text
//             nameHeader.innerText = `${name}`
//             hours.innerText = `${spaceTime}`
//             active.innerText = `${status}`
//             skills.innerText = `${skillList.join(', ')}`

//             uList.append(hours, active, skills)
//             bioDiv.append(nameHeader, uList)
//             astronautDiv.append(bioDiv, img)

//             container.appendChild(astronautDiv)
//         }

//     })
//     .catch(error = console.log('Error'))
// }

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

    if(validateInput(pilotName) !== "Not a Number" || validateInput(copilotName) !== "Not a Number" || validateInput(fuel) !== "Is a Number" || fuel < 10000 || validateInput(cargo) !== "Is a Number" || cargo > 10000) {
        let hiddenDiv = document.getElementById('faultyItems')
        hiddenDiv.style.visibility='visible'
        let status = document.getElementById('launchStatus')
        status.textContent = 'Shuttle is not ready for launch.'
        status.style.borderColor = 'red'

        if(validateInput(pilotName) !== "Not a Number") {
            let updatedLi = document.getElementById('pilotStatus')
            updatedLi.textContent = `"${pilotName}" is an invalid name.`
            document.getElementById("pilotName").style.borderColor = "red"
            let status = document.getElementById('launchStatus')
            status.textContent = 'Shuttle is not ready for launch.'
            status.style.borderColor = 'red'
        }

        if(validateInput(copilotName) !== "Not a Number") {
            let updatedLi = document.getElementById('copilotStatus')
            updatedLi.textContent = `"${copilotName}" is an invalid name.`
            document.getElementById("copilotName").style.borderColor = "red"
            let status = document.getElementById('launchStatus')
            status.textContent = 'Shuttle is not ready for launch.'
            status.style.borderColor = 'red'
        }

        if(validateInput(fuel) !== "Is a Number") {
            let updatedLi = document.getElementById('fuel')
            updatedLi.textContent = `"${fuel}" should be a number.`
            document.getElementById("fuel").style.borderColor = "red"
            let status = document.getElementById('launchStatus')
            status.textContent = 'Shuttle is not ready for launch.'
            status.style.borderColor = 'red'
        }

        if(validateInput(fuel) === "Not a Number") {
            if(fuel < 10000) {
            let updatedLi = document.getElementById('fuel')
            updatedLi.textContent = `"${fuel}" is not enough fuel for the journey!`
            document.getElementById("fuel").style.borderColor = "red"
            let status = document.getElementById('launchStatus')
            status.textContent = 'Shuttle is not ready for launch.'
            status.style.borderColor = 'red'
            }
        }

        if(validateInput(cargo) !== "Is a Number") {
            let updatedLi = document.getElementById('pilotStatus')
            updatedLi.textContent = `"${cargo}" should be a number.`
            document.getElementById("cargo").style.borderColor = "red"
            let status = document.getElementById('launchStatus')
            status.textContent = 'Shuttle is not ready for launch.'
            status.style.borderColor = 'red'
        }

        if(validateInput(cargo) === "Is a Number") {
            if(cargo > 10000) {
            let updatedLi = document.getElementById('fuel')
            updatedLi.textContent = `"${cargo}" is too much mass for the shuttle to take off!`
            document.getElementById("cargo").style.borderColor = "red"
            let status = document.getElementById('launchStatus')
            status.textContent = 'Shuttle is not ready for launch.'
            status.style.borderColor = 'red'
            }
        }
        
    } else if (validateInput(pilotName) === "Not a Number" && validateInput(copilotName) === "Not a Number" && validateInput(fuel) === "Is a Number" && fuel >= 10000 && validateInput(cargo) === "Is a Number" && cargo <= 10000) {
        let status = document.getElementById('launchStatus')
        status.textContent = 'Shuttle is ready for launch.'
        status.style.borderColor = 'green'
        let pilotLi = document.getElementById('pilotStatus')
        pilotLi.textContent = `"Pilot ${pilotName}" Ready.`
        let copilotLi = document.getElementById('copilotStatus')
        copilotLi.textContent = `"Pilot ${copilotName}" Ready.`

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

// fetch('https://handlers.education.launchcode.org/static/astronauts.json'
//     ).then(res => {
//         return res.json()
//     }).then(data => {
//         let container = document.getElementById('container')

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json'
        ).then( function(response) {
            return response.json()
        }).then(data =>{
            let missionTarget = document.getElementById('missionTarget')
        })

    return planetsReturned;
}

function pickPlanet(planets) {
    let val = Math.floor(Math.random() * planets.length)
    return planets[val]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
