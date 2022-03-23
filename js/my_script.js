function showerrorpro(mydiv, erromsg) {
    $(mydiv).css({ border: '1px solid red ', color: '#222', background: '#e1e1e1' });
    // $("html, body").animate({ scrollTop: $(mydiv).offset().top - 150 }, 500);
    // $(mydiv).focus();
    if (erromsg !== '') {
        $(mydiv).after('<span class="show-error-msg">' + erromsg + '</span>');
    }
}

function showsuccesspro(mydiv) {
    $(mydiv).css({ border: '1px solid #D7D7D7', background: '#e9eaec', color: '#222' });
    $('.show-error-msg').remove();
}
function ValidateEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
};


   

function innernavscroll() {

    if ($(document).scrollTop() > $('.banner').offset().top - 120) {
        $('.nav-ul li').removeClass('active');

    }
    if ($(document).scrollTop() > $('.choose').offset().top - 120) {
        $('.nav-ul li').removeClass('active');
        $('#choose').addClass('active');
    }

    if ($(document).scrollTop() > $('.testimonials').offset().top - 120) {
        $('.nav-ul li').removeClass('active');
        $('#testimonials').addClass('active');
    }

    if ($(document).scrollTop() > $('.how-works').offset().top - 120) {
        $('.nav-ul li').removeClass('active');
        $('#how-works').addClass('active');
    }
    if ($(document).scrollTop() > $('.faq').offset().top - 120) {
        $('.nav-ul li').removeClass('active');
        $('#faq').addClass('active');
    }

}

$(window).scroll(function() {
    innernavscroll();
});

$(window).scroll(function() {

    var aTop = "100";

    if ($(this).scrollTop() >= aTop) {

        $('#top-link-block').addClass('affix');

    } else {

        $('#top-link-block').removeClass('affix');

    }

});
$(".cl_form").click(function() {
    $("html, body").animate({
        scrollTop: $('.choose').offset().top - 100
    }, 1000);
});

// navigation

