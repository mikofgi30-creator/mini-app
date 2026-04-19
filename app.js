const tg = window.Telegram.WebApp;
tg.expand();

/* переключение */
function openPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    if (id === "profile") loadProfile();
}

/* рулетка */
function spin() {
    const prizes = ["0 TON", "0.1 TON", "0.5 TON"];
    const win = prizes[Math.floor(Math.random() * prizes.length)];

    document.getElementById("result").innerText = "Выпало: " + win;
}

/* бесплатный кейс */
function openCase() {
    const last = localStorage.getItem("free");
    const now = Date.now();
    const DAY = 86400000;

    if (last && now - last < DAY) {
        alert("Уже открывал сегодня");
        return;
    }

    const prizes = ["0 TON", "0.1 TON", "0.5 TON"];
    const win = prizes[Math.floor(Math.random() * prizes.length)];

    document.getElementById("free-result").innerText = "Ты получил: " + win;

    localStorage.setItem("free", now);
}

/* профиль */
function loadProfile() {
    const user = tg.initDataUnsafe.user;

    if (!user) return;

    document.getElementById("username").innerText = "@" + (user.username || "user");

    if (user.photo_url) {
        document.getElementById("avatar").src = user.photo_url;
    }
}

/* инвайт */
function invite() {
    const user = tg.initDataUnsafe.user;
    const link = "https://t.me/ТВОЙ_БОТ?start=" + user.id;

    navigator.clipboard.writeText(link);
    alert("Ссылка скопирована");
}
