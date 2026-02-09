// ====== HISTORY FEATURE ======
window.onload = function () {
    let resultText = document.querySelector(".result-text");

    if (resultText) {
        let result = resultText.innerText;

        let history = JSON.parse(localStorage.getItem("flamesHistory")) || [];

        // Add new result at top
        history.unshift(result);

        // Keep only last 5
        history = history.slice(0, 5);

        localStorage.setItem("flamesHistory", JSON.stringify(history));

        showHistory();
    } else {
        showHistory();
    }

    // Load Dark mode
    if (localStorage.getItem("darkMode") === "on") {
        document.body.classList.add("dark");
    }
};

// Show history
function showHistory() {
    let history = JSON.parse(localStorage.getItem("flamesHistory")) || [];
    let historyList = document.getElementById("historyList");

    historyList.innerHTML = "";

    history.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        historyList.appendChild(li);
    });
}

// ====== RESET BUTTON ======
function resetForm() {
    document.querySelector("form").reset();

    let resultBox = document.querySelector(".result-box");
    if (resultBox) {
        resultBox.style.display = "none";
    }
}

// ====== DARK MODE ======
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "on");
    } else {
        localStorage.setItem("darkMode", "off");
    }
}

// ====== MUSIC TOGGLE ======
let musicPlaying = false;

function toggleMusic() {
    let music = document.getElementById("bgMusic");

    if (!musicPlaying) {
        music.play();
        musicPlaying = true;
        alert("🎵 Music ON");
    } else {
        music.pause();
        musicPlaying = false;
        alert("🔇 Music OFF");
    }
}