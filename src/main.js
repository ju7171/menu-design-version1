
const left = document.querySelector('.left-arrow-icon');
const right = document.querySelector('.right-arrow-icon');
const mobileMeun = document.querySelector('.mobile-nav');

const btn1 = document.querySelector('#btn1');
const show1 = document.querySelector('#show1');

left.addEventListener('click', function (ev) {
    left.classList.toggle('is-active')
    mobileMeun.classList.toggle('is-active')
});

function hideNav() {
    left.classList.toggle('is-active')
    mobileMeun.classList.toggle('is-active')
};

$(document).ready(function () {
    $('.menu li:has(ul)').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('activado')) {
            $(this).removeClass('activado');
            $(this).children('ul').slideUp();  //선택한 요소를 위쪽으로 서서히 사라지게 한다.
        } else {
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('activado');
            $(this).addClass('activado');
            $(this).children('ul').slideDown(); //선택한 요소를 아래쪽으로 서서히 나타나게 합니다.
        }

        $('.menu li ul li a').click(function () {
            window.location.href = $(this).attr('href'); //연결된 링크로 이동한다.
        })
    });
});

