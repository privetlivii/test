//= lib/jquery-3.5.1.min.js
//= lib/jquery-ui.min.js
//= lib/select2.min.js
//= lib/jquery.nicescroll.min.js
//= blocks/dropdown.js

$(document).ready(function () {
    $('.main-form__select').select2();

    $('#select2--container').on('click', function () {
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

    let sliderEl = $("#slider-vertical");

    sliderEl.slider({
        range: "min",
        min: 0,
        max: 100,
        value: 75,
        slide: function (event, ui) {
            $("#amount").attr('data-amount', ui.value);
        }
    });

    let amount = sliderEl.slider("value");

    $("#amount").attr('data-amount', amount);

    $('.my').change(function() {
        if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
        else $(this).prev().text('Прикрепить файл');
    });

});

