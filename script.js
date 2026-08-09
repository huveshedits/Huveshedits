
const sections = document.querySelectorAll(
".hero,.portfolio,.services,.pricing,.reviews,.contact"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

sections.forEach((section)=>{

observer.observe(section);

});
window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";

setTimeout(function(){

document.getElementById("loader").style.display="none";

},1000);

},2000);

});
/* Hero Slider */

const slides=document.querySelectorAll(".slide");

let currentSlide=0;

setInterval(()=>{

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

slides[currentSlide].classList.add("active");

},4000);
function toggleMenu(){

document.getElementById("navMenu").classList.toggle("active");

}
/* Scroll Progress */

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/scrollHeight)*100;

document.getElementById("progressBar").style.width=progress+"%";

});
/* Video Popup */

const cards=document.querySelectorAll(".card");

const modal=document.getElementById("videoModal");

const close=document.querySelector(".close-video");

const video=document.getElementById("portfolioVideo");

cards.forEach(card=>{

card.addEventListener("click",()=>{

modal.style.display="flex";

video.play();

});

});

close.addEventListener("click",()=>{

modal.style.display="none";

video.pause();

video.currentTime=0;

});
document.getElementById("leadForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const form = this;
    const data = new FormData(form);

    try{

        await fetch(form.action,{
            method:"POST",
            body:data,
            headers:{
                "Accept":"application/json"
            }
        });

    }catch(err){
        console.log(err);
    }

    document.getElementById("leadPopup").style.display="none";
    document.getElementById("website").style.display="block";
    document.body.style.overflow="auto";

});
document.querySelector(".booking-form").addEventListener("submit", function () {
    alert("✅ Thank you! Your booking request has been received.");

    setTimeout(function () {
        window.open(
            "https://wa.me/918010863236?text=Hi%20Huvesh%20Edits,%20I%20want%20to%20book%20a%20video%20editing%20service.",
            "_blank"
        );
    }, 1000);
});