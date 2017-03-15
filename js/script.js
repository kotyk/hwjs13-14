'use strict';

var test = [
{
    question: "1. В каком месте HTML документа может располагаться JavaScript код?",
    answers: {
        answer_1: "a. В секции head",
        answer_2: "b. В секции body",
        answer_3: "c. В секции head и в секции body"
    },

},
{
    question: "2. Выберите синтаксически корректную JavaScript команду для вызова функции callFunction()",
    answers: {
        answer_1: "a. function callFunction()",
        answer_2: "b. callFunction()",
        answer_3: "c. new callFunction()"
    },

},
{
    question: "3. Какое событие позволяет выполнять код после щелчка мыши",
    answers: {
        answer_1: "a. mouseclick",
        answer_2: "b. onmouseclick",
        answer_3: "c. onclick"
    },

},


];

var rightAnswers = ["answer_3", "answer_2", "answer_3"];

localStorage.setItem('test', JSON.stringify(test));
localStorage.setItem('rightAnswers', JSON.stringify(rightAnswers));



$(function() {
    var html = $("#test").html();

    var test =JSON.parse(localStorage.getItem('test'));


    var content = tmpl(html, {
        data:test
    });

    $('body').append(content);

});



$(function () {

 
    var rightAnswers = JSON.parse(localStorage.getItem('rightAnswers'));
    var radios = document.getElementsByTagName('input');
    var userAnswers = [];
    var result_field = document.getElementById('result_field');
    var j = 0;
    var point = 0;

    $('button').on('click', function () {

        for (var i = 0; i < radios.length; i++) {
            if (radios[i].type === 'radio' && radios[i].checked) {

                userAnswers[j] = radios[i].value;
                j++;
            }
        }

        if (rightAnswers.length === userAnswers.length) {

            for (i = 0; i < rightAnswers.length; i++) {

                if (rightAnswers[i] === userAnswers[i]) {
                    point++;
                }

                result_field.innerHTML = point + " правильных ответов";
            }
        }
    });

    $('#reset_btn').click(function() {
        point = 0;
        $('input:checked').prop('checked', false);


    });



});


