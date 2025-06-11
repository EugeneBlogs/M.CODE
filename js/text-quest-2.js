let egor = true
let alexandr = true
let andrey = true
let ilya = true
let nikolay = true

let num = 0;
let noz = false
let rana = false
let obrabotka_rany = false
let voda = false

let choose_1 = ""
let choose_2 = ""
let choose_3 = ""
let choose_4 = ""
let choose_5 = ""

if (localStorage.getItem("tq_level") == "" || localStorage.getItem("tq_level") == null) {
  document.getElementById("btn-save").style.color = "gray"
}

function StartGame() {
  document.getElementById("start").style.display = "none"
  document.getElementById("game").style.display = "block"
  document.getElementById("message").innerHTML =
    `
<span style="color: cyan;">Вы просыпаетесь в каком-то странном месте.</span><br>
<span style="color: cyan;">Повсюду осколки стекла и куски стен.</span><br>
`
  document.getElementById("text-variant1").innerHTML = "Крикнуть"
  document.getElementById("text-variant2").innerHTML = "Осмотреться"
  SaveData()
}

function Continue() {
  if (num == 0) {
    if (document.getElementById("variant1").checked) {
      choose_1 = "1"
      document.getElementById("message").innerHTML =
        `
        <span style="color: lawngreen;">Егор:</span> (кричит) Есть кто живой?<br>
        <span style="color: lawngreen;">Зомби:</span> (кряхтит)<br>
        <span style="color: cyan;">Вы слышите медленные приближающиеся шаги зомби.</span><br>
        <span style="color: cyan;">Вы в панике выходите через разбитое окно, но задеваете торчащий осколок рукой. Нужно скорее обработать рану.</span><br>
  `
      rana = true
    } else {
      choose_1 = "2"
      document.getElementById("message").innerHTML =
        `
        <span style="color: cyan;">Вы начинаете осматриваться и находите нож. Теперь вы сможете защититься от зомби.</span><br>
        <span style="color: cyan;">Затем вы спокойно выходите через разбитое окно.</span><br>
  `
      noz = true
    }
    document.getElementById("message").innerHTML +=
      `
<span style="color: cyan;">На улице вы видите здания, которые вот-вот разрушатся.</span><br>
<span style="color: cyan;">Вокруг ни души.</span><br>
`
    document.getElementById("text-variant1").innerHTML = "Осмотреться"
    document.getElementById("text-variant2").innerHTML = "Идти дальше"
  }
  if (num == 1) {
    if (document.getElementById("variant1").checked) {
      choose_2 = "1"
      if (rana) {
        obrabotka_rany = true
        document.getElementById("message").innerHTML =
          `
        <span style="color: cyan;">Из подручных средств вы перевязываете рану и вытираете кровь.</span><br>
  `
      } else {
        document.getElementById("message").innerHTML =
          `
        <span style="color: cyan;">Ничего полезного вы не нашли. Продолжаем движение.</span><br>
  `
      }
      document.getElementById("message").innerHTML +=
        `
      <span style="color: cyan;">По дороге вы слышите шаги. Вы замечаете своего одноклассника и со всех ног бежите к нему.</span><br>
      <span style="color: lawngreen;">Егор:</span> Андрей! Андрей! Привет! Ты как? В порядке?<br>
      <span style="color: lawngreen;">Андрей:</span> О, Егор! Да, пока всё хорошо. У тебя как?<br>
`
      if (obrabotka_rany) {
        voda = true
        document.getElementById("message").innerHTML +=
          `
      <span style="color: lawngreen;">Егор:</span> Вот немного порезался, но уже всё в порядке.<br>
      <span style="color: lawngreen;">Андрей:</span> Ну и хорошо!<br>
      <span style="color: lawngreen;">Егор:</span> Где остальные ребята?<br>
      <span style="color: lawngreen;">Андрей:</span> Мы нашли крутое убежище!<br>
      <span style="color: lawngreen;">Егор:</span> Ого, пошли!<br>
      <span style="color: lawngreen;">Андрей:</span> Подожди секунду.<br>
      <span style="color: cyan;">Андрей замечает что-то в траве.</span><br>
      <span style="color: lawngreen;">Андрей:</span> Смотри, бутылка воды!<br>
      <span style="color: lawngreen;">Егор:</span> Круто! Она нам очень пригодится!<br>
      <span style="color: cyan;">Вы отправляетесь в убежище!</span><br>
`
      } else if (rana) {
        document.getElementById("message").innerHTML +=
          `
      <span style="color: lawngreen;">Егор:</span> Немного порезался, но ничего.<br>
      <span style="color: lawngreen;">Андрей:</span> Ого! Нужно скорее перемотать рану! Зомби учуют кровь и побегут за нами.<br>
      <span style="color: cyan;">Андрей помогает перевязать рану из подручных средств.</span><br>
      <span style="color: cyan;">Но вдруг, вы замечаете вдали толпу зомби.</span><br>
      <span style="color: lawngreen;">Андрей:</span> Я уже говорил! Побежали в убежище! Там нас ждут Саня, Илья и Колян!<br>
      <span style="color: lawngreen;">Егор:</span> Окей, погнали!<br>
`
      } else {
        voda = true
        document.getElementById("message").innerHTML +=
          `
      <span style="color: lawngreen;">Егор:</span> У меня тоже всё нормально. Где остальные ребята?<br>
      <span style="color: lawngreen;">Андрей:</span> Мы нашли крутое убежище!<br>
      <span style="color: lawngreen;">Егор:</span> Ого, пошли!<br>
      <span style="color: lawngreen;">Андрей:</span> Подожди секунду.<br>
      <span style="color: cyan;">Андрей замечает что-то в траве.</span><br>
      <span style="color: lawngreen;">Андрей:</span> Смотри, бутылка воды!<br>
      <span style="color: lawngreen;">Егор:</span> Круто! Она нам очень пригодится!<br>
      <span style="color: cyan;">Вы отправляетесь в убежище!</span><br>
`
      }
      document.getElementById("message").innerHTML +=
        `
      <span style="color: cyan;">Вы доходите до небольшого сарая.</span><br>
      <span style="color: lawngreen;">Александр, Илья, Николай:</span> (хором) О, Егор, привет!<br>
`
    } else {
      choose_2 = "2"
      document.getElementById("message").innerHTML =
        `
        <span style="color: cyan;">По дороге вы слышите шаги. Вы замечаете своего одноклассника и со всех ног бежите к нему.</span><br>
        <span style="color: lawngreen;">Егор:</span> Андрей! Андрей! Привет! Ты как? В порядке?<br>
        <span style="color: lawngreen;">Андрей:</span> О, Егор! Да, пока всё хорошо. У тебя как?<br>
  `
      if (obrabotka_rany) {
        voda = true
        document.getElementById("message").innerHTML +=
          `
        <span style="color: lawngreen;">Егор:</span> Вот немного порезался, но уже всё в порядке.<br>
        <span style="color: lawngreen;">Андрей:</span> Ну и хорошо!<br>
        <span style="color: lawngreen;">Егор:</span> Где остальные ребята?<br>
        <span style="color: lawngreen;">Андрей:</span> Мы нашли крутое убежище!<br>
        <span style="color: lawngreen;">Егор:</span> Ого, пошли!<br>
        <span style="color: lawngreen;">Андрей:</span> Подожди секунду.<br>
        <span style="color: cyan;">Андрей замечает что-то в траве.</span><br>
        <span style="color: lawngreen;">Андрей:</span> Смотри, бутылка воды!<br>
        <span style="color: lawngreen;">Егор:</span> Круто! Она нам очень пригодится!<br>
        <span style="color: cyan;">Вы отправляетесь в убежище!</span><br>
  `
      } else if (rana) {
        document.getElementById("message").innerHTML +=
          `
        <span style="color: lawngreen;">Егор:</span> Немного порезался, но ничего.<br>
        <span style="color: lawngreen;">Андрей:</span> Ого! Нужно скорее перемотать рану! Зомби учуют кровь и побегут за нами.<br>
        <span style="color: cyan;">Андрей помогает перевязать рану из подручных средств.</span><br>
        <span style="color: cyan;">Но вдруг, вы замечаете вдали толпу зомби.</span><br>
        <span style="color: lawngreen;">Андрей:</span> Я уже говорил! Побежали в убежище! Там нас ждут Саня, Илья и Колян!<br>
        <span style="color: lawngreen;">Егор:</span> Окей, погнали!<br>
  `
      } else {
        voda = true
        document.getElementById("message").innerHTML +=
          `
        <span style="color: lawngreen;">Егор:</span> У меня тоже всё нормально. Где остальные ребята?<br>
        <span style="color: lawngreen;">Андрей:</span> Мы нашли крутое убежище!<br>
        <span style="color: lawngreen;">Егор:</span> Ого, пошли!<br>
        <span style="color: lawngreen;">Андрей:</span> Подожди секунду.<br>
        <span style="color: cyan;">Андрей замечает что-то в траве.</span><br>
        <span style="color: lawngreen;">Андрей:</span> Смотри, бутылка воды!<br>
        <span style="color: lawngreen;">Егор:</span> Круто! Она нам очень пригодится!<br>
        <span style="color: cyan;">Вы отправляетесь в убежище!</span><br>
  `
      }
      document.getElementById("message").innerHTML +=
        `
        <span style="color: cyan;">Вы доходите до небольшого сарая.</span><br>
        <span style="color: lawngreen;">Александр, Илья, Николай:</span> (хором) О, Егор, привет!<br>
  `
    }
    document.getElementById("text-variant1").innerHTML = "Вежливо"
    document.getElementById("text-variant2").innerHTML = "Безразлично"
  }
  if (num == 2) {
    if (document.getElementById("variant1").checked) {
      choose_3 = "1"
      document.getElementById("message").innerHTML =
        `
        <span style="color: lawngreen;">Егор:</span> Привет! Я так рад, что с вами всё хорошо.<br>
        <span style="color: lawngreen;">Александр:</span> Да, мы тоже!<br>
        <span style="color: lawngreen;">Илья:</span> Ты нашёл что-нибудь полезное?<br>
  `
      if (noz) {
        document.getElementById("message").innerHTML +=
          `
    <span style="color: lawngreen;">Егор:</span> (показывает) Да, у меня есть нож!<br>
    <span style="color: lawngreen;">Илья:</span> О, круто!<br>
    <span style="color: lawngreen;">Егор:</span> А у вас что?<br>
    <span style="color: lawngreen;">Николай:</span> У нас только небольшая палка.<br>
    <span style="color: lawngreen;">Егор:</span> В целях защиты, в принципе сойдёт.<br>
`
      } else {
        document.getElementById("message").innerHTML +=
          `
    <span style="color: lawngreen;">Егор:</span> Нет, ничего!<br>
    <span style="color: lawngreen;">Николай:</span> А у нас только небольшая палка.<br>
    <span style="color: lawngreen;">Егор:</span> И то хорошо.<br>
`
      }
    } else {
      choose_3 = "2"
      document.getElementById("message").innerHTML =
        `
        <span style="color: lawngreen;">Егор:</span> Привет! Вы нашли что-нибудь полезное?<br>
        <span style="color: lawngreen;">Николай:</span> Тебе настолько всё равно, что ты даже не поинтересовался всё ли у нас хорошо?<br>
        <span style="color: lawngreen;">Егор:</span> Сейчас на это времени нет! Я и так вижу, что всё хорошо!<br>
        <span style="color: lawngreen;">Николай:</span> Мм.. Мы палку нашли.<br>
  `
      if (noz) {
        document.getElementById("message").innerHTML +=
          `
    <span style="color: lawngreen;">Егор:</span> Круто! (показывает) А я вот нож!<br>
`
      } else {
        document.getElementById("message").innerHTML +=
          `
    <span style="color: lawngreen;">Егор:</span> Круто! А я пока ничего не нашёл!<br>
`
      }
    }
    document.getElementById("message").innerHTML +=
      `
    <span style="color: cyan;">Егор присаживается к ребятам.</span><br>
    <span style="color: lawngreen;">Андрей:</span> Что же нам теперь делать?<br>
    <span style="color: lawngreen;">Александр:</span> Ну уж точно не тут сидеть!<br>
    <span style="color: lawngreen;">Илья:</span> Нам нужно найти безопасное место!<br>
    <span style="color: lawngreen;">Николай:</span> И где же его искать?<br>
    <span style="color: lawngreen;">Егор:</span> Точно найти мы не сможем! Нам нужно просто куда-нибудь идти и искать средства защиты.<br>
    <span style="color: lawngreen;">Александр:</span> Ладно, ребят! Собираемся и в путь!<br>
    <span style="color: cyan;">Вы снова на улице.</span><br>
`
    document.getElementById("text-variant1").innerHTML = "Зайти в здание"
    document.getElementById("text-variant2").innerHTML = "Идти вперёд"
  }
  if (num == 3) {
    if (document.getElementById("variant1").checked) {
      choose_4 = "1"
      document.getElementById("message").innerHTML =
        `
    <span style="color: lawngreen;">Егор:</span> Ребят, давайте осмотрим это здание?<br>
    <span style="color: lawngreen;">Николай:</span> Вперёд.<br>
    <span style="color: cyan;">Вы тихонько открываете дверь.</span><br>
    <span style="color: lawngreen;">Андрей:</span> Ребят, давайте разделимся!<br>
    <span style="color: lawngreen;">Александр:</span> Типичное начало любого фильма ужасов. Группа делится, а затем кто-то умирает.<br>
    <span style="color: lawngreen;">Андрей:</span> Да всё будет норм. Если вдруг заметите что-то подозрительное, кричите: "ИСПАААНЦЫ!".<br>
    <span style="color: lawngreen;">Александр:</span> Ахах, хорошо!<br>
    <span style="color: cyan;">Вы осматриваете здание и находите какую-то потрёпанную верёвку.</span><br>
    <span style="color: lawngreen;">Илья:</span> ИСПАААНЦЫ!<br>
    <span style="color: cyan;">Вы собираетесь вместе и тихонько идёте на звук. Вдруг из-за стены выпрыгивает зомби.</span><br>
`
      if (noz) {
        document.getElementById("message").innerHTML +=
          `
  <span style="color: lawngreen;">Егор:</span> *бьёт зомби ножом*<br>
  <span style="color: lawngreen;">Николай:</span> Фух, пронесло.<br>
  <span style="color: lawngreen;">Андрей:</span> Да, меня тоже!<br>
`
      } else {
        document.getElementById("message").innerHTML +=
          `
  <span style="color: lawngreen;">Николай:</span> *бьёт зомби палкой*<br>
  <span style="color: cyan;">Зомби падает, но немного шевелится.</span><br>
  <span style="color: lawngreen;">Егор:</span> Мне кажется, что он скоро очнётся!<br>
  <span style="color: lawngreen;">Александр:</span> Значит действует быстро!<br>
`
      }
      document.getElementById("message").innerHTML +=
        `
<span style="color: cyan;">Вы подбегаете к Илье.</span><br>
<span style="color: lawngreen;">Андрей:</span> Илья, что случилось?<br>
<span style="color: lawngreen;">Илья:</span> (показывает укус) Вот.<br>
<span style="color: lawngreen;">Андрей:</span> Оу.<br>
`
      if (voda) {
        document.getElementById("message").innerHTML +=
          `
<span style="color: lawngreen;">Андрей:</span> У нас же есть вода!<br>
<span style="color: lawngreen;">Александр:</span> Точно! Промоем рану!<br>
<span style="color: cyan;">Вы промываете рану. Илье становится легче.</span><br>
`
      } else {
        ilya = false
        document.getElementById("message").innerHTML +=
          `
<span style="color: lawngreen;">Александр:</span> К сожалению, это всё. Инфекция скоро начнёт распространяться.<br>
<span style="color: cyan;">Вы помогаете Илье встать, но у него уже нет сил, и он снова падает.</span><br>
<span style="color: lawngreen;">Илья:</span> Идите без меня.<br>
<span style="color: lawngreen;">Андрей:</span> Нет, как мы можем!<br>
<span style="color: lawngreen;">Илья:</span> Можете...<br>
<span style="color: lawngreen;">Илья:</span> *погибает*<br>
`
      }
      if (!noz) {
        nikolay = false
        document.getElementById("message").innerHTML +=
          `
<span style="color: cyan;">Вы оборачиваетесь и видите, что зомби очнулся и уже подходит к вам. У вас нет выбора. Вы прыгаете в окно со второго этажа. Всё бы ничего. Только...</span><br>
<span style="color: lawngreen;">Николай:</span> Ааа!<br>
<span style="color: lawngreen;">Андрей:</span> Что случилось?<br>
<span style="color: lawngreen;">Николай:</span> А, нога!<br>
<span style="color: cyan;">Николай ушиб ногу при падении. Вы помогаете ему встать и дойти до сарая.</span><br>
<span style="color: lawngreen;">Андрей:</span> Сиди пока тут. Мы скоро вернёмся.<br>
<span style="color: lawngreen;">Николай:</span> Хорошо!<br>
<span style="color: cyan;">Плохое решение было оставить его без присмотра. На Николая нападут зомби, и он погибнет...</span><br>
<span style="color: cyan;">Но остальные ребята идут дальше.</span><br>
`
      } else {
        document.getElementById("message").innerHTML +=
          `
<span style="color: cyan;">Вы снова выходите на улицу.</span><br>
`
      }
      document.getElementById("message").innerHTML +=
        `
<span style="color: cyan;">Вы идёте вперёд и находите открытую машину.</span><br>
<span style="color: lawngreen;">Андрей:</span> О, тачка!<br>
<span style="color: lawngreen;">Александр:</span> Круто, давайте обыщем!<br>
<span style="color: cyan;">Вы не находите ничего интересного. Но машина заводится.</span><br>
<span style="color: lawngreen;">Егор:</span> Давайте куда-нибудь поедем?<br>
<span style="color: lawngreen;">Александр:</span> Поехали!<br>
<span style="color: lawngreen;">Андрей:</span> Куда?<br>
<span style="color: lawngreen;">Егор:</span> Куда-нибудь. Мало ли, что интересного в пути увидим.<br>
<span style="color: cyan;">Перед вами развилка.</span><br>
`
    } else {
      choose_4 = "2"
      document.getElementById("message").innerHTML =
        `
    <span style="color: cyan;">Вы идёте вперёд и находите открытую машину.</span><br>
    <span style="color: lawngreen;">Андрей:</span> О, тачка!<br>
    <span style="color: lawngreen;">Александр:</span> Круто, давайте обыщем!<br>
    <span style="color: cyan;">Вы не находите ничего интересного. Но машина заводится.</span><br>
    <span style="color: lawngreen;">Егор:</span> Давайте куда-нибудь поедем?<br>
    <span style="color: lawngreen;">Александр:</span> Поехали!<br>
    <span style="color: lawngreen;">Андрей:</span> Куда?<br>
    <span style="color: lawngreen;">Егор:</span> Куда-нибудь. Мало ли, что интересного в пути увидим.<br>
    <span style="color: cyan;">Перед вами развилка.</span><br>
    `
    }
    document.getElementById("text-variant1").innerHTML = "Налево"
    document.getElementById("text-variant2").innerHTML = "Направо"
  }
  if (num == 4) {
    if (document.getElementById("variant1").checked) {
      choose_5 = "1"
      egor = false
      alexandr = false
      andrey = false
      ilya = false
      nikolay = false
      document.getElementById("message").innerHTML =
        `
    <span style="color: cyan;">Вы едете налево. Вдруг, на вас бежит толма зомби. В машине резко кончается топливо.</span><br>
    <span style="color: lawngreen;">Егор:</span> Что делать?<br>
    <span style="color: lawngreen;">Андрей:</span> Уже поздно что-то делать.<br>
    <span style="color: cyan;">Зомби окружают машину и начинают бить стёкла.</span><br>
    <span style="color: cyan;">Все герои погибают.</span><br>
    `
    } else {
      choose_5 = "2"
      document.getElementById("message").innerHTML =
        `
  <span style="color: cyan;">Вы едете направо. Вдруг, в машине кончается топливо.</span><br>
  <span style="color: lawngreen;">Егор:</span> Что делать?<br>
  <span style="color: lawngreen;">Андрей:</span> Выходить и идти пешком.<br>
  <span style="color: cyan;">Через некоторое время, вы слышите какой-то шорох. Тут из-за дерева выпрыгивает зомби.</span><br>
  `
      if (noz) {
        document.getElementById("message").innerHTML +=
          `
<span style="color: lawngreen;">Егор:</span> *убивает зомби ножом*<br>
<span style="color: lawngreen;">Андрей:</span> Отлично!<br>
`
      } else if (!noz && !nikolay) {
        alexandr = false
        document.getElementById("message").innerHTML +=
          `
          <span style="color: cyan;">Зомби хватает Александра и начинает пожирать. Остальные убегают.</span><br>
`
      } else if (!noz && nikolay) {
        document.getElementById("message").innerHTML +=
          `
<span style="color: lawngreen;">Николай:</span> *убивает зомби палкой*<br>
<span style="color: lawngreen;">Андрей:</span> Отлично!<br>
`
      }
      document.getElementById("message").innerHTML +=
        `
        <span style="color: cyan;">Уже темнеет. Ребята нашли место для сна. Все укладываются и засыпают.</span><br>
        <span style="color: cyan;">Утром вы выходите на улицу, а мир снова живёт прежней жизнью. Здания в полном порядке. На улице толпы весёлых людей. Как такое возможно остаётся загадкой.</span><br>
`
      if (!alexandr || !andrey || !ilya || !nikolay) {
        document.getElementById("message").innerHTML +=
          `
  <span style="color: cyan;">Но, к сожалению, погибших не вернуть.</span><br>
`
      }
    }
    document.getElementById("text-variant1").innerHTML = "Продолжить"
    document.getElementById("text-variant2").innerHTML = "Продолжить"
  }
  if (num == 5) {
    End()
  }
  num++
  if (num != 6)
    SaveData()
}

