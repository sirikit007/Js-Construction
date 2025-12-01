let prev = document.getElementById('btnPrev'); 
let next = document.getElementById('btnNext');

let dots = document.querySelector("#dots");
let digitalCounter = document.getElementById('digitalCounter');


let pStatus = document.getElementById("status");

let watchLinkBefore = document.getElementById("watchLinkBefore");
let watchLinkDriveway = document.getElementById("watchLinkDriveway");
let watchLinkCelling = document.getElementById("watchLinkCelling");
let watchLinkSecuringWalls = document.getElementById("watchLinkSecuringWalls");
let watchLinkInRoofAndWalls = document.getElementById("watchLinkInRoofAndWalls");
let watchLinkLeakingPipe = document.getElementById("watchLinkLeakingPipe");
let watchLinkWallDrying = document.getElementById("watchLinkWallDrying");
let watchLinkDefectsInFacade = document.getElementById("watchLinkDefectsInFacade");
let watchLinkBituminousMass = document.getElementById("watchLinkBituminousMass");
let watchLinkHardeningGround = document.getElementById("watchLinkHardeningGround");
let watchLinkAfter = document.getElementById("watchLinkAfter");

let arrPrev = document.getElementById('arrowPrev');
let arrNext = document.getElementById('arrowNext');

let fullImgBox = document.getElementById("fullImgBox"); // id всего тага со слайдами
let fullImg = document.getElementById("fullImg"); //id каждого слайдов (width: 100%)

let fullSlides = document.getElementsByClassName("fullSlider"); //id каждого слайда + его статус
let fullIndex = 0;
var statusFull = document.getElementById('statusFull');

console.log(statusFull);

