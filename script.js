/* ============================
   Für Esma ❤️
============================= */

// ---------- Brief ----------
const letter = `

Esma,

es gibt Menschen, die kommen und gehen.

Und dann gibt es Menschen, die man niemals aus seinem Herzen verliert.

Du gehörst für mich genau dazu.

Nach all der Zeit denke ich noch immer an dich.
Nicht, weil ich in der Vergangenheit lebe,
sondern weil ich immer noch daran glaube,
dass wir vielleicht neue Erinnerungen schaffen können.

Diese kleine Website soll dir einfach zeigen,
wie wichtig du mir bist.

Ganz egal was passiert:
Danke, dass es dich gibt.

❤️
`;

const typewriter = document.getElementById("typewriter");

let i = 0;

function writeLetter() {

    if (!typewriter) return;

    if (i < letter.length) {

        typewriter.innerHTML += letter.charAt(i);

        i++;

        setTimeout(writeLetter, 35);

    }

}

window.addEventListener("load", writeLetter);


// ---------- Musik ----------

const musicButton = document.getElementById("musicButton");
const music = document.getElementById("loveMusic");

if (musicButton && music) {

    musicButton.addEventListener("click", () => {

        music.play();

        musicButton.innerHTML = "❤️ Musik läuft";

        musicButton.disabled = true;

    });

}


// ---------- Geschenk ----------

const gift = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

if (gift) {

    gift.addEventListener("click", () => {

        gift.style.transform = "scale(1.2) rotate(10deg)";

        giftMessage.style.display = "block";

        gift.animate([
            {transform:"scale(1)"},
            {transform:"scale(1.3) rotate(8deg)"},
            {transform:"scale(1)"}
        ],{
            duration:600
        });

    });

}


// ---------- Herzen ----------

const heartContainer = document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=Math.random()>0.5?"❤️":"💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*30)+"px";

    heart.style.animationDuration=(6+Math.random()*8)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },14000);

}

setInterval(createHeart,350);


// ---------- Countdown ----------

// Ändere dieses Datum auf euer gewünschtes Date
const targetDate = new Date("2026-12-31T18:00:00");

const countdown = document.getElementById("countdown");

function updateCountdown(){

    if(!countdown) return;

    const now=new Date();

    const distance=targetDate-now;

    if(distance<=0){

        countdown.innerHTML="Ich hoffe wir sehen uns heute ❤️";

        return;

    }

    const days=Math.floor(distance/(1000*60*60*24));

    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds=Math.floor((distance%(1000*60))/1000);

    countdown.innerHTML=

    `${days} Tage ${hours} Std ${minutes} Min ${seconds} Sek`;

}

updateCountdown();

setInterval(updateCountdown,1000);


// ---------- Ja ----------

const yes=document.getElementById("yesBtn");

const success=document.getElementById("successSection");

if(yes){

yes.addEventListener("click",()=>{

success.classList.remove("hidden");

success.scrollIntoView({

behavior:"smooth"

});

for(let j=0;j<120;j++){

setTimeout(createHeart,j*20);

}

});

}


// ---------- Nein ----------

const no=document.getElementById("noBtn");

let tries=0;

if(no){

no.addEventListener("mouseenter",()=>{

if(tries>=2) return;

tries++;

const x=(Math.random()*250)-125;

const y=(Math.random()*120)-60;

no.style.position="relative";

no.style.left=x+"px";

no.style.top=y+"px";

});

no.addEventListener("click",()=>{

alert("Danke, dass du ehrlich bist. ❤️");

});

}


// ---------- Bilder Animation ----------

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.animate([

{transform:"scale(1)"},

{transform:"scale(1.05)"}

],{

duration:250,

fill:"forwards"

});

});

img.addEventListener("mouseleave",()=>{

img.animate([

{transform:"scale(1.05)"},

{transform:"scale(1)"}

],{

duration:250,

fill:"forwards"

});

});

});


// ---------- Sanftes Einblenden ----------

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(60px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:800,

fill:"forwards"

});

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});
