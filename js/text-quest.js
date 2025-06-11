// Смена заголовка
$(document).ready(function () {
  let $element = $('#title');
  let phrases = [
    'Текстовый квест',
    '(НЕ)выживши(Й/Е)',
    'Невыжившие',
    'Выжившие',
    'Выживший',
  ];
  let index = -1;
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

// Код игры
let name_GG = ""
let name_VG = ""
let num = 1;
let choose_1_1 = ""
let choose_2_1 = ""
let choose_3_1 = ""
let choose_3_2 = ""
let choose_3_3 = ""
let choose_3_4 = ""
let choose_3_5 = ""
function StartGame() {
  name_GG = document.getElementById("name_main_character").value
  name_VG = document.getElementById("name_secondary_character").value
  document.getElementById("credits_main").innerHTML = name_GG
  document.getElementById("credits_secondary").innerHTML = name_VG
  document.getElementById("name_main_character").value = ""
  document.getElementById("name_secondary_character").value = ""
  document.getElementById("start").style.display = "none"
  document.getElementById("game").style.display = "block"
  document.getElementById("chapter").innerHTML = "Глава 1: Подготовка."
  document.getElementById("location").innerHTML = "Локация: Дом Главного Героя."
  document.getElementById("message").innerHTML =
    `
  <span class="text-primary">${name_VG}:</span> *Стучит в дверь*<br>
  <span class="text-primary">${name_GG}:</span> *Открывает дверь*<br>
  <span class="text-primary">${name_VG}:</span> *Заходит*<br>
  <span class="text-primary">${name_GG}:</span> Хэй, привет! Готов к сегоднешнему походу?<br>
  <span class="text-primary">${name_VG}:</span> Конечно! Я взял фонарик. А у тебя что?<br>
  `
  document.getElementById("text-variant1").innerHTML = "Нож"
  document.getElementById("text-variant2").innerHTML = "Еда"
}
function Choose() {
  if (num == 1) {
    if (document.getElementById("variant1").checked) {
      choose_1_1 = "Нож"
    } else {
      choose_1_1 = "Еда"
    }
    ShowMessage()
    document.getElementById("message").innerHTML =
      `
  <span class="text-primary">${name_GG}:</span> ${choose_1_1}.<br>
  <span class="text-primary">${name_VG}:</span> Ясно.<br>
  <span class="text-primary">${name_GG}:</span> Ну что, погнали?<br>
  <span class="text-primary">${name_VG}:</span> Да, вперёд!<br>
  `
    document.getElementById("variants").style.display = "none"
    document.getElementById("continue").style.display = "block"
    num++;
  }
  else if (num == 3) {
    if (document.getElementById("variant1").checked) {
      choose_2_1 = "Такси"
      document.getElementById("message").innerHTML =
        `
  <span class="text-primary">${name_VG}:</span> (радостно) Отлично! Сейчас вызову.<br>
  <span class="text-info">*Такси подъезжает, вы садитесь в машину*</span><br>
  <span class="text-primary">Таксист:</span> Добрый день! Куда едем?<br>
  <span class="text-primary">${name_VG}:</span> Лес в посёлке Жутком.<br>
  <span class="text-primary">Таксист:</span> Вы уверены?<br>
  <span class="text-primary">${name_VG}:</span> (напуганно) Да, а что?<br>
  <span class="text-primary">Таксист:</span> Да так, там... Ладно, поехали.<br>
  <span class="text-info">*Вы доехали до леса*</span><br>
  <span class="text-primary">${name_VG}:</span> Спасибо! Всего хорошего!<br>
  <span class="text-primary">Таксист:</span> До свидания!<br>
  <span class="text-info">*Вы вышли из машины*</span><br>
  <span class="text-primary">Таксист:</span> (жутким голосом) Ещё увидимся...<br>
  `
    } else {
      choose_2_1 = "Пешком"
      document.getElementById("message").innerHTML =
        `
  <span class="text-primary">${name_VG}:</span> (обречённо) Ладно.<br>
  <span class="text-info">*Спустя некоторое время*</span><br>
  <span class="text-primary">${name_VG}:</span> О! Вот и лес!<br>
  <span class="text-primary">???:</span> (шёпотом) Убирайтесь отсюда!<br>
  <span class="text-primary">${name_GG}:</span> (напуганно) Стой!<br>
  <span class="text-primary">${name_VG}:</span> Что случилось?<br>
  <span class="text-primary">${name_GG}:</span> Ты слышал это?<br>
  <span class="text-primary">${name_VG}:</span> (насторажившись) Н-нет.<br>
  <span class="text-primary">${name_GG}:</span> Как будто в лесу был какой-то шёпот.<br>
  <span class="text-primary">${name_VG}:</span> Мне кажется тебе показалось, пошли!<br>
  `
    }
    ShowMessage()
    document.getElementById("variants").style.display = "none"
    document.getElementById("continue").style.display = "block"
    num++;
    return 0
  }
  else if (num == 5) {
    if (document.getElementById("variant1").checked) {
      choose_3_1 = "Остановка"
      document.getElementById("message").innerHTML =
        `
  <span class="text-primary">${name_GG}:</span> Давай здесь остановимся?<br>
  <span class="text-primary">${name_VG}:</span> Окей.<br>
  <span class="text-info">*Вы разводите костёр из веток, лежащих на земле и общаетесь, не замечая, как проходит почти весь день*</span><br>
  `
      ShowMessage()
      document.getElementById("variants").style.display = "none"
      document.getElementById("continue").style.display = "block"
      num++;
      return 0
    } else {
      choose_3_1 = "Движение"
      if (choose_2_1 == "Такси") {
        document.getElementById("message").innerHTML =
          `
        <span class="text-primary">${name_GG}:</span> Пройдём ещё метров 500 и остановимся!<br>
    <span class="text-primary">${name_VG}:</span> Ладно...<br>
    <span class="text-info">*Шорох*</span><br>
    <span class="text-primary">${name_VG}:</span> (встревоженно) Слышишь шорох?<br>
    <span class="text-primary">${name_GG}:</span> (напуганно) Д-да...<br>
    <span class="text-info">*Из кустов выпрыгивает волк*</span><br>
    <span class="text-primary">${name_VG}:</span> (кричит) БЕЖИМ!!!<br>
    `
        if (choose_1_1 == "Нож") {
          document.getElementById("message").innerHTML +=
            `
<span class="text-info">*Вы вспоминаете, что у Вас был нож*</span><br>
<span class="text-primary">${name_GG}:</span> *Разворачивается и резко бьёт волка ножом*<br>
<span class="text-primary">${name_VG}:</span> Вау! Вот это да!<br>
<span class="text-primary">${name_GG}:</span> Фух! Вроде теперь всё должно быть спокойно! Но я что-то не хочу идти дальше!<br>
<span class="text-primary">${name_VG}:</span> Согласен!<br>
`
          ShowMessage()
          document.getElementById("variants").style.display = "none"
          document.getElementById("continue").style.display = "block"
          num++;
          return 0
        } else {
          document.getElementById("text-variant1").innerHTML = "Продолжить бежать"
          document.getElementById("text-variant2").innerHTML = "Залезть на дерево и звонить в 112"
          num++
        }
      } else {
        document.getElementById("message").innerHTML =
          `
          <span class="text-primary">${name_GG}:</span> Пройдём ещё метров 500 и остановимся!<br>
          <span class="text-primary">${name_VG}:</span> (грустно) Блин, я нереально устал!<br>
          <span class="text-info">*Шорох*</span><br>
          <span class="text-primary">${name_VG}:</span> (встревоженно) Слышишь шорох?<br>
          <span class="text-primary">${name_GG}:</span> (напуганно) Д-да...<br>
          <span class="text-info">*Из кустов выпрыгивает волк и кидается на Вашего друга, но тот не может убежать от него, потому что он сильно устал*</span><br>
          <span class="text-primary">${name_VG}:</span> (кричит) ${name_GG}, ПОМОГИ!!!<br>
    `
        if (choose_1_1 == "Нож") {
          document.getElementById("message").innerHTML +=
            `
      <span class="text-primary">${name_GG}:</span> *Бьёт волка ножом и спасает своего друга*<br>
      <span class="text-primary">${name_GG}:</span> Всё в порядке?<br>
      <span class="text-primary">${name_VG}:</span> Спасибо! Не очень.<br>
      <span class="text-primary">${name_VG}:</span> *Показывает ногу в крови*<br>
      <span class="text-primary">${name_VG}:</span> Я не смогу идти дальше!<br>
`
          ShowMessage()
          document.getElementById("text-variant1").innerHTML = "Помочь встать и идти обратно"
          document.getElementById("text-variant2").innerHTML = "Звонить в 112"
          num++
        } else {
          document.getElementById("message").innerHTML +=
            `
    <span class="text-primary">${name_GG}:</span> Как? У меня нет ничего!<br>
    <span class="text-info">*В это время волк убивает Вашего друга и начинает смотреть на Вас*</span><br>
`
          ShowMessage()
          document.getElementById("text-variant1").innerHTML = "Бежать"
          document.getElementById("text-variant2").innerHTML = "Забраться на дерево и звонить в 112"
          num++
        }
      }
    }
  }
  else if (num == 6) {
    if (choose_3_1 == "Движение" && choose_2_1 == "Пешком" && choose_1_1 == "Нож") {
      if (document.getElementById("variant1").checked) {
        choose_3_3 = "Помощь"
        document.getElementById("message").innerHTML =
          `
        <span class="text-info">*Вы прошли несколько метров*</span><br>
        <span class="text-primary">${name_VG}:</span> Что-то мне совсем плохо.<br>
        <span class="text-primary">${name_GG}:</span> Осталось немного, терпи!<br>
        <span class="text-primary">${name_VG}:</span> *Начинает падать*<br>
        <span class="text-primary">${name_GG}:</span> Неет! Держись!<br>
  `
        ShowMessage()
        document.getElementById("variants").style.display = "none"
        document.getElementById("continue").style.display = "block"
        num++;
        return 0
      } else {
        choose_3_3 = "112"
        document.getElementById("message").innerHTML =
          `
        <span class="text-primary">112:</span> Служба 112. Слушаю.<br>
        <span class="text-primary">${name_GG}:</span> (быстро) Алло! Меня зовут ${name_GG}. Мы с другом в лесу в посёлке Диком. Его укусил волк. Он истекает кровью. Помогите!<br>
        <span class="text-primary">112:</span> Принято! За вами выехали спасатели! Ожидайте!<br>
  `
        ShowMessage()
        document.getElementById("variants").style.display = "none"
        document.getElementById("continue").style.display = "block"
        num++;
        return 0
      }
    }
    else if (choose_3_1 == "Движение" && choose_2_1 == "Пешком" && choose_1_1 == "Еда") {
      if (document.getElementById("variant1").checked) {
        choose_3_3 = "Бежать"
        ShowMessage()
        document.getElementById("variants").style.display = "none"
        document.getElementById("continue").style.display = "block"
        num++;
        return 0
      } else {
        choose_3_3 = "Дерево"
        ShowMessage()
        document.getElementById("variants").style.display = "none"
        document.getElementById("continue").style.display = "block"
        num++;
        return 0
      }
    }
    else {
      if (document.getElementById("variant1").checked) {
        choose_3_3 = "Бежать"
        ShowMessage()
        document.getElementById("variants").style.display = "none"
        document.getElementById("continue").style.display = "block"
        num++;
        return 0
      } else {
        choose_3_3 = "Дерево"
        ShowMessage()
        document.getElementById("variants").style.display = "none"
        document.getElementById("continue").style.display = "block"
        num++;
        return 0
      }
    }
  }
  else if (num == 7) {
    if (document.getElementById("variant1").checked) {
      choose_3_4 = "Фонарик"
      ShowMessage()
      document.getElementById("variants").style.display = "none"
      document.getElementById("continue").style.display = "block"
      num++;
      return 0
    } else {
      choose_3_4 = "Бег"
      document.getElementById("message").innerHTML =
        `
      <span class="text-info">*Вы собираете вещи и убегаете*</span><br>
      <span class="text-primary">${name_VG}:</span> *Не замечая камень, спотыкается об него*<br>
    `
      ShowMessage()
      document.getElementById("text-variant1").innerHTML = "Помочь встать"
      document.getElementById("text-variant2").innerHTML = "Бежать"
      num++
      return 0;
    }
  }
  else if (num == 8) {
    if (document.getElementById("variant1").checked) {
      choose_3_5 = "Помощь"
      ShowMessage()
      document.getElementById("variants").style.display = "none"
      document.getElementById("continue").style.display = "block"
      num++;
      return 0
    } else {
      choose_3_5 = "Бег"
      document.getElementById("message").innerHTML =
        `
      <span class="text-primary">${name_GG}:</span> Прости, друг!<br>
    `
      ShowMessage()
      document.getElementById("variants").style.display = "none"
      document.getElementById("continue").style.display = "block"
      num++;
      return 0
    }
  }
}
function Continue() {
  if (num == 2) {
    document.getElementById("chapter").innerHTML = "Глава 2: Путь."
    document.getElementById("location").innerHTML = "Локация: Улица."
    document.getElementById("message").innerHTML =
      `
    <span class="text-primary">${name_VG}:</span> Сколько идти до леса?<br>
    <span class="text-primary">${name_GG}:</span> Минут 40-50.<br>
    <span class="text-primary">${name_VG}:</span> Может доехать на такси?<br>
    `
    document.getElementById("text-variant1").innerHTML = "Согласиться"
    document.getElementById("text-variant2").innerHTML = "Отказаться"
    num++
    document.getElementById("variants").style.display = "block"
    document.getElementById("continue").style.display = "none"
  }
  else if (num == 4) {
    document.getElementById("chapter").innerHTML = "Глава 3: Это конец?"
    document.getElementById("location").innerHTML = "Локация: Лес."
    document.getElementById("message").innerHTML =
      `
      <span class="text-info">*Вы дошли примерно до середины леса*</span><br>
    `
    document.getElementById("text-variant1").innerHTML = "Остановиться"
    document.getElementById("text-variant2").innerHTML = "Продолжить движение"
    num++
    document.getElementById("variants").style.display = "block"
    document.getElementById("continue").style.display = "none"
  }
  else if (num == 6) {
    if (choose_3_1 == "Остановка") {
      document.getElementById("chapter").innerHTML = "Глава 4: Ночь"
      document.getElementById("location").innerHTML = "Локация: Лес."
      document.getElementById("message").innerHTML =
        `
        <span class="text-primary">${name_GG}:</span> Ты это видел?<br>
        <span class="text-primary">${name_VG}:</span> (напуганно) Д-да...<br>
        <span class="text-info">*Вы видете, как вдали появляется силуэт человека, который стремительно движется на вас*</span><br>
    `
      document.getElementById("text-variant1").innerHTML = "Достать фонарик"
      document.getElementById("text-variant2").innerHTML = "Бежать"
      num++
      document.getElementById("variants").style.display = "block"
      document.getElementById("continue").style.display = "none"
    } else {
      if (choose_2_1 == "Такси" && choose_1_1 == "Нож") {
        document.getElementById("ending-1").style.display = "block"
        document.getElementById("game").style.display = "none"
        alert("Вы сделали идеальные выборы! Ваши герои оба остались живы! Игра завершена!")
        document.getElementById("the-end").innerHTML = "ВЫЖИВШИЕ"
      }
    }
  }
  else if (num == 7) {
    if (choose_2_1 == "Такси" && choose_3_2 == "Бежать") {
      document.getElementById("ending-2").style.display = "block"
      document.getElementById("game").style.display = "none"
      alert("Волк через несколько секунд догоняет Вашего друга и убивает его, а Вы, тем временем, добегаете до выхода и спасаетесь! Игра завершена!")
      document.getElementById("the-end").innerHTML = "ВЫЖИВШИЙ"
    }
    if (choose_2_1 == "Такси" && choose_3_2 == "Дерево") {
      document.getElementById("ending-1").style.display = "block"
      document.getElementById("game").style.display = "none"
      alert("Забравшись на дерево, Вы позвонили в 112. Они приехали и спасли вас! Ваши герои оба остались живы! Игра завершена!")
      document.getElementById("the-end").innerHTML = "ВЫЖИВШИЕ"
    }
    if (choose_2_1 == "Пешком" && choose_3_3 == "Помощь") {
      document.getElementById("ending-2").style.display = "block"
      document.getElementById("game").style.display = "none"
      alert(`К сожалению, ${name_VG} погибает от потери крови, но Вы выжили! Игра завершена!`)
      document.getElementById("the-end").innerHTML = "ВЫЖИВШИЙ"
    }
    if (choose_2_1 == "Пешком" && choose_3_3 == "112") {
      document.getElementById("ending-1").style.display = "block"
      document.getElementById("game").style.display = "none"
      alert(`Приехала бригада скорой помощь и помогла ${name_VG}! Ваши герои оба остались живы! Игра завершена!`)
      document.getElementById("the-end").innerHTML = "ВЫЖИВШИЕ"
    }
    if (choose_2_1 == "Пешком" && choose_3_3 == "Бежать") {
      document.getElementById("ending-3").style.display = "block"
      document.getElementById("game").style.display = "none"
      alert(`Волк через несколько секунд догоняет и убивает Вас! Ваши герои оба погибли! Игра завершена!`)
      document.getElementById("the-end").innerHTML = "НЕВЫЖИВШИЕ"
    }
    if (choose_2_1 == "Пешком" && choose_3_3 == "Дерево") {
      document.getElementById("ending-2").style.display = "block"
      document.getElementById("game").style.display = "none"
      alert(`Забравшись на дерево, вы позвонили в 112. Они спасли Вас! Игра завершена!`)
      document.getElementById("the-end").innerHTML = "ВЫЖИВШИЙ"
    }
  }
  else if (num == 8) {
    document.getElementById("ending-1").style.display = "block"
    document.getElementById("game").style.display = "none"
    if (choose_2_1 == "Такси") {
      alert("Посветив фонариком, вы узнаёте в убийце такстиста, с которым ехали сегодня в лес. Вы быстро складываете вещи и убегаете. Он не успевает догнать вас! Ваши герои оба остались живы! Игра завершена!")
    } else {
      alert("Вы быстро складываете вещи и убегаете. Убийца не успевает догнать вас! Ваши герои оба остались живы! Игра завершена!")
    }
    document.getElementById("the-end").innerHTML = "ВЫЖИВШИЕ"
  }
  else if (num == 9) {
    if (choose_3_5 == "Помощь") {
      document.getElementById("ending-3").style.display = "block"
      document.getElementById("game").style.display = "none"
      alert("Пока вы помогали встать другу, убийца успел добежать и убить вас обоих! Игра завершена!")
      document.getElementById("the-end").innerHTML = "НЕВЫЖИВШИЕ"
    } else {
      document.getElementById("ending-2").style.display = "block"
      document.getElementById("game").style.display = "none"
      alert("Вам удаётся добежать до выхода, но, к сожалению, вы не смогли помочь своему другу! Игра завершена!")
      document.getElementById("the-end").innerHTML = "ВЫЖИВШИЙ"
    }
  }
}
function ShowMessage() {
  let toast = new bootstrap.Toast(document.getElementById("toast"))
  toast.show()
}

// Афиша
let t = document.getElementById("cursor");
document.querySelector(".section-row").addEventListener("mousemove", function (n) {
  t.style.left = n.clientX + "px",
    t.style.top = n.clientY + "px"
});
function n() {
  t.classList.add("hover")
}
function s() {
  t.classList.remove("hover")
}
function o(t) {
  t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}
document.addEventListener('DOMContentLoaded', function () {
  let hoverLink = document.querySelectorAll(".hover-img");
  for (let i = 0; i < hoverLink.length; i++) {
    o(hoverLink[i]);
    let url = hoverLink[i].getAttribute("data-url");
    hoverLink[i].addEventListener('mouseenter', function () {
      t.style.backgroundImage = "url(" + url + ")";
    });
  }
})