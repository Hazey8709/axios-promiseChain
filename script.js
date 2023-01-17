//!          JavaScript   Page

//?    https://swapi.dev/api/people/1
//?    https://swapi.dev/api/planets


const getLukeData = async () => {
    try {
        const lukeSky = await axios.get(" https://swapi.dev/api/people/1");
        const lukeHomeWorld = await axios.get(lukeSky.data.homeworld);
        const planets = await axios.get("https://swapi.dev/api/planets");

        displayData(lukeSky, lukeHomeWorld, planets );
        //*displayDataHome(lukeHomeWorld);
        //*displayDataPlanets(planets);
    } catch (error) {
        console.log(error);
    }
};

getLukeData();

function displayData(lukeSky, lukeHomeWorld, planets ) {
    //*console.log(lukeSky);
    let lukeSkyList = document.getElementById("returnDataLuke");
    let lukeSkyCont = document.createElement("div");

    let nameEl = document.createElement("h1");
    nameEl.innerText = lukeSky.data.name;
    lukeSkyCont.appendChild(nameEl);

    let massEl = document.createElement("p");
    massEl.innerText = "Mass:" + " " + lukeSky.data.mass;
    lukeSkyCont.appendChild(massEl);

    let heightEl = document.createElement("p");
    heightEl.innerText = "Height:" + " " + lukeSky.data.height;
    lukeSkyCont.appendChild(heightEl);
    lukeSkyList.appendChild(lukeSkyCont);


    //*console.log(lukeHomeWorld);
    let homeWorldList = document.getElementById("returnDataHome");
    let homeWorldCont = document.createElement("div");

    let homeWorldEl = document.createElement("h4");
    homeWorldEl.innerText = "Home World Name:" + " " + lukeHomeWorld.data.name;
    homeWorldCont.appendChild(homeWorldEl);

    let terrainEl = document.createElement("p");
    terrainEl.innerText = "Terrain:" + " " + lukeHomeWorld.data.terrain;
    homeWorldCont.appendChild(terrainEl);
    homeWorldList.appendChild(homeWorldCont);


    //*console.log(planets);
    let planetsList = document.getElementById("returnDataPlanets");
    for (let i = 0; i < planets.data.results.length; i++) {
        let listCont = document.createElement("div");

        let nameEl = document.createElement("h3");
        nameEl.innerText = "Planets Name:" + " " + planets.data.results[i].name;
        listCont.appendChild(nameEl);

        let diameterEl = document.createElement("p");
        diameterEl.innerText =
            "Diameter:" + " " + planets.data.results[i].diameter;
        listCont.appendChild(diameterEl);
        planetsList.appendChild(listCont);
    }
}

// //!  DisplayData  (lukeSky)
// function displayData(lukeSky) {
//     console.log(lukeSky);

//     let lukeSkyList = document.getElementById("returnDataLuke");
//     let lukeSkyCont = document.createElement("div");

//     let nameEl = document.createElement("h1");
//     nameEl.innerText = lukeSky.data.name;
//     lukeSkyCont.appendChild(nameEl);

//     let massEl = document.createElement("p");
//     massEl.innerText = "Mass:" + " " + lukeSky.data.mass;
//     lukeSkyCont.appendChild(massEl);

//     let heightEl = document.createElement("p");
//     heightEl.innerText = "Height:" + " " + lukeSky.data.height;
//     lukeSkyCont.appendChild(heightEl);
//     lukeSkyList.appendChild(lukeSkyCont);
// }

// //!       Function DisplayDataHome   (lukeHomeWorld)
// function displayDataHome(lukeHomeWorld) {
//     //console.log(lukeHomeWorld);
//     let homeWorldList = document.getElementById("returnDataHome");
//     let homeWorldCont = document.createElement("div");

//     let homeWorldEl = document.createElement("h4");
//     homeWorldEl.innerText = "Home World Name:" + " " + lukeHomeWorld.data.name;
//     homeWorldCont.appendChild(homeWorldEl);

//     let terrainEl = document.createElement("p");
//     terrainEl.innerText = "Terrain:" + " " + lukeHomeWorld.data.terrain;
//     homeWorldCont.appendChild(terrainEl);
//     homeWorldList.appendChild(homeWorldCont);
// }

// //!     Function DisplayDataPlanets   (planets)
// function displayDataPlanets(planets) {
//     console.log(planets);
//     let planetsList = document.getElementById("returnDataPlanets");
//     for (let i = 0; i < planets.data.results.length; i++) {
//         let listCont = document.createElement("div");

//         let nameEl = document.createElement("h3");
//         nameEl.innerText = "Planets Name:" + " " + planets.data.results[i].name;
//         listCont.appendChild(nameEl);

//         let diameterEl = document.createElement("p");
//         diameterEl.innerText =
//             "Diameter:" + " " + planets.data.results[i].diameter;
//         listCont.appendChild(diameterEl);
//         planetsList.appendChild(listCont);
//     }
// }