let slidesData = {    
    before: [
        'photoWholeBuildRenovation/before/before01.jpg',
        'photoWholeBuildRenovation/before/before02.jpg',
        'photoWholeBuildRenovation/before/before03.jpg',
        'photoWholeBuildRenovation/before/before04.jpg',
        'photoWholeBuildRenovation/before/before05.jpg',
        'photoWholeBuildRenovation/before/before06.jpg',
        'photoWholeBuildRenovation/before/before07.jpg',
        'photoWholeBuildRenovation/before/before08.jpg',
        'photoWholeBuildRenovation/before/before09.jpg'        
    ],
    inProgressDriveway: [
        "photoWholeBuildRenovation/inProgress/driveway/driveway01.jpg",
        "photoWholeBuildRenovation/inProgress/driveway/driveway02.jpg"
    ],
    inProgressCelling: [
        "photoWholeBuildRenovation/inProgress/cellingRenovation/cellingRenovation01.jpg",  
        "photoWholeBuildRenovation/inProgress/cellingRenovation/cellingRenovation02.jpg"        
    ],
    inProgressSecuringWalls: [
        "photoWholeBuildRenovation/inProgress/securingLoad-bearingWallsFromTheInside/securingLoad-bearingWallsFromTheInside01.jpg",
        "photoWholeBuildRenovation/inProgress/securingLoad-bearingWallsFromTheInside/securingLoad-bearingWallsFromTheInside02.jpg"              
    ],
    inProgressRoofAndWalls: [
        "photoWholeBuildRenovation/inProgress/roofAndWalsRenovation/roofAndWalsRenovation01.jpg",                   
        "photoWholeBuildRenovation/inProgress/roofAndWalsRenovation/roofAndWalsRenovation02.jpg",                          
        "photoWholeBuildRenovation/inProgress/roofAndWalsRenovation/roofAndWalsRenovation03.jpg",                   
        "photoWholeBuildRenovation/inProgress/roofAndWalsRenovation/roofAndWalsRenovation04.jpg"                   
    ],
    inProgressLeakingPipe: [
        "photoWholeBuildRenovation/inProgress/leakingSewerPipeRenovation/leakingSewerPipeRenovation01.jpg",          
        "photoWholeBuildRenovation/inProgress/leakingSewerPipeRenovation/leakingSewerPipeRenovation02.jpg",          
        "photoWholeBuildRenovation/inProgress/leakingSewerPipeRenovation/leakingSewerPipeRenovation03.jpg",          
        "photoWholeBuildRenovation/inProgress/leakingSewerPipeRenovation/leakingSewerPipeRenovation04.jpg"         
    ],
    inProgressWallDrying: [
        "photoWholeBuildRenovation/inProgress/wallDrying/wallDrying01.jpg",
        "photoWholeBuildRenovation/inProgress/wallDrying/wallDrying02.jpg",
        "photoWholeBuildRenovation/inProgress/wallDrying/wallDrying03.jpg",
        "photoWholeBuildRenovation/inProgress/wallDrying/wallDrying04.jpg",
        "photoWholeBuildRenovation/inProgress/wallDrying/wallDrying05.jpg",
        "photoWholeBuildRenovation/inProgress/wallDrying/wallDrying06.jpg"
    ],
    inProgressDefectsInFacade: [
        "photoWholeBuildRenovation/inProgress/fillingTheDefectsInTheFacade/fillingTheDefectsInTheFacade01.jpg",
        "photoWholeBuildRenovation/inProgress/fillingTheDefectsInTheFacade/fillingTheDefectsInTheFacade02.jpg",
        "photoWholeBuildRenovation/inProgress/fillingTheDefectsInTheFacade/fillingTheDefectsInTheFacade02.jpg",
        "photoWholeBuildRenovation/inProgress/fillingTheDefectsInTheFacade/fillingTheDefectsInTheFacade03.jpg"        
    ],
    inProgressBituminousMass: [
        "photoWholeBuildRenovation/inProgress/applicationOfBituminousMass/applicationOfBituminousMass01.jpg",
        "photoWholeBuildRenovation/inProgress/applicationOfBituminousMass/applicationOfBituminousMass02.jpg"
    ],
    inProgressHardeningGround: [
        "photoWholeBuildRenovation/inProgress/hardeningTheGround/hardeningTheGround01.jpg",
        "photoWholeBuildRenovation/inProgress/hardeningTheGround/hardeningTheGround02.jpg",
        "photoWholeBuildRenovation/inProgress/hardeningTheGround/hardeningTheGround03.jpg",
        "photoWholeBuildRenovation/inProgress/hardeningTheGround/hardeningTheGround04.jpg",
        "photoWholeBuildRenovation/inProgress/hardeningTheGround/hardeningTheGround05.jpg",
        "photoWholeBuildRenovation/inProgress/hardeningTheGround/hardeningTheGround06.jpg",
        "photoWholeBuildRenovation/inProgress/hardeningTheGround/hardeningTheGround07.jpg",
        "photoWholeBuildRenovation/inProgress/hardeningTheGround/hardeningTheGround08.jpg",
        "photoWholeBuildRenovation/inProgress/hardeningTheGround/hardeningTheGround09.jpg",
        "photoWholeBuildRenovation/inProgress/hardeningTheGround/hardeningTheGround10.jpg",
        "photoWholeBuildRenovation/inProgress/hardeningTheGround/hardeningTheGround11.jpg",
        "photoWholeBuildRenovation/inProgress/hardeningTheGround/hardeningTheGround12.jpg"
    ],
    after: [
        "photoWholeBuildRenovation/after/after01.jpg",
        "photoWholeBuildRenovation/after/after02.jpg",
        "photoWholeBuildRenovation/after/after03.jpg",
        "photoWholeBuildRenovation/after/after04.jpg",
        "photoWholeBuildRenovation/after/after05.jpg",
        "photoWholeBuildRenovation/after/after06.jpg",
        "photoWholeBuildRenovation/after/after07.jpg",
        "photoWholeBuildRenovation/after/after08.jpg",
        "photoWholeBuildRenovation/after/after09.jpg",
        "photoWholeBuildRenovation/after/after10.jpg",
        "photoWholeBuildRenovation/after/after11.jpg",
        "photoWholeBuildRenovation/after/after12.jpg",
        "photoWholeBuildRenovation/after/after13.jpg",
        "photoWholeBuildRenovation/after/after14.jpg",
        "photoWholeBuildRenovation/after/after15.jpg",
        "photoWholeBuildRenovation/after/after16.jpg",
        "photoWholeBuildRenovation/after/after17.jpg",
        "photoWholeBuildRenovation/after/after18.jpg",
        "photoWholeBuildRenovation/after/after19.jpg",
        "photoWholeBuildRenovation/after/after20.jpg",
        "photoWholeBuildRenovation/after/after21.jpg",
        "photoWholeBuildRenovation/after/after22.jpg",
        "photoWholeBuildRenovation/after/after23.jpg"
    ]
   
};
let sections = [
    'before',
    'inProgressDriveway',
    'inProgressCelling',
    'inProgressSecuringWalls',
    'inProgressRoofAndWalls',
    'inProgressLeakingPipe',
    'inProgressWallDrying',
    'inProgressDefectsInFacade',
    'inProgressBituminousMass',
    'inProgressHardeningGround',
    'after'   
];
//для надписей под слайдами
let statuses = {
    before: "Before",
    inProgressDriveway: "In Progress: Driveway Renovation",
    inProgressCelling: "In Progress: Ceiling Renovation",
    inProgressSecuringWalls: "In Progress: Securing Load-bearing Walls From The Inside",
    inProgressRoofAndWalls: "In Progress: Roof And Walls Renovation",
    inProgressLeakingPipe: "In Progress: A Leaking Sewer Pipe Renovation",
    inProgressWallDrying: "In Progress: Wall Drying",
    inProgressDefectsInFacade: "In Progress: Filling The Defects In The Facade",
    inProgressBituminousMass: "In Progress: Application Of Bituminous Mass",
    inProgressHardeningGround: "In Progress: Hardening the ground surrounding the foot of the foundation",
    after: "After"
};