function ContinueGame() {
  if (localStorage.getItem("tq_level") == "" || localStorage.getItem("tq_level") == null) {
    alert("У вас нет сохранений!")
  } else {
    document.getElementById("start").style.display = "none"
    document.getElementById("game").style.display = "block"
    num = localStorage.getItem("tq_level")
    choose_1 = localStorage.getItem("tq_ch1")
    choose_2 = localStorage.getItem("tq_ch2")
    choose_3 = localStorage.getItem("tq_ch3")
    choose_4 = localStorage.getItem("tq_ch4")
    choose_5 = localStorage.getItem("tq_ch5")
    if (localStorage.getItem("tq_noz") == "0") {
      noz = false
    } else {
      noz = true
    }
    if (localStorage.getItem("tq_rana") == "0") {
      rana = false
    } else {
      rana = true
    }
    if (localStorage.getItem("tq_obrabotka") == "0") {
      obrabotka_rany = false
    } else {
      obrabotka_rany = true
    }
    if (localStorage.getItem("tq_voda") == "0") {
      voda = false
    } else {
      voda = true
    }
    if (localStorage.getItem("tq_egor") == "0") {
      egor = false
    } else {
      egor = true
    }
    if (localStorage.getItem("tq_alexandr") == "0") {
      alexandr = false
    } else {
      alexandr = true
    }
    if (localStorage.getItem("tq_andrey") == "0") {
      andrey = false
    } else {
      andrey = true
    }
    if (localStorage.getItem("tq_ilya") == "0") {
      ilya = false
    } else {
      ilya = true
    }
    if (localStorage.getItem("tq_nikolay") == "0") {
      nikolay = false
    } else {
      nikolay = true
    }
  }
  if (num == 0) {
    document.getElementById("message").innerHTML =
      `
<span style="color: cyan;">Вы просыпаетесь в каком-то странном месте.</span><br>
<span style="color: cyan;">Повсюду осколки стекла и куски стен.</span><br>
`
    document.getElementById("text-variant1").innerHTML = "Крикнуть"
    document.getElementById("text-variant2").innerHTML = "Осмотреться"
  }
  if (num == 1) {
    if (choose_1 == "1") {
      document.getElementById("message").innerHTML =
        `
        <span style="color: lawngreen;">Егор:</span> (кричит) Есть кто живой?<br>
        <span style="color: lawngreen;">Зомби:</span> (кряхтит)<br>
        <span style="color: cyan;">Вы слышите медленные приближающиеся шаги зомби.</span><br>
        <span style="color: cyan;">Вы в панике выходите через разбитое окно, но задеваете торчащий осколок рукой. Нужно скорее обработать рану.</span><br>
  `
      rana = true
    } else {
      document.getElementById("message").innerHTML =
        `
        <span style="color: cyan;">Вы начинаете осматриваться и находите нож. Теперь вы сможете защититься от зомби.</span><br>
        <span style="color: cyan;">Затем вы спокойно выходите через разбитое окно.</span><br>
  `
      noz = true
    }
    document.getElementById("message").innerHTML +=
      `
<span style="color: cyan;">На улице вы видите здания, которые вот-вот разрушатся.</span><br>
<span style="color: cyan;">Вокруг ни души.</span><br>
`
    document.getElementById("text-variant1").innerHTML = "Осмотреться"
    document.getElementById("text-variant2").innerHTML = "Идти дальше"
  }
  if (num == 2) {
    if (choose_2 == "1") {
      if (rana) {
        obrabotka_rany = true
        document.getElementById("message").innerHTML =
          `
        <span style="color: cyan;">Из подручных средств вы перевязываете рану и вытираете кровь.</span><br>
  `
      } else {
        document.getElementById("message").innerHTML =
          `
        <span style="color: cyan;">Ничего полезного вы не нашли. Продолжаем движение.</span><br>
  `
      }
      document.getElementById("message").innerHTML +=
        `
      <span style="color: cyan;">По дороге вы слышите шаги. Вы замечаете своего одноклассника и со всех ног бежите к нему.</span><br>
      <span style="color: lawngreen;">Егор:</span> Андрей! Андрей! Привет! Ты как? В порядке?<br>
      <span style="color: lawngreen;">Андрей:</span> О, Егор! Да, пока всё хорошо. У тебя как?<br>
`
      if (obrabotka_rany) {
        voda = true
        document.getElementById("message").innerHTML +=
          `
      <span style="color: lawngreen;">Егор:</span> Вот немного порезался, но уже всё в порядке.<br>
      <span style="color: lawngreen;">Андрей:</span> Ну и хорошо!<br>
      <span style="color: lawngreen;">Егор:</span> Где остальные ребята?<br>
      <span style="color: lawngreen;">Андрей:</span> Мы нашли крутое убежище!<br>
      <span style="color: lawngreen;">Егор:</span> Ого, пошли!<br>
      <span style="color: lawngreen;">Андрей:</span> Подожди секунду.<br>
      <span style="color: cyan;">Андрей замечает что-то в траве.</span><br>
      <span style="color: lawngreen;">Андрей:</span> Смотри, бутылка воды!<br>
      <span style="color: lawngreen;">Егор:</span> Круто! Она нам очень пригодится!<br>
      <span style="color: cyan;">Вы отправляетесь в убежище!</span><br>
`
      } else if (rana) {
        document.getElementById("message").innerHTML +=
          `
      <span style="color: lawngreen;">Егор:</span> Немного порезался, но ничего.<br>
      <span style="color: lawngreen;">Андрей:</span> Ого! Нужно скорее перемотать рану! Зомби учуют кровь и побегут за нами.<br>
      <span style="color: cyan;">Андрей помогает перевязать рану из подручных средств.</span><br>
      <span style="color: cyan;">Но вдруг, вы замечаете вдали толпу зомби.</span><br>
      <span style="color: lawngreen;">Андрей:</span> Я уже говорил! Побежали в убежище! Там нас ждут Саня, Илья и Колян!<br>
      <span style="color: lawngreen;">Егор:</span> Окей, погнали!<br>
`
      } else {
        voda = true
        document.getElementById("message").innerHTML +=
          `
      <span style="color: lawngreen;">Егор:</span> У меня тоже всё нормально. Где остальные ребята?<br>
      <span style="color: lawngreen;">Андрей:</span> Мы нашли крутое убежище!<br>
      <span style="color: lawngreen;">Егор:</span> Ого, пошли!<br>
      <span style="color: lawngreen;">Андрей:</span> Подожди секунду.<br>
      <span style="color: cyan;">Андрей замечает что-то в траве.</span><br>
      <span style="color: lawngreen;">Андрей:</span> Смотри, бутылка воды!<br>
      <span style="color: lawngreen;">Егор:</span> Круто! Она нам очень пригодится!<br>
      <span style="color: cyan;">Вы отправляетесь в убежище!</span><br>
`
      }
      document.getElementById("message").innerHTML +=
        `
      <span style="color: cyan;">Вы доходите до небольшого сарая.</span><br>
      <span style="color: lawngreen;">Александр, Илья, Николай:</span> (хором) О, Егор, привет!<br>
`
    } else {
      document.getElementById("message").innerHTML =
        `
        <span style="color: cyan;">По дороге вы слышите шаги. Вы замечаете своего одноклассника и со всех ног бежите к нему.</span><br>
        <span style="color: lawngreen;">Егор:</span> Андрей! Андрей! Привет! Ты как? В порядке?<br>
        <span style="color: lawngreen;">Андрей:</span> О, Егор! Да, пока всё хорошо. У тебя как?<br>
  `
      if (obrabotka_rany) {
        voda = true
        document.getElementById("message").innerHTML +=
          `
        <span style="color: lawngreen;">Егор:</span> Вот немного порезался, но уже всё в порядке.<br>
        <span style="color: lawngreen;">Андрей:</span> Ну и хорошо!<br>
        <span style="color: lawngreen;">Егор:</span> Где остальные ребята?<br>
        <span style="color: lawngreen;">Андрей:</span> Мы нашли крутое убежище!<br>
        <span style="color: lawngreen;">Егор:</span> Ого, пошли!<br>
        <span style="color: lawngreen;">Андрей:</span> Подожди секунду.<br>
        <span style="color: cyan;">Андрей замечает что-то в траве.</span><br>
        <span style="color: lawngreen;">Андрей:</span> Смотри, бутылка воды!<br>
        <span style="color: lawngreen;">Егор:</span> Круто! Она нам очень пригодится!<br>
        <span style="color: cyan;">Вы отправляетесь в убежище!</span><br>
  `
      } else if (rana) {
        document.getElementById("message").innerHTML +=
          `
        <span style="color: lawngreen;">Егор:</span> Немного порезался, но ничего.<br>
        <span style="color: lawngreen;">Андрей:</span> Ого! Нужно скорее перемотать рану! Зомби учуют кровь и побегут за нами.<br>
        <span style="color: cyan;">Андрей помогает перевязать рану из подручных средств.</span><br>
        <span style="color: cyan;">Но вдруг, вы замечаете вдали толпу зомби.</span><br>
        <span style="color: lawngreen;">Андрей:</span> Я уже говорил! Побежали в убежище! Там нас ждут Саня, Илья и Колян!<br>
        <span style="color: lawngreen;">Егор:</span> Окей, погнали!<br>
  `
      } else {
        voda = true
        document.getElementById("message").innerHTML +=
          `
        <span style="color: lawngreen;">Егор:</span> У меня тоже всё нормально. Где остальные ребята?<br>
        <span style="color: lawngreen;">Андрей:</span> Мы нашли крутое убежище!<br>
        <span style="color: lawngreen;">Егор:</span> Ого, пошли!<br>
        <span style="color: lawngreen;">Андрей:</span> Подожди секунду.<br>
        <span style="color: cyan;">Андрей замечает что-то в траве.</span><br>
        <span style="color: lawngreen;">Андрей:</span> Смотри, бутылка воды!<br>
        <span style="color: lawngreen;">Егор:</span> Круто! Она нам очень пригодится!<br>
        <span style="color: cyan;">Вы отправляетесь в убежище!</span><br>
  `
      }
      document.getElementById("message").innerHTML +=
        `
        <span style="color: cyan;">Вы доходите до небольшого сарая.</span><br>
        <span style="color: lawngreen;">Александр, Илья, Николай:</span> (хором) О, Егор, привет!<br>
  `
    }
    document.getElementById("text-variant1").innerHTML = "Вежливо"
    document.getElementById("text-variant2").innerHTML = "Безразлично"
  }
  if (num == 3) {
    if (choose_3 == "1") {
      document.getElementById("message").innerHTML =
        `
        <span style="color: lawngreen;">Егор:</span> Привет! Я так рад, что с вами всё хорошо.<br>
        <span style="color: lawngreen;">Александр:</span> Да, мы тоже!<br>
        <span style="color: lawngreen;">Илья:</span> Ты нашёл что-нибудь полезное?<br>
  `
      if (noz) {
        document.getElementById("message").innerHTML +=
          `
    <span style="color: lawngreen;">Егор:</span> (показывает) Да, у меня есть нож!<br>
    <span style="color: lawngreen;">Илья:</span> О, круто!<br>
    <span style="color: lawngreen;">Егор:</span> А у вас что?<br>
    <span style="color: lawngreen;">Николай:</span> У нас только небольшая палка.<br>
    <span style="color: lawngreen;">Егор:</span> В целях защиты, в принципе сойдёт.<br>
`
      } else {
        document.getElementById("message").innerHTML +=
          `
    <span style="color: lawngreen;">Егор:</span> Нет, ничего!<br>
    <span style="color: lawngreen;">Николай:</span> А у нас только небольшая палка.<br>
    <span style="color: lawngreen;">Егор:</span> И то хорошо.<br>
`
      }
    } else {
      document.getElementById("message").innerHTML =
        `
        <span style="color: lawngreen;">Егор:</span> Привет! Вы нашли что-нибудь полезное?<br>
        <span style="color: lawngreen;">Николай:</span> Тебе настолько всё равно, что ты даже не поинтересовался всё ли у нас хорошо?<br>
        <span style="color: lawngreen;">Егор:</span> Сейчас на это времени нет! Я и так вижу, что всё хорошо!<br>
        <span style="color: lawngreen;">Николай:</span> Мм.. Мы палку нашли.<br>
  `
      if (noz) {
        document.getElementById("message").innerHTML +=
          `
    <span style="color: lawngreen;">Егор:</span> Круто! (показывает) А я вот нож!<br>
`
      } else {
        document.getElementById("message").innerHTML +=
          `
    <span style="color: lawngreen;">Егор:</span> Круто! А я пока ничего не нашёл!<br>
`
      }
    }
    document.getElementById("message").innerHTML +=
      `
    <span style="color: cyan;">Егор присаживается к ребятам.</span><br>
    <span style="color: lawngreen;">Андрей:</span> Что же нам теперь делать?<br>
    <span style="color: lawngreen;">Александр:</span> Ну уж точно не тут сидеть!<br>
    <span style="color: lawngreen;">Илья:</span> Нам нужно найти безопасное место!<br>
    <span style="color: lawngreen;">Николай:</span> И где же его искать?<br>
    <span style="color: lawngreen;">Егор:</span> Точно найти мы не сможем! Нам нужно просто куда-нибудь идти и искать средства защиты.<br>
    <span style="color: lawngreen;">Александр:</span> Ладно, ребят! Собираемся и в путь!<br>
    <span style="color: cyan;">Вы снова на улице.</span><br>
`
    document.getElementById("text-variant1").innerHTML = "Зайти в здание"
    document.getElementById("text-variant2").innerHTML = "Идти вперёд"
  }
  if (num == 4) {
    if (choose_4 == "1") {
      document.getElementById("message").innerHTML =
        `
    <span style="color: lawngreen;">Егор:</span> Ребят, давайте осмотрим это здание?<br>
    <span style="color: lawngreen;">Николай:</span> Вперёд.<br>
    <span style="color: cyan;">Вы тихонько открываете дверь.</span><br>
    <span style="color: lawngreen;">Андрей:</span> Ребят, давайте разделимся!<br>
    <span style="color: lawngreen;">Александр:</span> Типичное начало любого фильма ужасов. Группа делится, а затем кто-то умирает.<br>
    <span style="color: lawngreen;">Андрей:</span> Да всё будет норм. Если вдруг заметите что-то подозрительное, кричите: "ИСПАААНЦЫ!".<br>
    <span style="color: lawngreen;">Александр:</span> Ахах, хорошо!<br>
    <span style="color: cyan;">Вы осматриваете здание и находите какую-то потрёпанную верёвку.</span><br>
    <span style="color: lawngreen;">Илья:</span> ИСПАААНЦЫ!<br>
    <span style="color: cyan;">Вы собираетесь вместе и тихонько идёте на звук. Вдруг из-за стены выпрыгивает зомби.</span><br>
`
      if (noz) {
        document.getElementById("message").innerHTML +=
          `
  <span style="color: lawngreen;">Егор:</span> *бьёт зомби ножом*<br>
  <span style="color: lawngreen;">Николай:</span> Фух, пронесло.<br>
  <span style="color: lawngreen;">Андрей:</span> Да, меня тоже!<br>
`
      } else {
        document.getElementById("message").innerHTML +=
          `
  <span style="color: lawngreen;">Николай:</span> *бьёт зомби палкой*<br>
  <span style="color: cyan;">Зомби падает, но немного шевелится.</span><br>
  <span style="color: lawngreen;">Егор:</span> Мне кажется, что он скоро очнётся!<br>
  <span style="color: lawngreen;">Александр:</span> Значит действует быстро!<br>
`
      }
      document.getElementById("message").innerHTML +=
        `
<span style="color: cyan;">Вы подбегаете к Илье.</span><br>
<span style="color: lawngreen;">Андрей:</span> Илья, что случилось?<br>
<span style="color: lawngreen;">Илья:</span> (показывает укус) Вот.<br>
<span style="color: lawngreen;">Андрей:</span> Оу.<br>
`
      if (voda) {
        document.getElementById("message").innerHTML +=
          `
<span style="color: lawngreen;">Андрей:</span> У нас же есть вода!<br>
<span style="color: lawngreen;">Александр:</span> Точно! Промоем рану!<br>
<span style="color: cyan;">Вы промываете рану. Илье становится легче.</span><br>
`
      } else {
        ilya = false
        document.getElementById("message").innerHTML +=
          `
<span style="color: lawngreen;">Александр:</span> К сожалению, это всё. Инфекция скоро начнёт распространяться.<br>
<span style="color: cyan;">Вы помогаете Илье встать, но у него уже нет сил, и он снова падает.</span><br>
<span style="color: lawngreen;">Илья:</span> Идите без меня.<br>
<span style="color: lawngreen;">Андрей:</span> Нет, как мы можем!<br>
<span style="color: lawngreen;">Илья:</span> Можете...<br>
<span style="color: lawngreen;">Илья:</span> *погибает*<br>
`
      }
      if (!noz) {
        nikolay = false
        document.getElementById("message").innerHTML +=
          `
<span style="color: cyan;">Вы оборачиваетесь и видите, что зомби очнулся и уже подходит к вам. У вас нет выбора. Вы прыгаете в окно со второго этажа. Всё бы ничего. Только...</span><br>
<span style="color: lawngreen;">Николай:</span> Ааа!<br>
<span style="color: lawngreen;">Андрей:</span> Что случилось?<br>
<span style="color: lawngreen;">Николай:</span> А, нога!<br>
<span style="color: cyan;">Николай ушиб ногу при падении. Вы помогаете ему встать и дойти до сарая.</span><br>
<span style="color: lawngreen;">Андрей:</span> Сиди пока тут. Мы скоро вернёмся.<br>
<span style="color: lawngreen;">Николай:</span> Хорошо!<br>
<span style="color: cyan;">Плохое решение было оставить его без присмотра. На Николая нападут зомби, и он погибнет...</span><br>
<span style="color: cyan;">Но остальные ребята идут дальше.</span><br>
`
      } else {
        document.getElementById("message").innerHTML +=
          `
<span style="color: cyan;">Вы снова выходите на улицу.</span><br>
`
      }
      document.getElementById("message").innerHTML +=
        `
<span style="color: cyan;">Вы идёте вперёд и находите открытую машину.</span><br>
<span style="color: lawngreen;">Андрей:</span> О, тачка!<br>
<span style="color: lawngreen;">Александр:</span> Круто, давайте обыщем!<br>
<span style="color: cyan;">Вы не находите ничего интересного. Но машина заводится.</span><br>
<span style="color: lawngreen;">Егор:</span> Давайте куда-нибудь поедем?<br>
<span style="color: lawngreen;">Александр:</span> Поехали!<br>
<span style="color: lawngreen;">Андрей:</span> Куда?<br>
<span style="color: lawngreen;">Егор:</span> Куда-нибудь. Мало ли, что интересного в пути увидим.<br>
<span style="color: cyan;">Перед вами развилка.</span><br>
`
    } else {
      document.getElementById("message").innerHTML =
        `
    <span style="color: cyan;">Вы идёте вперёд и находите открытую машину.</span><br>
    <span style="color: lawngreen;">Андрей:</span> О, тачка!<br>
    <span style="color: lawngreen;">Александр:</span> Круто, давайте обыщем!<br>
    <span style="color: cyan;">Вы не находите ничего интересного. Но машина заводится.</span><br>
    <span style="color: lawngreen;">Егор:</span> Давайте куда-нибудь поедем?<br>
    <span style="color: lawngreen;">Александр:</span> Поехали!<br>
    <span style="color: lawngreen;">Андрей:</span> Куда?<br>
    <span style="color: lawngreen;">Егор:</span> Куда-нибудь. Мало ли, что интересного в пути увидим.<br>
    <span style="color: cyan;">Перед вами развилка.</span><br>
    `
    }
    document.getElementById("text-variant1").innerHTML = "Налево"
    document.getElementById("text-variant2").innerHTML = "Направо"
  }
  if (num == 5) {
    if (choose_5 == "1") {
      egor = false
      alexandr = false
      andrey = false
      ilya = false
      nikolay = false
      document.getElementById("message").innerHTML =
        `
    <span style="color: cyan;">Вы едете налево. Вдруг, на вас бежит толма зомби. В машине резко кончается топливо.</span><br>
    <span style="color: lawngreen;">Егор:</span> Что делать?<br>
    <span style="color: lawngreen;">Андрей:</span> Уже поздно что-то делать.<br>
    <span style="color: cyan;">Зомби окружают машину и начинают бить стёкла.</span><br>
    <span style="color: cyan;">Все герои погибают.</span><br>
    `
    } else {
      document.getElementById("message").innerHTML =
        `
  <span style="color: cyan;">Вы едете направо. Вдруг, в машине кончается топливо.</span><br>
  <span style="color: lawngreen;">Егор:</span> Что делать?<br>
  <span style="color: lawngreen;">Андрей:</span> Выходить и идти пешком.<br>
  <span style="color: cyan;">Через некоторое время, вы слышите какой-то шорох. Тут из-за дерева выпрыгивает зомби.</span><br>
  `
      if (noz) {
        document.getElementById("message").innerHTML +=
          `
<span style="color: lawngreen;">Егор:</span> *убивает зомби ножом*<br>
<span style="color: lawngreen;">Андрей:</span> Отлично!<br>
`
      } else if (!noz && !nikolay) {
        alexandr = false
        document.getElementById("message").innerHTML +=
          `
          <span style="color: cyan;">Зомби хватает Александра и начинает пожирать. Остальные убегают.</span><br>
`
      } else if (!noz && nikolay) {
        document.getElementById("message").innerHTML +=
          `
<span style="color: lawngreen;">Николай:</span> *убивает зомби палкой*<br>
<span style="color: lawngreen;">Андрей:</span> Отлично!<br>
`
      }
      document.getElementById("message").innerHTML +=
        `
        <span style="color: cyan;">Уже темнеет. Ребята нашли место для сна. Все укладываются и засыпают.</span><br>
        <span style="color: cyan;">Утром вы выходите на улицу, а мир снова живёт прежней жизнью. Здания в полном порядке. На улице толпы весёлых людей. Как такое возможно остаётся загадкой.</span><br>
`
      if (!alexandr || !andrey || !ilya || !nikolay) {
        document.getElementById("message").innerHTML +=
          `
  <span style="color: cyan;">Но, к сожалению, погибших не вернуть.</span><br>
`
      }
    }
    document.getElementById("text-variant1").innerHTML = "Продолжить"
    document.getElementById("text-variant2").innerHTML = "Продолжить"
  }
}

