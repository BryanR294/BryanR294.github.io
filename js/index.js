class Star{
    constructor(name, DOM, description){
        this.name = name;
        this.DOM = DOM;
        this.description = description;
    }
}

const Nebula = new Star("Nebula", document.getElementById("nebula"), "The Nebula is a star in the making, its basic elements will eventually fuse together to create a star.");
const Protostar = new Star("Protostar", document.getElementById("protostar"), "Gravity begins to condense all the elements together in this stage.");
const OrangeStar = new Star("Star", document.getElementById("orange-star"),"Gravity condensed the elements to create this star. Due to this star's mass, this star will be bigger than other stars and a little cooler (hence its oranger color).");
const Supergiant = new Star("Supergiant", document.getElementById("supergiant"),"Helium and Hydrogren began fusing into heavier elements such as iron, this process causes the star's surface to expand as well as turning red.");
const Supernova = new Star("Supernova", document.getElementById("supernova"),"When a star reaches the end of its life cycle, it's core will collapse and the star explodes. This is what we call a supernova.");
const Blackhole = new Star("Blackhole", document.getElementById("blackhole"),"Due to its immense mass, we are left with a blackhole. The densitiy causes the blackhole's gravity doesn't allow anything to escape it, including light.");
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

function displayInfo(){
    let containerEl = document.getElementById("info-container");
    let buttonEl = document.getElementById("info-btn");
    let textEl = document.getElementById("info-text");
    if(containerEl.style.height == "10%"){
        textEl.innerHTML = SUPER_MASS_STARS[imageIndex].description;
        buttonEl.innerHTML = "v";
        buttonEl.style.display = "block";
        buttonEl.style.top = "5%";
        buttonEl.style.height = "10%";
        containerEl.style.height = "60%";
        containerEl.style.backgroundColor = "black";
        textEl.style.display = "flex";
    }
    else{
        buttonEl.innerHTML = "^";
        containerEl.style.height = "10%";
        containerEl.style.backgroundColor = "rgba(0,0,0,.2)";
        textEl.style.display = "none";
    }
}
