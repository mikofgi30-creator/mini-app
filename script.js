const tg = window.Telegram.WebApp;

// Сообщаем Telegram что приложение готово
tg.ready();

// Делаем на весь экран
tg.expand();

// Получаем данные пользователя
const user = tg.initDataUnsafe?.user;

if (user) {
    console.log("USER:", user);

    document.getElementById("username").innerText =
        "@" + (user.username || user.first_name);

} else {
    console.log("Открыто НЕ через Telegram");
}
