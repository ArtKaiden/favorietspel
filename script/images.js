const char1Images = document.querySelectorAll(".char-1-img");
const char2Images = document.querySelectorAll(".char-2-img");
const char3Images = document.querySelectorAll(".char-3-img");
const char4Images = document.querySelectorAll(".char-4-img");
const char5Images = document.querySelectorAll(".char-5-img");
const char6Images = document.querySelectorAll(".char-6-img");
const char1 = document.getElementById("char-1");
const char2 = document.getElementById("char-2");
const char3 = document.getElementById("char-3");
const char4 = document.getElementById("char-4");
const char5 = document.getElementById("char-5");
const char6 = document.getElementById("char-6");
let hasBackground1 = false;
let hasBackground2 = false;
let hasBackground3 = false;
let hasBackground4 = false;
let hasBackground5 = false;
let hasBackground6 = false;
let move1;
let move2;
let move3;
let move4;
let move5;
let move6;


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//////////////////////functions//////////////////////////
function MoveImage1(image, hasBackground, article){
  if(hasBackground) move1.revert();
  move1 = gsap.timeline();
  move1.to(image, {duration:0.8, ease: "power4.out", yPercent: -120})
      .to(image, {duration:1, ease: "power4.inOut", yPercent: -120, maxWidth: '30%', maxHeight:'20vh'},1)
      .to(image, {duration:1, ease: "power4.inOut", yPercent: -120, xPercent:50},1)
      .to(image, {duration:1, ease: "power4.inOut", opacity:0},1)
      .set(article, {backgroundImage: `url(${image.src})`},1.6);
}

function MoveImage2(image, hasBackground, article){
  if(hasBackground) move2.revert();
  move2 = gsap.timeline();
  move2.to(image, {duration:0.8, ease: "power4.out", yPercent: -120})
      .to(image, {duration:1, ease: "power4.inOut", yPercent: -120, maxWidth: '30%', maxHeight:'20vh'},1)
      .to(image, {duration:1, ease: "power4.inOut", yPercent: -120, xPercent:50},1)
      .to(image, {duration:1, ease: "power4.inOut", opacity:0},1)
      .set(article, {backgroundImage: `url(${image.src})`},1.6);
}

function MoveImage3(image, hasBackground, article){
  if(hasBackground) move3.revert();
  move3 = gsap.timeline();
  move3.to(image, {duration:0.8, ease: "power4.out", yPercent: -120})
      .to(image, {duration:1, ease: "power4.inOut", yPercent: -120, maxWidth: '30%', maxHeight:'20vh'},1)
      .to(image, {duration:1, ease: "power4.inOut", yPercent: -120, xPercent:50},1)
      .to(image, {duration:1, ease: "power4.inOut", opacity:0},1)
      .set(article, {backgroundImage: `url(${image.src})`},1.6);
}

function MoveImage4(image, hasBackground, article){
  if(hasBackground) move4.revert();
  move4 = gsap.timeline();
  move4.to(image, {duration:0.8, ease: "power4.out", yPercent: -120})
      .to(image, {duration:1, ease: "power4.inOut", yPercent: -120, maxWidth: '30%', maxHeight:'20vh'},1)
      .to(image, {duration:1, ease: "power4.inOut", yPercent: -120, xPercent:50},1)
      .to(image, {duration:1, ease: "power4.inOut", opacity:0},1)
      .set(article, {backgroundImage: `url(${image.src})`},1.6);
}

function MoveImage5(image, hasBackground, article){
  if(hasBackground) move5.revert();
  move5 = gsap.timeline();
  move5.to(image, {duration:0.8, ease: "power4.out", yPercent: -120})
      .to(image, {duration:1, ease: "power4.inOut", yPercent: -120, maxWidth: '30%', maxHeight:'20vh'},1)
      .to(image, {duration:1, ease: "power4.inOut", yPercent: -120, xPercent:50},1)
      .to(image, {duration:1, ease: "power4.inOut", opacity:0},1)
      .set(article, {backgroundImage: `url(${image.src})`},1.6);
}

function MoveImage6(image, hasBackground, article){
  if(hasBackground) move6.revert();
  move6 = gsap.timeline();
  move6.to(image, {duration:0.8, ease: "power4.out", yPercent: -120})
      .to(image, {duration:1, ease: "power4.inOut", yPercent: -120, maxWidth: '30%', maxHeight:'20vh'},1)
      .to(image, {duration:1, ease: "power4.inOut", yPercent: -120, xPercent:50},1)
      .to(image, {duration:1, ease: "power4.inOut", opacity:0},1)
      .set(article, {backgroundImage: `url(${image.src})`},1.6);
}

//////////////////////functions//////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////



////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//////////////////Event handlers////////////////////////

char1Images.forEach(image => {
  image.addEventListener("click", ()=>{
  if(hasBackground1) 
  {
    move1.timeScale(5).reverse();
    setTimeout(() => {MoveImage1(image, hasBackground1, char1)}, 500);
  }
  else 
    MoveImage1(image, hasBackground1, char1);
  hasBackground1 = true;
  });
});


char2Images.forEach(image => {
  image.addEventListener("click", ()=>{
    if(hasBackground2) 
    {
      move2.timeScale(2).reverse();
      setTimeout(() => {MoveImage2(image, hasBackground2, char2)}, 500);
    }
    else 
      MoveImage2(image,hasBackground2, char2);
    hasBackground2 = true;
  });
});

char3Images.forEach(image => {
  image.addEventListener("click", ()=>{
    if(hasBackground3) 
    {
      move3.timeScale(2).reverse();
      setTimeout(() => {MoveImage3(image, hasBackground3, char3)}, 500);
    }
    else 
      MoveImage3(image,hasBackground3, char3);
    hasBackground3 = true;
  });
});

char4Images.forEach(image => {
  image.addEventListener("click", ()=>{
    if(hasBackground4) 
    {
      move4.timeScale(2).reverse();
      setTimeout(() => {MoveImage4(image, hasBackground4, char4)}, 500);
    }
    else 
      MoveImage4(image,hasBackground4, char4);
    hasBackground4 = true;
  });
});

char5Images.forEach(image => {
  image.addEventListener("click", ()=>{
    if(hasBackground5) 
    {
      move5.timeScale(2).reverse();
      setTimeout(() => {MoveImage5(image, hasBackground5, char5)}, 500);
    }
    else 
      MoveImage5(image,hasBackground5, char5);
    hasBackground5 = true;
  });
});

char6Images.forEach(image => {
  image.addEventListener("click", ()=>{
  if(hasBackground6) 
  {
    move6.timeScale(2).reverse();
    setTimeout(() => {MoveImage6(image, hasBackground6, char6)}, 500);
  }
  else 
    MoveImage6(image,hasBackground6, char6);
  hasBackground6 = true;
  });
});


//////////////////Event handlers////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
