const particles = document.getElementById("particles");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("floating");

    const icons = [
        "💙",
        "✦",
        "❄",
        "⋆",
        "♡"
    ];

    heart.innerHTML =
        icons[Math.floor(Math.random()*icons.length)];

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
        Math.random()*20 + 15 + "px";

    heart.style.animationDuration =
        Math.random()*8 + 8 + "s";

    particles.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },15000);
}

setInterval(createHeart,400);

const reveals =
document.querySelectorAll(
".paper,.polaroid,.photo-card"
);

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(
[
{
opacity:0,
transform:'translateY(50px)'
},
{
opacity:1,
transform:'translateY(0)'
}
],
{
duration:1000,
fill:'forwards'
}
);

}
});

});

reveals.forEach(item=>{
observer.observe(item);
});
