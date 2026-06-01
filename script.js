/* =====================
   FLOATING BLUE HEARTS
===================== */

const particleContainer =
document.getElementById("particles");

const icons = [
    "💙",
    "✦",
    "❄",
    "⋆",
    "♡",
    "☁"
];

function createParticle(){

    const item =
    document.createElement("div");

    item.classList.add("float-item");

    item.innerHTML =
    icons[Math.floor(Math.random()*icons.length)];

    item.style.left =
    Math.random()*100 + "vw";

    item.style.fontSize =
    (Math.random()*20 + 18) + "px";

    item.style.animationDuration =
    (Math.random()*8 + 10) + "s";

    particleContainer.appendChild(item);

    setTimeout(()=>{
        item.remove();
    },18000);
}

setInterval(createParticle,500);

/* =====================
   SCROLL REVEAL
===================== */

const elements = document.querySelectorAll(
".paper,.photo-card,.memory-card,.polaroid,.quote-box"
);

elements.forEach(el=>{
    el.classList.add("reveal");
});

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:0.15
});

elements.forEach(el=>{
    observer.observe(el);
});

/* =====================
   IMAGE LIGHTBOX
===================== */

document.querySelectorAll("img")
.forEach(img=>{

img.addEventListener("click",()=>{

const overlay =
document.createElement("div");

overlay.style.position="fixed";
overlay.style.inset="0";
overlay.style.background=
"rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="9999";

const image =
document.createElement("img");

image.src = img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="10px";

overlay.appendChild(image);

document.body.appendChild(overlay);

overlay.onclick=()=>{
overlay.remove();
};

});

});

/* =====================
   TITLE ANIMATION
===================== */

const title =
document.querySelector(".hero h1");

let scale = 1;

setInterval(()=>{

scale =
scale === 1 ? 1.03 : 1;

title.style.transform =
`scale(${scale})`;

},1500);

/* =====================
   PARALLAX EFFECT
===================== */

window.addEventListener("scroll",()=>{

const scroll =
window.pageYOffset;

document.querySelector(".hero")
.style.transform =
`translateY(${scroll * 0.15}px)`;

});
