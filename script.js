// Screens
const intro = document.getElementById("intro");
const question = document.getElementById("question");
const planner = document.getElementById("planner");
const success = document.getElementById("success");

// Buttons
const openBtn = document.getElementById("openBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finishBtn = document.getElementById("finishBtn");

// Music
const music = document.getElementById("bgMusic");

// Open surprise
openBtn.addEventListener("click", () => {

    music.volume = 0;

    music.play().then(() => {

        let volume = 0;

        const fade = setInterval(() => {

            volume += 0.05;

            if (volume >= 1) {
                volume = 1;
                clearInterval(fade);
            }

            music.volume = volume;

        }, 180);

    }).catch(() => {});

    intro.classList.remove("active");
    question.classList.add("active");

});

// Escaping NO button
function moveNoButton(){

    const x = Math.random() * 220 - 110;
    const y = Math.random() * 220 - 110;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;

}

noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("touchstart",(e)=>{
    e.preventDefault();
    moveNoButton();
});

// YES
yesBtn.addEventListener("click",()=>{

    question.classList.remove("active");
    planner.classList.add("active");

});

// Finish
finishBtn.addEventListener("click",()=>{

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    const food =
        document.getElementById("food").value;

    if(!date || !time || !food){

        alert("Please complete everything first 💕");

        return;

    }

    planner.classList.remove("active");

    success.classList.add("active");

    document.getElementById("summary").innerHTML = `
        <strong>📅 Date:</strong> ${date}<br><br>
        <strong>🕒 Time:</strong> ${time}<br><br>
        <strong>🍜 Food:</strong> ${food}
    `;

    // Confetti
    confetti({
        particleCount: 220,
        spread: 120,
        origin:{y:0.6}
    });

});
