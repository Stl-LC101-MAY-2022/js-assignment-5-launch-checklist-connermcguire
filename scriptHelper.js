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
    console.log(typeof(testInput))
    console.log(testInput)
    if(typeof(testInput) == 'string') {
        return "Not a Number"
    } else if(typeof(testInput) == 'number') {
        return "Is a Number"
    } else {
        return "Empty"
    }
}

// validateInput(pilotName) !== "Not a Number" || validateInput(copilotName) !== "Not a Number" || validateInput(fuel) !== "Is a Number" || fuel < 10000 || validateInput(cargo) !== "Is a Number" || cargo > 10000

// function formSubmission(document, list, pilotName, copilotName, fuel, cargo,) {
//     let errorCounter = 0
//     if(validateInput(pilotName) !== "Not a Number") {
//         document.getElementById('pilotStatus').textContent = `"${pilotName}" is an invalid name.`
//         document.getElementsByName('pilotName').style.borderColor = 'red'
//         errorCounter ++
//     } else if(validateInput(copilotName) !== "Not a Number") {
//         document.getElementById('copilotStatus').textContent = `"${copilotName}" is an invalid name.`
//         document.getElementsByName("copilotName").style.borderColor = "red"
//         errorCounter ++
//     } else if(validateInput(fuel) !== "Is a Number") {
//         document.getElementById('fuel').textContent = `"${fuel}" should be a number.`
//         document.getElementsByName("fuel").style.borderColor = "red"
//         errorCounter ++
//     } else if(validateInput(fuel) === "Not a Number") {
//         if(fuel < 10000) {
//             document.getElementById('fuel').textContent = `"${fuel}" is not enough fuel for the journey!`
//             document.getElementsByName("fuel").style.borderColor = "red"
//             errorCounter ++
//     } else if(validateInput(cargo) !== "Is a Number") {
//         document.getElementById('pilotStatus').textContent = `"${cargo}" should be a number.`
//         document.getElementsByName("cargo").style.borderColor = "red"
//         errorCounter ++
//     } else if(validateInput(cargo) === "Is a Number") {
//         if(cargo > 10000) {
//             document.getElementById('fuel').textContent = `"${cargo}" is too much mass for the shuttle to take off!`
//             document.getElementsByName("cargo").style.borderColor = "red"
//             errorCounter ++
//     } else if(errorCounter < 0) {
//         let hiddenDiv = document.getElementById('faultyItems')
//         hiddenDiv.style.visibility='visible'
//         let status = document.getElementById('launchStatus')
//         status.textContent = 'Shuttle is not ready for launch.'
//         status.style.borderColor = 'red'
//     }
// }

// function formSubmission(document, list, pilotName, copilotName, fuel, cargo) { // Fixed? / What is list for?

//     if(validateInput(pilotName) !== "Not a Number" || validateInput(copilotName) !== "Not a Number" || validateInput(fuel) !== "Is a Number" || fuel < 10000 || validateInput(cargo) !== "Is a Number" || cargo > 10000) {
//         let hiddenDiv = document.getElementById('faultyItems')
//         hiddenDiv.style.visibility='visible'
//         let status = document.getElementById('launchStatus')
//         status.textContent = 'Shuttle is not ready for launch.'
//         status.style.borderColor = 'red'

//         if(validateInput(pilotName) !== "Not a Number") {
//             let updatedLi = document.getElementById('pilotStatus')
//             updatedLi.textContent = `"${pilotName}" is an invalid name.`
//             document.getElementsByName("pilotName").style.borderColor = "red"
//             let status = document.getElementById('launchStatus')
//             status.textContent = 'Shuttle is not ready for launch.'
//             status.style.borderColor = 'red'
//         }

//         if(validateInput(copilotName) !== "Not a Number") {
//             let updatedLi = document.getElementById('copilotStatus')
//             updatedLi.textContent = `"${copilotName}" is an invalid name.`
//             document.getElementsByName("copilotName").style.borderColor = "red"
//             let status = document.getElementById('launchStatus')
//             status.textContent = 'Shuttle is not ready for launch.'
//             status.style.borderColor = 'red'
//         }

//         if(validateInput(fuel) !== "Is a Number") {
//             let updatedLi = document.getElementById('fuel')
//             updatedLi.textContent = `"${fuel}" should be a number.`
//             document.getElementsByName("fuel").style.borderColor = "red"
//             let status = document.getElementById('launchStatus')
//             status.textContent = 'Shuttle is not ready for launch.'
//             status.style.borderColor = 'red'
//         }

