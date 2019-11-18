




// on load
window.addEventListener("load", function(){
   // fetch json and update HTML
      this.fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response){
         response.json().then( function(json){
            const missionTarget = document.getElementById("missionTarget");
            // generate random planet 
            let random = json[(Math.floor(Math.random()*7))];
            missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${random.name}</li>
            <li>Diameter: ${random.diameter}</li>
            <li>Star: ${random.star}</li>
            <li>Distance from Earth: ${random.distance}</li>
            <li>Number of Moons: ${random.moons}</li>
         </ol>
         <img src="${random.image}">
         `;
      });
   });
   let formSubmit = document.getElementById("formSubmit");
   // on submit clicked
   formSubmit.addEventListener("click", function(event){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      // ensure all fields entered
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("all fields required");
         } 
      // ensure pilot name and copilot name are strings
         if (isNaN(pilotName.value) === false){
            alert ("please enter a valid pilot name");
         } else { // update pilot status to input name
            pilotStatus.innerHTML = `${pilotName.value} is ready for launch`;
         }
         if (isNaN(copilotName.value) === false){
            alert ("please enter a valid co-pilot name");
         } else { // update copilot status to input name
            copilotStatus.innerHTML = `${copilotName.value} is ready for launch`;
         }
      // ensure cargo mass and fuel level are numbers
         if (isNaN(fuelLevel.value)){
            alert ("please enter a valid number for fuel level");
         } else if (fuelLevel.value < 10000){ // if fuel too low update status check
            fuelStatus.innerHTML = `Fuel level too low to launch`;
         }
         if (isNaN(cargoMass.value)){
            alert("please enter a valid number for cargo mass")
         } else if (cargoMass.value > 10000){ // if cargo too high update status check
            cargoStatus.innerHTML = `Cargo Mass too high to launch`;  
         }
         // update launch status
         if (cargoMass.value > 10000 || fuelLevel.value < 10000){
            faultyItems.style.visibility = "visible"; 
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         } else { 
            launchStatus.innerHTML = "&hearts; Shuttle is ready for launch &hearts;";
            launchStatus.style.color = "green";
         }
         // stop form submission
         event.preventDefault();
      }); // end click
   }); // end load

