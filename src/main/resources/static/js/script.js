// ============================
// FLAMES APP - SAFE SCRIPT
// ============================

let musicPlaying = false;

window.onload = function () {
    // Load Dark Mode from localStorage
    if (localStorage.getItem("darkMode") === "on") {
        document.body.classList.add("dark");
    }

    // Save result to history if result exists
    let resultText = document.querySelector(".result-text");

    if (resultText) {
        let result = resultText.innerText.trim();

        if (result !== "") {
            let history = JSON.parse(localStorage.getItem("flamesHistory")) || [];

            // Add new result at top
            history.unshift(result);

            // Remove duplicates (optional)
            history = [...new Set(history)];

            // Keep only last 5
            history = history.slice(0, 5);

            localStorage.setItem("flamesHistory", JSON.stringify(history));
        }
    }

    // Show history always
    showHistory();
};

// ============================
// SHOW HISTORY
// ============================
function showHistory() {
    let history = JSON.parse(localStorage.getItem("flamesHistory")) || [];
    let historyList = document.getElementById("historyList");

    // Safety check
    if (!historyList) return;

    historyList.innerHTML = "";

    if (history.length === 0) {
        let li = document.createElement("li");
        li.innerText = "No history yet!";
        historyList.appendChild(li);
        return;
    }

    history.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        historyList.appendChild(li);
    });
}

// ============================
// RESET BUTTON
// ============================
function resetForm() {
    let form = document.querySelector("form");
    if (form) form.reset();

    let resultBox = document.querySelector(".result-box");
    if (resultBox) resultBox.style.display = "none";
}

// ============================
// DARK MODE TOGGLE
// ============================
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "on");
    } else {
        localStorage.setItem("darkMode", "off");
    }
}

// ============================
// MUSIC TOGGLE
// ============================
function toggleMusic() {
    let music = document.getElementById("bgMusic");

    if (!music) {
        alert("Music file not found!");
        return;
    }

    if (!musicPlaying) {
        music.play()
            .then(() => {
                musicPlaying = true;
                alert("🎵 Music ON");
            })
            .catch(() => {
                alert("Browser blocked autoplay. Click again!");
            });
    } else {
        music.pause();
        musicPlaying = false;
        alert("🔇 Music OFF");
    }
}