//         if(validateInput(fuel) === "Not a Number") {
//             if(fuel < 10000) {
//             let updatedLi = document.getElementById('fuel')
//             updatedLi.textContent = `"${fuel}" is not enough fuel for the journey!`
//             document.getElementsByName("fuel").style.borderColor = "red"
//             let status = document.getElementById('launchStatus')
//             status.textContent = 'Shuttle is not ready for launch.'
//             status.style.borderColor = 'red'
//             }
//         }

//         if(validateInput(cargo) !== "Is a Number") {
//             let updatedLi = document.getElementById('pilotStatus')
//             updatedLi.textContent = `"${cargo}" should be a number.`
//             document.getElementsByName("cargo").style.borderColor = "red"
//             let status = document.getElementById('launchStatus')
//             status.textContent = 'Shuttle is not ready for launch.'
//             status.style.borderColor = 'red'
//         }

//         if(validateInput(cargo) === "Is a Number") {
//             if(cargo > 10000) {
//             let updatedLi = document.getElementById('fuel')
//             updatedLi.textContent = `"${cargo}" is too much mass for the shuttle to take off!`
//             document.getElementsByName("cargo").style.borderColor = "red"
//             let status = document.getElementById('launchStatus')
//             status.textContent = 'Shuttle is not ready for launch.'
//             status.style.borderColor = 'red'
//             }
//         }
        
//     } else if (validateInput(pilotName) === "Not a Number" && validateInput(copilotName) === "Not a Number" && validateInput(fuel) === "Is a Number" && fuel >= 10000 && validateInput(cargo) === "Is a Number" && cargo <= 10000) {
//         let status = document.getElementById('launchStatus')
//         status.textContent = 'Shuttle is ready for launch.'
//         status.style.borderColor = 'green'
//         let pilotLi = document.getElementById('pilotStatus')
//         pilotLi.textContent = `"Pilot ${pilotName}" Ready.`
//         let copilotLi = document.getElementById('copilotStatus')
//         copilotLi.textContent = `"Pilot ${copilotName}" Ready.`

//     }
// }

// function formSubmission(document, list, pilotName, copilotName, fuel, cargo) { // Fixed? || What is list for?

//     if(validateInput(pilotName) !== "Not a Number" || validateInput(copilotName) !== "Not a Number" || validateInput(fuel) !== "Is a Number" || fuel < 10000 || validateInput(cargo) !== "Is a Number" || cargo > 10000) {
//         let hiddenDiv = document.getElementById('faultyItems')
//         hiddenDiv.style.visibility='visible'
//         let status = document.getElementById('launchStatus')
//         status.textContent = 'Shuttle is not ready for launch.'
//         status.style.borderColor = 'red'

//         if(validateInput(pilotName) !== "Not a Number") {
//             let updatedLi = document.getElementById('pilotStatus')
//             updatedLi.textContent = `"${pilotName}" is an invalid name.`
//             document.getElementById("pilotName").style.borderColor = "red"
//             let status = document.getElementById('launchStatus')
//             status.textContent = 'Shuttle is not ready for launch.'
//             status.style.borderColor = 'red'
//         }

//         if(validateInput(copilotName) !== "Not a Number") {
//             let updatedLi = document.getElementById('copilotStatus')
//             updatedLi.textContent = `"${copilotName}" is an invalid name.`
//             document.getElementById("copilotName").style.borderColor = "red"
//             let status = document.getElementById('launchStatus')
//             status.textContent = 'Shuttle is not ready for launch.'
//             status.style.borderColor = 'red'
//         }

//         if(validateInput(fuel) !== "Is a Number") {
//             let updatedLi = document.getElementById('fuel')
//             updatedLi.textContent = `"${fuel}" should be a number.`
//             document.getElementById("fuel").style.borderColor = "red"
//             let status = document.getElementById('launchStatus')
//             status.textContent = 'Shuttle is not ready for launch.'
//             status.style.borderColor = 'red'
//         }

//         if(validateInput(fuel) === "Not a Number") {
//             if(fuel < 10000) {
//             let updatedLi = document.getElementById('fuel')
//             updatedLi.textContent = `"${fuel}" is not enough fuel for the journey!`
//             document.getElementById("fuel").style.borderColor = "red"
//             let status = document.getElementById('launchStatus')
//             status.textContent = 'Shuttle is not ready for launch.'
//             status.style.borderColor = 'red'
//             }
//         }

