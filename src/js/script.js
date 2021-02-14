// Подключаем jquery
//= lib/jquery-3.5.1.min.js

// Подключаем плагин jquery ui для шкалы процентов в форме
//= lib/jquery-ui.min.js

// Подключаем плагин select2 для стилизации нативного селекта
//= lib/select2.min.js

// Подключаем плагин nicescroll для стилизации нативного скролбара
//= lib/jquery.nicescroll.min.js

// Написанная мною логи для списков
//= blocks/dropdown.js


$(document).ready(function () {
    // Begin: инициализация плагина select2 для подмены нативного селекта
    $('.main-form__select').select2();
    // End

    // Begin: инициализация плагина niceScroll для подмены нативного скролбара
    $('.select2-selection').on('click', function () {
        $(".select2-results__options").niceScroll({
            cursorwidth: 7,
            cursoropacitymin: 1,
            cursorcolor: '#3e9cdc',
            cursorborder: 'none',
            cursorborderradius: 4,
            autohidemode: 'leave',
            background: "#3d4050"
        });
    })
    // End

    // Begin: инициализация плагина слайдера для установки шкалы в процентах
    let sliderEl = $("#slider");

    sliderEl.slider({
        range: "min",
        min: 0,
        max: 100,
        value: 75,
        slide: function (event, ui) {
            $("#amount").attr('data-amount', ui.value);
        }
    });

    let amountEl = sliderEl.slider("value");

    $("#amount").attr('data-amount', amountEl);
    // End


    //Begin: функция для добавления файла
    $('.my').change(function () {
        if ($(this).val() !== '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
        else $(this).prev().text('Прикрепить файл');
    });
    // End


    //Begin: функция для плавного скролла
    $("body").on('click', '.js__go', function (e) {
        let fixed_offset;

        if ($(window).width() < 769) {
            fixed_offset = 20;
        } else {
            fixed_offset = 0;
        }

        $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 1000);

        e.preventDefault();
    });
    // End
});
