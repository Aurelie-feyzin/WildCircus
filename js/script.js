$(document).ready(function () {
    /* Button Top */
    $('body').append('<a href="#" class="topLink" title="Revenir en haut de page"><img src="https://s23.postimg.org/tyuu2o0bf/10_top-30px.png"/></a>');

    $(window).scroll(function () {
        posScroll = $(document).scrollTop();
        largfen = $(document).width();
        if (largfen > 900) {
            largfen2 = largfen / 2 - 510;
            $('.topLink').css('right', largfen2 + 'px');
        }
        if (posScroll >= 250)
            $('.topLink').fadeIn(600);
        else
            $('.topLink').fadeOut(600);
    });

    /* Change page */
    $('.pageMore').click(function () {
        $('#navBar').fadeOut(250, function () {
            $('#navBar2').fadeIn(250);
        });
        $('#activity').fadeOut(250, function () {
            $('#moreInformation').fadeIn(250);
        });

        $('#footer .pageMore').fadeOut(250, function () {
            $('#footer .pageActivity').fadeIn(250);
        });
    });


    $('.pageActivity').click(function () {
        $('#navBar2').fadeOut(250, function () {
            $('#navBar').fadeIn(250);
        });
        $('#moreInformation').fadeOut(250, function () {
            $('#activity').fadeIn(250);
        });
        $('#footer .pageActivity').fadeOut(250, function () {
            $('#footer .pageMore').fadeIn(250);
        });
    });


    $('.scrollTo').on('click', function () {
        var page = $(this).attr('href');
        var speed = 1000;
        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, speed);
        return false;
    });

    $('.topLink').click(function () {
        $('html, body').animate({
            scrollTop: '0px'
        }, 'slow');
        return false;
    });
});
