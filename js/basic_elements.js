// Загрузка шапки
document.getElementById("load_header").innerHTML =
    `
    <header id="computer-menu">
    <nav>
        <ul class="topmenu">
            <li><a href="index.html" class="active">Главная</a></li>
            <li><a href="https://vk.com/eugene_blogs_official" target="_blank">VK</a></li>
            <li><a href="https://github.com/EugeneBlogs?tab=repositories" target="_blank">GitHub</a></li>
            <li><a href="#">Наши проекты ↓</a>
                <ul class="submenu">
                    <li><a href="#">Игры →</a>
                        <ul class="submenu">
                            <li><a href="games.html">ИГРЫ НА ПК</a></li>
                            <li><a href="#">Текстовые квесты →</a>
                                <ul class="submenu">
                                    <li><a href="text-quest.html">(НЕ)выживши(Й/Е)</a></li>
                                    <li><a href="text-quest-2.html">Операция "Борьба за жизнь"</a></li>
                                </ul>
                            </li>
                            <li><a href="tic-tac-toe.html">Крестики-нолики</a></li>
                            <li><a href="words.html">Загадай-Угадай</a></li>
                            <li><a href="crocodile.html">Крокомист</a></li>
                        </ul>
                    </li>
                    <li><a href="text-analysis.html">Анализ текста</a></li>
                    <li><a href="encryption.html">Шифрование текста</a></li>
                    <li><a href="password-generator.html">Генератор паролей</a></li>
                    <li><a href="antimate.html">JS-библиотека "!МАТ"</a></li>
                </ul>
            </li>
            <li><a href="storage.html">M.Storage</a></li>
        </ul>
    </nav>
</header>
<header id="mobile-menu">
    <div class="dropend">
        <a class="burger" data-bs-toggle="dropdown">
            <span class="burger__line"></span>
            <span class="burger__line"></span>
            <span class="burger__line"></span>
        </a>
        <ul class="dropdown-menu bg-gray">
            <li><a class="dropdown-item active white" href="index.html">Главная</a></li>
            <li><a class="dropdown-item" href="https://vk.com/eugene_blogs_official">VK</a></li>
            <li><a class="dropdown-item" href="https://github.com/EugeneBlogs?tab=repositories">GitHub</a></li>
            <li><a class="dropdown-item" href="games.html">ИГРЫ НА ПК</a></li>
            <li><a class="dropdown-item" href="text-quest.html">(НЕ)выживши(Й/Е)</a></li>
            <li><a class="dropdown-item" href="text-quest-2.html">Операция "Борьба за жизнь"</a></li>
            <li><a class="dropdown-item" href="tic-tac-toe.html">Крестики-нолики</a></li>
            <li><a class="dropdown-item" href="words.html">Загадай-Угадай</a></li>
            <li><a class="dropdown-item" href="crocodile.html">Крокомист</a></li>
            <li><a class="dropdown-item" href="text-analysis.html">Анализ текста</a></li>
            <li><a class="dropdown-item" href="encryption.html">Шифрование текста</a></li>
            <li><a class="dropdown-item" href="password-generator.html">Генератор паролей</a></li>
            <li><a class="dropdown-item" href="antimate.html">JS-библиотека "!МАТ"</a></li>
            <li><a class="dropdown-item" href="storage.html">M.Storage</a></li>
        </ul>
    </div>
</header>
`
document.getElementById("computer-menu").style.display = "none";
document.getElementById("mobile-menu").style.display = "none";
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("mobile-menu").style.display = "block";
} else {
    document.getElementById("computer-menu").style.display = "block";
}

// Загрузка подвала
document.getElementById("load_footer").innerHTML =
    `
<footer class="mt-5 pb-3">
<div class="container">
    <div class="row">
        <div class="col-4">
            <p>© ${new Date().getUTCFullYear()} MylnikCode</p>
        </div>
        <div class="col-4">
            <p>Все права защищены.</p>
        </div>
        <div class="col-4">
            <p id="slogan">Creating the impossible!</p>
        </div>
    </div>
</div>
</footer>
`

// Смена заголовка страницы
var timer;
var counter = 0;
var start_title = document.title;
var message = 'MylnikCode';
timer = setInterval(function () {
    if (counter % 2) {
        document.title = start_title;
    } else {
        document.title = message;
    }
    counter++;
}, 2000);

// Печатающийся текст
$(document).ready(function () {
    var $element = $('#slogan');
    var phrases = [
        'Программируем будущее!',
        'Programming the future!',
    ];
    var index = -1;
    (function loopAnimation() {
        index = (index + 1) % phrases.length;
        bubbleText({
            element: $element,
            newText: phrases[index],
            letterSpeed: 70,
            callback: function () {
                setTimeout(loopAnimation, 3000);
            },
        });
    })();
});
