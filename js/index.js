class Star{
    constructor(name, DOM){
        this.name = name;
        this.DOM = DOM;
    }
}

const Nebula = new Star("Nebula", document.getElementById("nebula"));
const Protostar = new Star("Protostar", document.getElementById("protostar"));
const OrangeStar = new Star("Star", document.getElementById("orange-star"));
const Supergiant = new Star("Supergiant", document.getElementById("supergiant"));
const Supernova = new Star("Supernova", document.getElementById("supernova"));
const Blackhole = new Star("Blackhole", document.getElementById("blackhole"));
// let starEl = document.getElementById("yellow-star");
// let redGiantEl = document.getElementById("red-giant");
// let neutronStarEl = document.getElementById("neutron-star");

let nameEl = document.getElementById("name-text");
let stageEl = document.getElementById("stage-text");
let ageEl = document.getElementById("age-text");

const SUPER_MASS_STARS = [Nebula,Protostar,OrangeStar,Supergiant,Supernova,Blackhole];
let imageIndex = 0;
let currSelection = "super-mass";

updateInformation(Nebula);

function nextStar(){
    if(currSelection === "super-mass"){
        let currStar = SUPER_MASS_STARS[imageIndex];
        let nextStar = SUPER_MASS_STARS[imageIndex + 1];
        currStar.DOM.style.display = "none";
        nextStar.DOM.style.display = "block";
        imageIndex++;
        updateInformation(nextStar);
    }
    updateButtons();
}

function lastStar(){
    if(currSelection === "super-mass"){
        let currStar = SUPER_MASS_STARS[imageIndex];
        let nextStar = SUPER_MASS_STARS[imageIndex - 1];
        currStar.DOM.style.display = "none";
        nextStar.DOM.style.display = "block";
        imageIndex--;
        updateInformation(nextStar);
    }
    updateButtons();
}

function updateButtons(){
    if(imageIndex === 0){
        document.getElementById("left").style.display = "none";
    }
    else{
        document.getElementById("left").style.display = "block";
    }

    if(imageIndex === 5){
        document.getElementById("right").style.display = "none";
    }
    else{
        document.getElementById("right").style.display = "block";
    }
}

function updateInformation(Star){
    nameEl.textContent = Star.name;
    counter = imageIndex + 1;
    stageEl.textContent = "Stage " + counter;
}