function SaveData() {
  document.getElementById("save").style.display = "block"
  setTimeout(() => document.getElementById("save").style.display = "none", 3000);
  localStorage.setItem("tq_level", `${num}`)
  localStorage.setItem("tq_ch1", `${choose_1}`)
  localStorage.setItem("tq_ch2", `${choose_2}`)
  localStorage.setItem("tq_ch3", `${choose_3}`)
  localStorage.setItem("tq_ch4", `${choose_4}`)
  localStorage.setItem("tq_ch5", `${choose_5}`)
  if (noz == false) {
    localStorage.setItem("tq_noz", "0")
  } else {
    localStorage.setItem("tq_noz", "1")
  }
  if (rana == false) {
    localStorage.setItem("tq_rana", "0")
  } else {
    localStorage.setItem("tq_rana", "1")
  }
  if (obrabotka_rany == false) {
    localStorage.setItem("tq_obrabotka", "0")
  } else {
    localStorage.setItem("tq_obrabotka", "1")
  }
  if (voda == false) {
    localStorage.setItem("tq_voda", "0")
  } else {
    localStorage.setItem("tq_voda", "1")
  }
  if (egor == false) {
    localStorage.setItem("tq_egor", "0")
  } else {
    localStorage.setItem("tq_egor", "1")
  }
  if (alexandr == false) {
    localStorage.setItem("tq_alexandr", "0")
  } else {
    localStorage.setItem("tq_alexandr", "1")
  }
  if (andrey == false) {
    localStorage.setItem("tq_andrey", "0")
  } else {
    localStorage.setItem("tq_andrey", "1")
  }
  if (ilya == false) {
    localStorage.setItem("tq_ilya", "0")
  } else {
    localStorage.setItem("tq_ilya", "1")
  }
  if (nikolay == false) {
    localStorage.setItem("tq_nikolay", "0")
  } else {
    localStorage.setItem("tq_nikolay", "1")
  }
}

