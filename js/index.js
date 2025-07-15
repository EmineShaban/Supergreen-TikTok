var action = "click";
var speed = "500";

$(document).ready(function () {
    // Открыть первый элемент по умолчанию
    $('li.usp:first-of-type')
        .addClass('active') // добавляем класс активному элементу
        .next()
        .slideToggle(speed);

    // Обработчик клика
    $('li.usp').on(action, function () {
        var $this = $(this);
        var $answer = $this.next();

        // Скрыть все ответы и убрать активный класс
        $('li.a').not($answer).slideUp(speed);
        $('li.usp').not($this).removeClass('active');

        // Переключить текущий
        $answer.slideToggle(speed);
        $this.toggleClass('active');
    });
});
