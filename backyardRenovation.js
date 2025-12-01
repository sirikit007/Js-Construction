let prev = document.getElementById('btnPrev'); 
let next = document.getElementById('btnNext');

let dots = document.querySelector("#dots");
let digitalCounter = document.getElementById('digitalCounter');


let pStatus = document.getElementById("status");

let watchLinkBefore = document.getElementById("watchLinkBefore");
let watchLinkInPSurfaceF = document.getElementById("watchLinkInPSurfaceF");
let watchLinkinProgressSoilRemoval = document.getElementById("watchLinkinProgressSoilRemoval");
let watchLinkinProgressDrainageRenovation = document.getElementById("watchLinkinProgressDrainageRenovation");
let watchLinkinProgressConcretingRetainingWallFoundation = document.getElementById("watchLinkinProgressConcretingRetainingWallFoundation");
let watchLinkCoveringPipesWithGravel = document.getElementById("watchLinkCoveringPipesWithGravel");
let watchLinkInProgressBuildingOfRetainingWall = document.getElementById("watchLinkInProgressBuildingOfRetainingWall");
let watchLinkInProgressCoveringAllSurfaceWithGravel = document.getElementById("watchLinkInProgressCoveringAllSurfaceWithGravel");
let watchLinkInProgressFittingExternalShower = document.getElementById("watchLinkInProgressFittingExternalShower");
let watchLinkInProgressRestoringTheLawn = document.getElementById("watchLinkInProgressRestoringTheLawn");




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
        'photoBackyardHamlyn/before/before01.jpg',
        'photoBackyardHamlyn/before/before02.jpg',
        'photoBackyardHamlyn/before/before03.jpg',
        'photoBackyardHamlyn/before/before04.jpg',
        'photoBackyardHamlyn/before/before05.jpg',
        'photoBackyardHamlyn/before/before06.jpg',
        'photoBackyardHamlyn/before/before07.jpg',
        'photoBackyardHamlyn/before/before08.jpg',
        'photoBackyardHamlyn/before/before09.jpg',
        'photoBackyardHamlyn/before/before10.jpg',
        'photoBackyardHamlyn/before/before11.jpg',
        'photoBackyardHamlyn/before/before12.jpg',
        'photoBackyardHamlyn/before/before13.jpg',
        'photoBackyardHamlyn/before/before14.jpg',
        'photoBackyardHamlyn/before/before15.jpg',
        'photoBackyardHamlyn/before/before16.jpg',
        'photoBackyardHamlyn/before/before17.jpg',
        'photoBackyardHamlyn/before/before18.jpg',
        'photoBackyardHamlyn/before/before19.jpg',
        'photoBackyardHamlyn/before/before20.jpg',
        'photoBackyardHamlyn/before/before21.jpg',
        'photoBackyardHamlyn/before/before22.jpg',
        'photoBackyardHamlyn/before/before23.jpg',
        'photoBackyardHamlyn/before/before24.jpg',
        'photoBackyardHamlyn/before/before25.jpg',
        'photoBackyardHamlyn/before/before26.jpg',
        'photoBackyardHamlyn/before/before27.jpg',
        'photoBackyardHamlyn/before/before28.jpg',
        'photoBackyardHamlyn/before/before29.jpg',
        'photoBackyardHamlyn/before/before30.jpg',
        'photoBackyardHamlyn/before/before31.jpg'             
    ],
    inProgressSurfaceFlattening: [
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF00.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF01.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF02.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF03.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF04.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF05.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF06.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF07.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF08.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF09.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF10.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF11.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF12.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF13.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF14.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF15.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF16.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF17.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF18.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF19.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF20.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF21.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF22.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF23.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF24.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF25.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF26.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF27.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF28.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF29.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF30.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF31.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF32.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF33.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF34.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF35.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF36.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF37.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF38.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF39.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF40.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF41.jpg",
        "photoBackyardHamlyn/in Progress/surface flattening/inP_surfaceF42.jpg"                
    ],
    inProgressSoilRemoval: [
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval00.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval01.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval02.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval03.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval04.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval05.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval06.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval07.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval08.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval09.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval10.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval11.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval12.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval13.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval14.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval15.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval16.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval17.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval18.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval19.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval20.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval21.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval22.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval23.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval24.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval25.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval26.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval27.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval28.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval29.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval30.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval31.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval32.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval33.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval34.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval35.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval36.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval37.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval38.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval39.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval40.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval41.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval42.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval43.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval44.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval45.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval46.jpg",  
        "photoBackyardHamlyn/in Progress/soil removal/inP_soilRemoval47.jpg"        
    ],
    inProgressDrainageRenovation: [
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation00.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation01.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation02.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation03.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation04.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation05.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation06.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation07.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation08.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation09.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation10.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation11.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation12.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation13.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation14.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation15.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation16.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation17.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation18.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation19.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation20.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation21.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation22.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation23.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation24.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation25.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation26.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation27.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation28.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation29.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation30.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation31.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation32.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation33.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation34.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation35.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation36.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation37.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation38.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation39.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation40.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation41.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation42.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation43.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation44.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation45.jpg",
        "photoBackyardHamlyn/in Progress/drainage renovation/inP_drainageRenovation46.jpg"        
    ],
    inProgressConcretingRetainingWallFoundation: [
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation00.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation01.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation02.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation03.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation04.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation05.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation06.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation07.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation08.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation09.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation10.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation11.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation12.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation13.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation14.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation15.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation16.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation17.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation18.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation19.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation20.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation21.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation22.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation23.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation24.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation25.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation26.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation27.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation28.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation29.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation30.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation31.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation32.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation33.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation34.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation35.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation36.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation37.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation38.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation39.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation40.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation41.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation42.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation43.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation44.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation45.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation46.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation47.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation48.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation49.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation50.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation51.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation52.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation53.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation54.jpg",
        "photoBackyardHamlyn/in Progress/concreting retaining wall foundation/inP_concretingRetainingWallFoundation55.jpg"               
    ],
    inProgressCoveringPipesWithGravel: [
       "photoBackyardHamlyn/in Progress/covering pipes with gravel/inP_coveringPipesWithGravel00.jpg", 
       "photoBackyardHamlyn/in Progress/covering pipes with gravel/inP_coveringPipesWithGravel01.jpg", 
       "photoBackyardHamlyn/in Progress/covering pipes with gravel/inP_coveringPipesWithGravel02.jpg", 
       "photoBackyardHamlyn/in Progress/covering pipes with gravel/inP_coveringPipesWithGravel03.jpg", 
       "photoBackyardHamlyn/in Progress/covering pipes with gravel/inP_coveringPipesWithGravel04.jpg", 
       "photoBackyardHamlyn/in Progress/covering pipes with gravel/inP_coveringPipesWithGravel05.jpg", 
       "photoBackyardHamlyn/in Progress/covering pipes with gravel/inP_coveringPipesWithGravel06.jpg", 
       "photoBackyardHamlyn/in Progress/covering pipes with gravel/inP_coveringPipesWithGravel07.jpg", 
       "photoBackyardHamlyn/in Progress/covering pipes with gravel/inP_coveringPipesWithGravel08.jpg", 
       "photoBackyardHamlyn/in Progress/covering pipes with gravel/inP_coveringPipesWithGravel09.jpg", 
       "photoBackyardHamlyn/in Progress/covering pipes with gravel/inP_coveringPipesWithGravel10.jpg", 
       "photoBackyardHamlyn/in Progress/covering pipes with gravel/inP_coveringPipesWithGravel11.jpg", 
       "photoBackyardHamlyn/in Progress/covering pipes with gravel/inP_coveringPipesWithGravel12.jpg", 
       "photoBackyardHamlyn/in Progress/covering pipes with gravel/inP_coveringPipesWithGravel13.jpg"            
    ],
    inProgressBuildingOfRetainingWall: [
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall00.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall01.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall02.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall03.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall04.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall05.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall06.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall07.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall08.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall09.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall10.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall11.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall12.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall13.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall14.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall15.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall16.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall17.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall18.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall19.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall20.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall21.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall22.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall23.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall24.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall25.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall26.jpg",
        "photoBackyardHamlyn/in Progress/building of retaining wall/inP_buildingOfRetainingWall27.jpg"        
    ],
    inProgressCoveringAllSurfaceWithGravel: [
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel00.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel01.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel02.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel03.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel04.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel05.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel06.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel07.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel08.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel09.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel10.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel11.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel12.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel13.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel14.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel15.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel16.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel17.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel18.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel19.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel20.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel21.jpg",
        "photoBackyardHamlyn/in Progress/covering  all surface with gravel/inP_coveringAllSurfaceWithGravel22.jpg",
    ],
    inProgressFittingExternalShower: [
        "photoBackyardHamlyn/in Progress/fitting external shower/inP_fittingExternalShower00.jpg",
        "photoBackyardHamlyn/in Progress/fitting external shower/inP_fittingExternalShower01.jpg",
        "photoBackyardHamlyn/in Progress/fitting external shower/inP_fittingExternalShower02.jpg",
        "photoBackyardHamlyn/in Progress/fitting external shower/inP_fittingExternalShower03.jpg",
        "photoBackyardHamlyn/in Progress/fitting external shower/inP_fittingExternalShower04.jpg",
        "photoBackyardHamlyn/in Progress/fitting external shower/inP_fittingExternalShower05.jpg"
    ],
    inProgressRestoringTheLawn: [
        "photoBackyardHamlyn/in Progress/restoring the lawn/inP_restoringTheLawn00.jpg",
        "photoBackyardHamlyn/in Progress/restoring the lawn/inP_restoringTheLawn01.jpg",
        "photoBackyardHamlyn/in Progress/restoring the lawn/inP_restoringTheLawn02.jpg",
        "photoBackyardHamlyn/in Progress/restoring the lawn/inP_restoringTheLawn03.jpg",
        "photoBackyardHamlyn/in Progress/restoring the lawn/inP_restoringTheLawn04.jpg",
        "photoBackyardHamlyn/in Progress/restoring the lawn/inP_restoringTheLawn05.jpg",
        "photoBackyardHamlyn/in Progress/restoring the lawn/inP_restoringTheLawn06.jpg",
        "photoBackyardHamlyn/in Progress/restoring the lawn/inP_restoringTheLawn07.jpg",
        "photoBackyardHamlyn/in Progress/restoring the lawn/inP_restoringTheLawn08.jpg"
    ]
    
};
let sections = [
    'before',
    'inProgressSurfaceFlattening',
    'inProgressSoilRemoval',
    'inProgressDrainageRenovation',
    'inProgressConcretingRetainingWallFoundation',
    'inProgressCoveringPipesWithGravel',
    'inProgressBuildingOfRetainingWall',
    'inProgressCoveringAllSurfaceWithGravel',
    'inProgressFittingExternalShower',
    'inProgressRestoringTheLawn'    
];
//для надписей под слайдами
let statuses = {
    before: "Before",
    inProgressSurfaceFlattening: "In Progress: Surface Flattening",
    inProgressSoilRemoval: "In Progress: Soil Removal",
    inProgressDrainageRenovation: "In Progress: Drainage Renovation",
    inProgressConcretingRetainingWallFoundation: "In Progress: Concreting Retaining Wall Foundation",
    inProgressCoveringPipesWithGravel: "In Progress: Covering Pipes With Gravel",
    inProgressBuildingOfRetainingWall: "In Progress: Building Of Retaining Wall",
    inProgressCoveringAllSurfaceWithGravel: "In Progress: Covering All Surface With Gravel",
    inProgressFittingExternalShower: "In Progress: Fitting External Shower",
    inProgressRestoringTheLawn: "In Progress: Restoring The Lawn"
     
}

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
    } else if(id == 'watchLinkInPSurfaceF') {
        setActiveSlide(1, 0);        
    } else if(id == 'watchLinkinProgressSoilRemoval') {
        setActiveSlide(2, 0);
    } else if(id == "watchLinkinProgressDrainageRenovation") {
        setActiveSlide(3, 0);
    } else if(id == "watchLinkinProgressConcretingRetainingWallFoundation") {
        setActiveSlide(4, 0);
    } else if(id == "watchLinkCoveringPipesWithGravel") {
        setActiveSlide(5, 0);
    } else if(id == "watchLinkInProgressBuildingOfRetainingWall") {
        setActiveSlide(6, 0);
    } else if(id == "watchLinkInProgressCoveringAllSurfaceWithGravel") {
        setActiveSlide(7, 0);
    } else if(id == "watchLinkInProgressFittingExternalShower") {
        setActiveSlide(8, 0);
    } else if(id == "watchLinkInProgressRestoringTheLawn") {
        setActiveSlide(9, 0);
    } 
}
watchLinkBefore.addEventListener('click', openSection);
watchLinkInPSurfaceF.addEventListener('click', openSection);
watchLinkinProgressSoilRemoval.addEventListener('click', openSection);
watchLinkinProgressDrainageRenovation.addEventListener('click', openSection);
watchLinkinProgressConcretingRetainingWallFoundation.addEventListener('click', openSection);
watchLinkCoveringPipesWithGravel.addEventListener('click', openSection);
watchLinkInProgressBuildingOfRetainingWall.addEventListener('click', openSection);
watchLinkInProgressCoveringAllSurfaceWithGravel.addEventListener('click', openSection);
watchLinkInProgressFittingExternalShower.addEventListener('click', openSection);
watchLinkInProgressRestoringTheLawn.addEventListener('click', openSection);


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


arrNext.addEventListener('click', arrowNext);
arrPrev.addEventListener('click', arrowPrev);