$(document).ready(function() {

    $('.phone,input[name=phone]').keydown(function(event) {
        // Allow special chars + arrows 
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 ||
            event.keyCode == 27 || event.keyCode == 13 ||
            (event.keyCode == 65 && event.ctrlKey === true) ||
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return;
        } else {
            // If it's not a number stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
        }
    });
    
    $('.mob-nav-btn').click(function() {
        $('.mob-nav').fadeIn();
    });
    $('.icon').click(function() {
        $('.mob-nav').fadeOut();
    });
    $('.drop-nav').click(function() {
        $('.nav-down').slideToggle();
    });

    $('.cl_reg').click(function() {

        $('html, body').animate({
            scrollTop: $('.form-main').offset().top - 30
        }, 1000);
        $('input').css("background-color", "grey");
        setTimeout(function() {
            $('input').css("background-color", "white");
        }, 1200);
    });


    // $('#cl_form').click(function() {
    //     $('.popup').fadeIn();
    // })
    // $('.close').click(function() {
    //     $('.popup').fadeOut()
    // })

    // $('.popup').click(function() {
    //     $('.popup').fadeOut();
    //     e.stopPropagation()
    // })
    // $('.pop-in').click(function(e) {
    //     e.stopPropagation()
    // })
    if (screen.width < 767) {
        $(".nav-ul").click(function() {
            $(".mob-nav").fadeOut();
        });
        $("body").click(function() {
            $(".mob-nav").fadeOut();
        });
        $(".mob-nav-btn").click(function(event) {
            event.stopPropagation();
            $(".mob-nav").fadeIn();
        });
    }



    $(".mob-nav").click(function(event) {
        event.stopPropagation();
    });

    var swiper = new Swiper(".our-team", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: true,
        freeMode: false,
        autoPlay: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,

        },

        navigation: {
            nextEl: ".our-team .swiper-button-next",
            prevEl: ".our-team .swiper-button-prev",

        },

        pagination: {
            // el: ".swiper-pagination",
            // clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },

        }
    });

    var swiper = new Swiper(".myCl", {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50,
        loop: true,
        freeMode: true,
        autoPlay: true,
        speed: 1000,
        // autoplay: {
        //     delay: 3100,
        //     disableOnInteraction: false,

        // },

        navigation: {
            nextEl: ".doctor_profile .swiper-button-next",
            prevEl: ".doctor_profile .swiper-button-prev",

        },

        pagination: {
            // el: ".swiper-pagination",
            // clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 3,
            },

        }
    });
    var swiper = new Swiper(".testimon .testiSl", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 100,
        loop: true,
        freeMode: false,
        autoPlay: false,
        speed: 1000,
        // autoplay: {
        //     delay: 3300,
        //     disableOnInteraction: false,

        // },

        pagination: {
            el: ".testimon .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
            },

        }

    });

    $('.boxes .tab').hide();
    $('.boxes .tab.tab-1').show();
    $('.options li ').click(function() {
        var $this = $(this).attr('data-id');
        $('.boxes .tab').hide();
        $('.boxes .' + $this).show();
        $(".options li ").removeClass("active");
        $(this).addClass("active");

    });

    $('.bg-1').click(function() {
        $('.bg-clr').css("background", "#D6EAFB");
        $('.boxes ul li').css("background", "rgba(0, 136, 242, .48)");

    });
    $('.bg-2').click(function() {
        $('.bg-clr').css("background", "#FFAE84");
        $('.boxes ul li').css("background", "#FF6D5C");

    });
    $('.bg-3').click(function() {
        $('.bg-clr').css("background", "#FFF7D9");
        $('.boxes ul li').css("background", "rgba(248, 195, 0, .48)");
    });
    $('.bg-4').click(function() {
        $('.bg-clr').css("background", "#FFD6E3");
        $('.boxes ul li').css("background", "rgba(220, 58, 109, .48)");
    });
    $('.bg-5').click(function() {
        $('.bg-clr').css("background", "#BFFFE4");
        $('.boxes ul li').css("background", "rgba(69, 170, 127, .48)");
    });

    $('.nav-ul li').click(function() {
        var id = $(this).data('id');
        $("html, body").animate({
            scrollTop: $('.' + id).offset().top - 60
        }, 1000);
        $('.nav-ul li').removeClass('active');
        $(this).addClass('active');
    });


    // this is for faq
    $(".accordion-content").css("display", "none");
    $(".accordion-title").click(function() {
        if ($('.accordion-content').is(':visible')) {
            $(".accordion-content").slideUp(300);
            $(".accordion-title span").html('<i class="fa fa-plus"></i>');
        }
        if ($(this).next(".accordion-content").is(':visible')) {
            $(this).next(".accordion-content").slideUp(300);
            $(this).children("span").html('<i class="fa fa-plus"></i>');
        } else {
            $(this).next(".accordion-content").slideDown(300);
            $(this).children("span").html('<i class="fa fa-minus"></i>');
        }
    });

    $('.cl_view_prof').click(function() {
        //  var id = $(this).data('id');
        //  var dt = $('.pop-in testi-popinn').data('id');

        var $this = $(this).data('id');
        $('.popup-alert.pop').fadeOut('slow');
        $('.popup-alert.tab' + $this).fadeIn('slow');

        //  alert(dt); return false;
        // alert($this);

        // $('.popup-alert').show().find('.pop-in testi-popinn').data('id').show();

    })

    $('.popup-alert').click(function(e) {
        $('.popup-alert').fadeOut();

    })

    $('.popup-alert .pop-in span').click(function(e) {
        e.stopPropagation();
    })
    $('.popup-alert .pop-in figure').click(function(e) {
        e.stopPropagation();
    })
    $('.popup-alert .pop-in p').click(function(e) {
        e.stopPropagation();
    })
    // $('.cl_close').click(function() {
    //         $('.popup-alert').fadeOut();
    //     })
        // $('.cl_form_pop_sess').click(function(e){
        //     e.preventDefault();
        // })
    // $('.cl_form_work').click(function() {
    //     alert('Currently Form is not working');
    // });

    $('.cl_form_submit').click(function() {
        var name = $('.name').val();
        var phone = $('.phone').val();
        var email = $('.email').val();

        if (name === "") {
            showerrorpro(".name", 'Name is required');
            return false;
        } else {
            showsuccesspro(".name");
        }
        if (phone.length < 10) {
            showerrorpro(".phone", 'Please enter valid phone number');
            return false;
        } else {
            showsuccesspro(".phone");
        }
        if (!ValidateEmail(email)) {
            showerrorpro(".email", 'Please enter valid email ID');
            return false;
        } else {
            showsuccesspro(".email");
        }
        
        $(this).hide()
        $('.loader').show('');
    
    });




    wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function(box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();
});