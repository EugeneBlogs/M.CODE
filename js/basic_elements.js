// Загрузка шапки
document.getElementById("load_header").innerHTML =
    `
    <header id="computer-menu">
    <nav>
        <ul class="topmenu">
            <li><a href="profile.html" class="profile" id="profile_tag_pc">Вход</a></li>
            <li><a href="index.html" class="active">Главная</a></li>
            <li><a href="https://vk.com/eugene_blogs_official" target="_blank">VK</a></li>
            <li><a href="https://github.com/EugeneBlogs?tab=repositories" target="_blank">GitHub</a></li>
            <li><a href="projects.html">Наши проекты ↓</a>
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
                            <li><a href="associations.html">Ассоциации</a></li>
                            <li><a href="from-to.html">От и До (18+)</a></li>
                            <li><a href="1-12.html">1-12</a></li>
                            <li><a href="vocabulary.html">Словарный запас</a></li>
                            <li><a href="cities.html">Города России</a></li>
                            <li><a href="who-am-I.html">Кто я?</a></li>
                            <li><a href="big-word.html">Слова из слова</a></li>
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
            <li><a class="dropdown-item profile white" href="profile.html" id="profile_tag_mobile">Вход</a></li>
            <li><a class="dropdown-item active white" href="index.html">Главная</a></li>
            <li><a class="dropdown-item" href="https://vk.com/eugene_blogs_official">VK</a></li>
            <li><a class="dropdown-item" href="https://github.com/EugeneBlogs?tab=repositories">GitHub</a></li>
            <li><a class="dropdown-item" href="projects.html">Наши проекты</a></li>
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
    <footer class="mt-4">
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

// Цитата
let texts =
    [
        ["Если хочешь идти новым путём, ты должен проложить его сам.", "Стив Джобс"],
        ["Не ждите. Время никогда не будет подходящим.", "Наполеон Хилл"],
        ["Я благодарен всем тем, кто сказал мне «Нет». Именно благодаря им я чего-то добился сам.", "Альберт Эйнштейн"],
        ["Есть только один способ избежать критики: ничего не делать, ничего не говорить и никем не быть.", "Аристотель"],
        ["Куда бы вы ни шли, идите туда со всем сердцем.", "Конфуций"],
        ["Каждый момент - это новое начало.", "Томас Стернз Элиот"],
        ["Простота - высшая степень изысканности.", "Леонардо да Винчи"],
        ["Мы знаем, кто мы есть, но не знаем, кем мы можем стать.", "Уильям Шекспир"],
        ["Вы никогда не увидите радугу, если будете смотреть вниз.", "Чарли Чаплин"],
        ["В моём словаре нет слова «невозможно».", "Наполеон Бонапарт"],
        ["Вы никогда не пересечёте океан, если не наберётесь мужества потерять берег из виду.", "Христофор Колумб"],
        ["У всего есть своя красота, но не каждый может её увидеть.", "Конфуций"],
        ["Поражение – не поражение, если только вы не признаете его таковым в своём сознании.", "Брюс Ли"],
        ["Сделай шаг и увидишь, как перед тобой появится дорога.", "Стив Джобс"],
        ["Многое кажется невозможным, пока ты этого не сделаешь.", "Нельсон Мандела"],
        ["Успех - это идти от неудачи к неудаче, не теряя энтузиазма.", "Уинстон Черчилль"],
        ["Не считай дни, извлекай из них пользу.", "Мухаммед Али"],
        ["Если вы потратите свою жизнь на то, чтобы быть лучшим во всём, вы никогда не станете великим ни в чём.", "Том Рат"],
        ["Измени свои мысли и ты изменишь мир.", "Норман Винсент Пил"],
        ["Победа - это ещё не всё, главное это постоянное желание побеждать.", "Винс Ломбарди"],
        ["Главная причина, по которой люди терпят неудачу в жизни, заключается в том, что они слушают своих друзей, семью и соседей.", "Наполеон Хилл"],
        ["С новым днём приходит новая сила и новые мысли.", "Элеонора Рузвельт"],
        ["Не смотрите на часы; делайте то, что они делают. Не останавливайтесь.", "Сэм Левенсон"],
        ["Даже если вы на правильном пути, вас переедут, если вы будете просто сидеть на месте.", "Уилл Роджерс"],
        ["Всегда делайте то, что вы боитесь делать.", "Ральф Уолдо Эмерсон"],
        ["Боль временна. Но если сдаться, она будет длиться вечно.", "Лэнс Армстронг"],
        ["Счастье зависит от нас самих.", "Аристотель"],
        ["Будьте настолько хороши, чтобы они не смогли вас игнорировать.", "Стив Мартин"],
        ["Никогда не жалейте о том, что заставило вас улыбнуться.", "Марк Твен"],
        ["Всё, что вы можете себе вообразить, реально.", "Пабло Пикассо"],
        ["Однажды ты проснёшься, но не будет больше времени на то, чтобы сделать то, что ты всегда хотел. Сделай это сейчас.", "Пауло Коэльо"],
        ["Гений — это один процент вдохновения и девяносто девять процентов пота.", "Томас Эдисон"],
        ["Всё получится, потому что выбора у меня нет.", "Аньес Мартен-Люган<br>«Счастливые люди читают книжки и пьют кофе»"]
    ]
function RND(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
let i = RND(0, texts.length)
if (document.getElementById("text-blockquote")) {
    document.getElementById("text-blockquote").innerHTML = texts[i][0]
    document.getElementById("author-blockquote").innerHTML = texts[i][1]
}

// Если осуществлён вход в профиль
if (sessionStorage.getItem("login") == "Yes") {
    let account = JSON.parse(localStorage.getItem("profile_mcode_profile"))
    document.getElementById("profile_tag_pc").innerHTML = account[1]
    document.getElementById("profile_tag_mobile").innerHTML = account[1]
}

// С днём рождения!
if (localStorage.getItem("profile_mcode_profile") != null) {
    let account = JSON.parse(localStorage.getItem("profile_mcode_profile"))
    let date = new Date()
    let mm = (date.getMonth() + 1).toString()
    let dd = date.getDate().toString()
    let mmChars = mm.split('')
    let ddChars = dd.split('')
    let result = (mmChars[1] ? mm : "0" + mmChars[0]) + '-' + (ddChars[1] ? dd : "0" + ddChars[0])
    let user = account[2].split('-')
    let user_birthday = `${user[1]}-${user[2]}`
    if (user_birthday == result) {
        if (document.getElementById("happy-birthday_text")) {
            document.getElementById("happy-birthday_text").innerHTML = `🎉С Днём Рождения, ${account[1]}!🎉<br>С вашим ${Number(date.getFullYear()) - user[0]}-летием!`
            document.getElementById("happy-birthday_text").style.display = "block"
        }
    }
}

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