//         if(validateInput(cargo) !== "Is a Number") {
//             let updatedLi = document.getElementById('pilotStatus')
//             updatedLi.textContent = `"${cargo}" should be a number.`
//             document.getElementById("cargo").style.borderColor = "red"
//             let status = document.getElementById('launchStatus')
//             status.textContent = 'Shuttle is not ready for launch.'
//             status.style.borderColor = 'red'
//         }

//         if(validateInput(cargo) === "Is a Number") {
//             if(cargo > 10000) {
//             let updatedLi = document.getElementById('fuel')
//             updatedLi.textContent = `"${cargo}" is too much mass for the shuttle to take off!`
//             document.getElementById("cargo").style.borderColor = "red"
//             let status = document.getElementById('launchStatus')
//             status.textContent = 'Shuttle is not ready for launch.'
//             status.style.borderColor = 'red'
//             }
//         }
        
//     } else if (validateInput(pilotName) === "Not a Number" && validateInput(copilotName) === "Not a Number" && validateInput(fuel) === "Is a Number" && fuel >= 10000 && validateInput(cargo) === "Is a Number" && cargo <= 10000) {
//         let status = document.getElementById('launchStatus')
//         status.textContent = 'Shuttle is ready for launch.'
//         status.style.borderColor = 'green'
//         let pilotLi = document.getElementById('pilotStatus')
//         pilotLi.textContent = `"Pilot ${pilotName}" Ready.`
//         let copilotLi = document.getElementById('copilotStatus')
//         copilotLi.textContent = `"Pilot ${copilotName}" Ready.`

//     }
// }

function formSubmission(document, list, pilotName, copilotName, fuel, cargo) { // Fixed? || What is list for?

    if(validateInput(pilotName) !== "Not a Number" || validateInput(copilotName) !== "Not a Number" || validateInput(fuel) !== "Is a Number" || fuel < 10000 || validateInput(cargo) !== "Is a Number" || cargo > 10000) {
        let hiddenDiv = document.getElementById('faultyItems')
        hiddenDiv.style.visibility='visible'
        let status = document.getElementById('launchStatus')
        status.textContent = 'Shuttle is not ready for launch.'
        status.style.borderColor = 'red'

        if(validateInput(pilotName) != "Not a Number") {
            let updatedLi = document.getElementById('pilotStatus')
            updatedLi.textContent = `"${pilotName}" is an invalid name.`
            document.querySelector('input[name = "pilotName"]').style.borderColor = "red"
            let status = document.getElementById('launchStatus')
            status.textContent = 'Shuttle is not ready for launch.'
            status.style.borderColor = 'red'
        }

        if(validateInput(copilotName) !== "Not a Number") {
            let updatedLi = document.getElementById('copilotStatus')
            updatedLi.textContent = `"${copilotName}" is an invalid name.`
            document.querySelector('input[name = "copilotName"]').style.borderColor = "red"
            let status = document.getElementById('launchStatus')
            status.textContent = 'Shuttle is not ready for launch.'
            status.style.borderColor = 'red'
        }

        if(validateInput(fuel) !== "Is a Number") {
            let updatedLi = document.getElementById('fuelStatus')
            updatedLi.textContent = `"${fuel}" should be a number.`
            document.querySelector('input[name = "fuelLevel"]').style.borderColor = "red"
            let status = document.getElementById('launchStatus')
            status.textContent = 'Shuttle is not ready for launch.'
            status.style.borderColor = 'red'
        }

        if(validateInput(fuel) === "Is a Number") {
            if(fuel < 10000) {
            let updatedLi = document.getElementById('fuelStatus')
            updatedLi.textContent = `"${fuel}" is not enough fuel for the journey!`
            document.querySelector('input[name = "fuelLevel"]').style.borderColor = "red"
            let status = document.getElementById('launchStatus')
            status.textContent = 'Shuttle is not ready for launch.'
            status.style.borderColor = 'red'
            }
        }

        if(validateInput(cargo) !== "Is a Number") {
            let updatedLi = document.getElementById('cargoStatus')
            updatedLi.textContent = `"${cargo}" should be a number.`
            document.querySelector('input[name = "cargoMass"]').style.borderColor = "red"
            let status = document.getElementById('launchStatus')
            status.textContent = 'Shuttle is not ready for launch.'
            status.style.borderColor = 'red'
        }

        if(validateInput(cargo) === "Is a Number") {
            if(cargo > 10000) {
            let updatedLi = document.getElementById('cargoStatus')
            updatedLi.textContent = `"${cargo}" is too much mass for the shuttle to take off!`
            document.querySelector('input[name = "cargoMass"]').style.borderColor = "red"
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



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json'
        ).then( function(response) {
            return response.json()
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
