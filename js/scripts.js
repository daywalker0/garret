

$(document).ready(function($) {




    $('body').append('<div class="overlay-box hidden"></div><div class="side-panel" id="side-panel"></div><div class="btn-close"><span class="icon-cl"></span></div>');
    $('.to-mob').each(function() {
        $(this).clone().appendTo('#side-panel');
    });
    $(".btn-menu").click(function(){
        $('.overlay-box').fadeIn(200);
        $('#side-panel, .btn-close, .burger').addClass('active');

        $('body').addClass('opened-menu');
    });





    $("a.js-header-arrow").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        $('.menu-box').removeClass('menu_active');
        $('.menu_btn').removeClass('menu_btn_active');
        return false;
    });

    $('.menu_btn').on('click', function(e) {
        e.preventDefault();
        $('.menu-box').toggleClass('menu_active');
        $('.menu_btn').toggleClass('menu_btn_active');
    });

    $('.bt-close').on('click', function(e) {
        e.preventDefault();
        $('.menu-box').toggleClass('menu_active');
        $('.menu_btn').toggleClass('menu_btn_active');
    });


    if ($(window).width() >= 992) {

        $(window).on('scroll', function () {

            var page1 = $("#section1")[0].getBoundingClientRect();

            if (page1.top < 70) {
                $('.menu').css('display', "none");
                $('.menu_btn').css('display', "block");
            } else {
                $('.menu').css('display', "flex");
                $('.menu_btn').css('display', "none");
            }
            console.log(page1.top);
        });

        var page1 = $("#section1")[0].getBoundingClientRect();

        if (page1.top < 70) {
            $('.menu').css('display', "none");
            $('.menu_btn').css('display', "block");
        } else {
            $('.menu').css('display', "flex");
            $('.menu_btn').css('display', "none");
        }

    }else{
        $('.menu_btn').css('display', "block");
    }



    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (!windscroll) $('.menu-dots a').removeClass('active');
        $('.main section').each(function(i){
            if($(this).position().top <= windscroll - 70) {
                //console.log($(this).position().top);
                $('.menu-dots a.active').removeClass('active');

                console.log("top="+windscroll+" div="+$(this).position().top);

                if (windscroll) {
                    $('.menu-dots a').eq(i).addClass('active');
                };

            };
        });
    }).scroll();



    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }


    function checkCookies() {
        let cookieNote = document.getElementById('cookie_note');
        let cookieBtnAccept = cookieNote.querySelector('.cookie_accept');


        if (!getCookie('cookies_policy')) {
            cookieNote.classList.add('show');
        }


        cookieBtnAccept.addEventListener('click', function () {
            setCookie('cookies_policy', 'true', 365);
            cookieNote.classList.remove('show');
        });
    }

    checkCookies();

});