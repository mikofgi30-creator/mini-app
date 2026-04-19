function openCase() {
    const lastOpen = localStorage.getItem("free_case_time");
    const now = Date.now();

    // 24 часа
    const DAY = 86400000;

    if (lastOpen && now - lastOpen < DAY) {
        const left = Math.ceil((DAY - (now - lastOpen)) / 1000 / 60);
        document.getElementById("free-result").innerText =
            "Попробуй позже (" + left + " мин)";
        return;
    }

    const caseEl = document.getElementById("case");
    caseEl.classList.add("opening");

    setTimeout(() => {
        caseEl.classList.remove("opening");

        const prizes = ["0 TON", "0.1 TON", "0.5 TON"];
        const win = prizes[Math.floor(Math.random() * prizes.length)];

        document.getElementById("free-result").innerText =
            "Ты получил: " + win;

        localStorage.setItem("free_case_time", now);
    }, 1000);
}

function loadProfile() {
    const user = window.Telegram.WebApp.initDataUnsafe.user;

    if (!user) return;

    document.getElementById("username").innerText = "@" + user.username;

    if (user.photo_url) {
        document.getElementById("avatar").src = user.photo_url;
    }

    // данные (пока локально)
    document.getElementById("games").innerText =
        localStorage.getItem("games") || 0;

    document.getElementById("best").innerText =
        localStorage.getItem("best") || "0 TON";
}

/* пригласить */
function invite() {
    const link = "https://t.me/ТВОЙ_БОТ?start=" + 
        window.Telegram.WebApp.initDataUnsafe.user.id;

    navigator.clipboard.writeText(link);
    alert("Ссылка скопирована!");
}
