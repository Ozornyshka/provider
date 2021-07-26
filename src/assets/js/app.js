$(document).ready(function () {
  var body = $("body");
  body.on("click", ".header__burger", function () {
    $("body").addClass("overflow");
    $(".header__navbar-menu").addClass("burger-open");
  });
  body.on("click", ".burger-open .icon-close", function () {
    $("body").removeClass("overflow");
    $(".header__navbar-menu").removeClass("burger-open");
  });

  /////////////////// кнопка все каналы на странице со списком каналов //////
  body.on("click", ".chanel-block__list-btn", function (e) {
    e.preventDefault();
    $(this).parent(".chanel-block__list").toggleClass("show");
  });

  //////////////// Слайдер ////////

  $(".home-banner").slick({
    dots: true,
    speed: 500,
    autoplaySpeed: 5000,
    // fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    autoplay: true,
    adaptiveHeight: true,
  });
  $(".tariffs-carusel").slick({
    // dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    // centerMode: true,
    variableWidth: true,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  //////////// таб контайнер тарифов ////////
  body.on("click", ".tariffs-tabs", function () {
    $(this).addClass("active");
  });

  body.on("click", ".tariffs-tabs-item", function () {
    $(".tariffs-tabs-item").removeClass("active");
    $(this).addClass("active");
    var getvalue = $(this).attr("data-tariffs");
    $(".tariffs").attr("class", "tariffs").addClass(getvalue);
  });

  function tabs() {
    $(".tariffs-tabs-item").each(function () {
      if ($(this).hasClass("active")) {
        $(".tariffs").attr("class", "tariffs");
        $(".tariffs").addClass($(this).attr("data-tariffs"));
      }
    });
  }
  tabs();

  body.on("click", ".__select__title", function (e) {
    if ("active" === $(".__select")[0].getAttribute("data-state")) {
      $(".__select")[0].setAttribute("data-state", "");
    } else {
      $(".__select")[0].setAttribute("data-state", "active");
    }

    // Close when click to option
    for (let i = 0; i < $(".__select__label").length; i++) {
      $(".__select__label").on("click", function (evt) {
        $(".__select__title")[0].textContent = evt.target.textContent;
        $(".__select")[0].setAttribute("data-state", "");
        $(".tariffs").attr("class", "tariffs");
        $(".tariffs").addClass(evt.target.getAttribute("data-tariffs"));
      });
    }
  });

  ////////////////////// Popup /////////
  $("a[data-popup]").click(function (e) {
    e.preventDefault();
    let popup = e.target.getAttribute("data-popup");
    $(".popup").addClass(popup);
    popupClose();
  });

  body.on("click", ".popup .close", function () {
    $(".popup").attr("class", "popup");
  });

  function popupClose() {
    var popup = $(".popup");
    var popup1 = $(".popup-center");
    window.onclick = function (event) {
      if (event.target == popup[0]) {
        $(".popup").attr("class", "popup");
      } else if (event.target == popup1[0]) {
        $(".popup").attr("class", "popup");
      }
    };
  }

  //////////// Скрол плавный к якорю на страницах с акордион меню
  $("#subscriber__nav").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
