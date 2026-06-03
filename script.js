const noBtn = document.getElementById("no");

let attempts = 0;

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },6000);
}

const messages = [
    "NO 😒",
    "Are you sure? 🥺",
    "Think again 😭",
    "Please? ❤️",
    "Last chance 😅",
    "Just click YES 😎"
];

function moveButton() {

    attempts++;

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    if(attempts < messages.length){
        noBtn.innerText = messages[attempts];
    }

    let scale = 1 - (attempts * 0.1);

    if(scale > 0.4){
        noBtn.style.transform = `scale(${scale})`;
    }

    if(attempts >= 5){

        noBtn.style.display = "none";

        const msg = document.createElement("h3");

        msg.innerHTML =
        "😂 Nice try. The only available option is YES ❤️";

        document.querySelector(".container")
        .appendChild(msg);
    }
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

document
.getElementById("yes")
.addEventListener("click", () => {

    document
    .getElementById("formSection")
    .style.display = "block";

});

document.getElementById("dateForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const date =
    document.getElementById("date").value;

    const time =
    document.getElementById("time").value;

    const location =
    document.getElementById("location").value;

    const food =
    document.querySelector(
        'input[name="food"]:checked'
    )?.value || "Chef's Choice";

    // Launch Confetti
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

    // Floating Hearts
    for(let i = 0; i < 20; i++){
        setTimeout(createHeart, i * 200);
    }

    document.body.innerHTML = `

    <div style="
        max-width:800px;
        margin:auto;
        padding:40px;
        text-align:center;
        font-family:Arial,sans-serif;
    ">

        <h1 style="
            color:#ff4d6d;
            margin-bottom:20px;
        ">
            ❤️ OFFICIAL DATE CERTIFICATE ❤️
        </h1>

        <p>
            <strong>Applicant:</strong> Certified Cutie 🥰
        </p>

        <div style="
            background:white;
            border:4px solid #ff4d6d;
            border-radius:20px;
            padding:30px;
            box-shadow:0 0 20px rgba(0,0,0,.15);
        ">

            <h2>DATE APPLICATION APPROVED ✅</h2>

            <hr style="
                margin:20px 0;
            ">

            <p><strong>📅 Date:</strong> ${date}</p>

            <p><strong>⏰ Time:</strong> ${time}</p>

            <p><strong>📍 Location:</strong> ${location}</p>

            <p><strong>🍽️ Food:</strong> ${food}</p>

            <br>

            <h3>
                This certifies that the holder
                has successfully secured a date.
            </h3>

            <br>

            <h2 style="color:green;">
                🎉 STATUS: ACCEPTED 🎉
            </h2>

            <br>

            <p>
                Congratulations! You have successfully qualified for a premium Treat. 😎❤️
            </p>

            <br>

            <small>
                No refunds. No cancellations.
                Terms and conditions apply 😂
            </small>

        </div>

        <br>

        <button onclick="window.print()" style="
            padding:12px 25px;
            background:#ff4d6d;
            color:white;
            border:none;
            border-radius:10px;
            cursor:pointer;">

            📜 Download Certificate
        </button>

    </div>

    `;
});