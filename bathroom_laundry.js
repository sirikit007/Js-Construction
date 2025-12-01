let prev = document.getElementById('btnPrev'); 
let next = document.getElementById('btnNext');
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");


let index = 0; // какой сейчас текущий активный слайд

//n - номер слайда, который будет становиться активным
let activeSlide = n => {   
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active'); //к активному текущему слайду добавляем класс эктив
}

let activeDot = n => {   
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

//для правой кнопки
let nextSlide = () => {
    //проверить, если слайд последний (slides.length - 1), то сделать его первым (index = 0)
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index);
        activeDot(index);
    } else {
        index++;
        activeSlide(index);
        activeDot(index);
    }
}
//для левой кнопки
let prevSlide = () => {
    //проверить, если слайд первый (index = 0), то сделать его последним (slides.length - 1)
    if(index == 0) {
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    } else {
        index--;
        activeSlide(index);
        activeDot(index);
    }
}
//функция для переключения слайдов с помощью точек (item = dot)
dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeSlide(index);
        activeDot(index);
    })
})

next.addEventListener('click', nextSlide); 
prev.addEventListener('click', prevSlide); 




let arrPrev = document.getElementById('arrowPrev');
let arrNext = document.getElementById('arrowNext');

let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");

let fullSlides = document.getElementsByClassName("fullSlider");
let fullIndex = 0;

function fullActive(n) {
    for(fullSlider of fullSlides) {
        fullSlider.classList.remove("active");
    }
    fullSlides[n].classList.add("active");
}

function arrowNext() {
    if(fullIndex == fullSlides.length - 1) {
        fullIndex = 0;
        fullActive(fullIndex);
    } else {
        fullIndex++;
        fullActive(fullIndex);
    }
}
function arrowPrev() {
    if(fullIndex == 0) {
        fullIndex = fullSlides.length - 1;
        fullActive(fullIndex);
    } else {
        fullIndex--;
        fullActive(fullIndex);
    }
}



function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;   
}
function closeFullImg() {
    fullImgBox.style.display = "none";
}

arrNext.addEventListener('click', arrowNext);
arrPrev.addEventListener('click', arrowPrev);


let classBtnPrev = document.querySelector(".btnPrev");
let classBtnNext = document.querySelector(".btnNext");

function addArrows() {
    let inW = window.innerWidth;    
    classBtnPrev.style.display = "none";
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