let slide = document.getElementById("slide"); 

let section = -1; //номер текущего раздела (before и тд);
let index = 0; // какой сейчас текущий активный слайд


// index - какой сейчас текущий активный слайд
//c - номер section который будет становится активным
//n - номер слайда, который будет становиться активным

function setActiveSlide(c, n) {
     
    console.log(`setActiveSlide(${c}, ${n})`); //будем видеть все вызовы
    let count = slidesData[sections[c]].length; //найти кол-во слайдов в текущей секции     
    
    dots.innerHTML = ""; //очистить все точки
   
    for(i = 0; i < count; i++) { 
        var dateSpan = document.createElement('span');
        
        if(i == n) {
            dateSpan.classList.add('dot');
            dateSpan.classList.add('active');
            
        } else {
            dateSpan.classList.add('dot');
        }
        dateSpan.setAttribute("section", c);
        dateSpan.setAttribute("index", i);
        dateSpan.addEventListener('click', jumpSlide);
        dots.appendChild(dateSpan);
              
    }    
    
    let slideIndex = n + 1;    
    for(i = 0; i < count; i++) {        
        digitalCounter.innerHTML = slideIndex + "/" + count;         
    }     
    digitalCounter[slideIndex];    
    
    slide.src = slidesData[sections[c]][n];
    section = c; //секцию, которая будет становиться активной, кладем в текущую секцию
    index = n; //слайд, который будет становиться активным, кладем в текущий слайд
    pStatus.innerHTML = statuses[sections[section]];
}


//когда мы кликаем на точку непосредственно
function jumpSlide() {
    let c = event.target.getAttribute('section');//берет из тага (dot), который мы нажали (event.target) атрибут section и кладет в с
    let n = event.target.getAttribute('index');
    setActiveSlide(c, n);
}

