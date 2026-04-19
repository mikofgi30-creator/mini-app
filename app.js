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
