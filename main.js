let div1 = document.querySelectorAll("#div1 h1");
let cards = document.querySelectorAll("#cards");
let page1 = document.querySelector("#page1");
let card3 = document.querySelector(".card3");
var engText = document.querySelector("#eng-text");
var sideText = document.querySelector("#side-text");

gsap.to(div1,{
    y:-293,
    duration:1,
    delay:1,
    ease:"power2.inOut",
  repeat:-1,
  repeatDelay:2
})

var tl = gsap.timeline();

card3.addEventListener("click",()=>{
   tl.to(page1,{
     scale:2.5,
    duration:1,
    delay:0.3, 
    ease:"power2.inOut",
    xPercent:70,
    yPercent:-70,
   })
   tl.to(engText,{
    display:"block"
   },"first")
   tl.from(engText,{
    width:0,
    duration:1,
    ease:"power2.inOut",
   },"first")
   tl.from(sideText,{
    opacity:0,
    duration:0.5,
    delay:0.5,
   })

})