function openSection() {
    id = event.target.id; //берет id на которую мы нажали
       
    if(id == 'watchLinkBefore') {
        setActiveSlide(0, 0);        
    } else if(id == 'watchLinkHardeningGround') {
        setActiveSlide(9, 0);        
    } else if(id == 'watchLinkBituminousMass') {
        setActiveSlide(8, 0);
    } else if(id == "watchLinkDefectsInFacade") {
        setActiveSlide(7, 0);
    } else if(id == "watchLinkWallDrying") {
        setActiveSlide(6, 0);
    } else if(id == "watchLinkLeakingPipe") {
        setActiveSlide(5, 0);
    } else if(id == "watchLinkSecuringWalls") {
        setActiveSlide(3, 0);
    } else if(id == "watchLinkCelling") {
        setActiveSlide(2, 0);
    } else if(id == "watchLinkDriveway") {
        setActiveSlide(1, 0);
    } else if(id == "watchLinkInRoofAndWalls") {
        setActiveSlide(4, 0);
    } else if (id == "watchLinkAfter") {
        setActiveSlide(10, 0);
    }
};
watchLinkBefore.addEventListener('click', openSection);
watchLinkDriveway.addEventListener('click', openSection);
watchLinkCelling.addEventListener('click', openSection);
watchLinkSecuringWalls.addEventListener('click', openSection);
watchLinkInRoofAndWalls.addEventListener('click', openSection);
watchLinkLeakingPipe.addEventListener('click', openSection);
watchLinkWallDrying.addEventListener('click', openSection);
watchLinkDefectsInFacade.addEventListener('click', openSection);
watchLinkBituminousMass.addEventListener('click', openSection);
watchLinkHardeningGround.addEventListener('click', openSection);
watchLinkAfter.addEventListener('click', openSection);


function fullOpenSlide() {
    fullImgBox.style.display = "flex";
    fullImg.src = slidesData[sections[section]][index];//src текущей картинки 
    statusFull.innerHTML = statuses[sections[section]];      
}
slide.addEventListener('click', fullOpenSlide);

setActiveSlide(0, 0);

//для правой кнопки
function nextSlide() {
    let sectionsCount = sections.length;
    let count = slidesData[sections[section]].length;
    if(index == count - 1) {
        if (section == sectionsCount - 1) {
            setActiveSlide(0,0);
        } else {
            setActiveSlide(++section, 0);
        }        
    } else {
        setActiveSlide(section, ++index);
    }
}
//для левой кнопки
function prevSlide() {
    let sectionsCount = sections.length;    
    if(index == 0) {
        if(section == 0) {
            let newCount = slidesData[sections[sectionsCount - 1]].length; //сколько слайдов в последней секции 
            setActiveSlide(sectionsCount - 1, newCount - 1);
        } else {
            let newCount = slidesData[sections[--section]].length; //сколько слайдов в предыдущей секции 
            setActiveSlide(section, newCount -1); //установили активный последный слайд предыдущей секции
        }
    } else {
        setActiveSlide(section, --index);
    }
}

next.addEventListener('click', nextSlide); 
prev.addEventListener('click', prevSlide);


function fullActive(n) {
    for(fullSlider of fullSlides) {
        fullSlider.classList.remove("active");
    }
    fullSlides[n].classList.add("active");
}

function arrowNext() {
    nextSlide();
    fullOpenSlide();
}

function arrowPrev() {
    prevSlide();
    fullOpenSlide();
}
arrNext.addEventListener('click', arrowNext);
arrPrev.addEventListener('click', arrowPrev);

function closeFullImg() {
    fullImgBox.style.display = "none";
}


let classBtnPrev = document.querySelector(".btnPrev");
let classBtnNext = document.querySelector(".btnNext");

function btnNext() {
    nextSlide();
    
}
function btnPrev() {
    prevSlide();
    
}

classBtnPrev.addEventListener('click', btnPrev);
classBtnNext.addEventListener('click', btnNext);

function addArrows() {
    let inW = window.innerWidth;    
    classBtnPrev.style.display = "none";
    classBtnNext.style.display = "none";
    if(inW <= 740) {       
        classBtnPrev.style.display = "block"; 
        classBtnNext.style.display = "block"; 
        prev.style.height = 0;            
        next.style.height = 0;
        next.style.opacity = 1;
        prev.style.opacity = 1;             
    }    
    else {
        classBtnPrev.style.display = "none";
        classBtnNext.style.display = "none";
        prev.style.height = "100%";            
        next.style.height = "100%";
        next.style.opacity = 0.4;
        prev.style.opacity = 0.4; 
    }
    console.log(prev);   
}
window.addEventListener('resize', addArrows);