function End() {
  document.getElementById("game").style.display = "none"
  document.getElementById("ending").style.display = "block"
  if (egor) {
    document.getElementById("life_egor").innerHTML = "❤"
  } else {
    document.getElementById("life_egor").innerHTML = "☠"
  }
  if (alexandr) {
    document.getElementById("life_alexandr").innerHTML = "❤"
  } else {
    document.getElementById("life_alexandr").innerHTML = "☠"
  }
  if (andrey) {
    document.getElementById("life_andrey").innerHTML = "❤"
  } else {
    document.getElementById("life_andrey").innerHTML = "☠"
  }
  if (ilya) {
    document.getElementById("life_ilya").innerHTML = "❤"
  } else {
    document.getElementById("life_ilya").innerHTML = "☠"
  }
  if (nikolay) {
    document.getElementById("life_nikolay").innerHTML = "❤"
  } else {
    document.getElementById("life_nikolay").innerHTML = "☠"
  }
  localStorage.removeItem("tq_level")
  localStorage.removeItem("tq_ch1")
  localStorage.removeItem("tq_ch2")
  localStorage.removeItem("tq_ch3")
  localStorage.removeItem("tq_ch4")
  localStorage.removeItem("tq_ch5")
  localStorage.removeItem("tq_noz")
  localStorage.removeItem("tq_rana")
  localStorage.removeItem("tq_obrabotka")
  localStorage.removeItem("tq_voda")
  localStorage.removeItem("tq_egor")
  localStorage.removeItem("tq_alexandr")
  localStorage.removeItem("tq_andrey")
  localStorage.removeItem("tq_ilya")
  localStorage.removeItem("tq_nikolay")
}

function Read() {
  document.getElementById("ending").style.display = "none"
  document.getElementById("article").style.display = "block"
}