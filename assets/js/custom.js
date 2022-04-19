$(document).ready(function() {


$(document).ready(function(){

    $(".clickbutton").click(function(){

        $('.floatbutton').toggleClass("active");

        $('.crossplus').toggleClass("rotate");

    });



    $(".topformswitch").click(function(){

        $('.topformwrap').toggleClass("active");

    });

});



$('.request_info').on('click', function() {

    $('.floatbutton').toggleClass("active");

        $('.crossplus').toggleClass("rotate");

});
 


     $('.ewrk-silder').slick({

        dots: true,

        arrows: true,

        infinite: true,

        speed: 300,

        slidesToShow: 1,

        slidesToScroll: 1,

        autoplay: true,

        autoplaySpeed: 2000,

        responsive: [

        {

            breakpoint: 825,

            settings: {

                slidesToShow: 1,

                slidesToScroll: 1,

                infinite: true,

                dots: false,

                arrows:false

            }

        },

        ]

    });

     

     
$('.signUpOpen').click(function() {

        var pkgid = $(this).attr('data-id');
        var package_name = $(this).attr('data-name');
        var package_slogan = $(this).attr('data-slogan');
        var am = $(this).attr('data-am');

        $('#package_field').val(package_name);
        $('#package_id_order').val(pkgid);
        $('#amount').val(am);

        $('.signUpPop').fadeIn();

        $('.overlay').fadeIn();

    });
    
    



    $('.popupMain .closePop,.overlay').click(function(){

        $('.signUpPop').fadeOut();

        $('.overlay').fadeOut();

        $('.side-bar-frm-head').removeClass('active');

    });



   






});



// select-logo-brief

$('.logo-sel-pic').click(function(){

        dis = $(this);

        logotypeget = dis.data('logotype');

        sbl = dis.parents('li').siblings().find('.logo-sel-pic');

        dis.addClass('white_select');

        sbl.removeClass('white_select');

        $('#logotypeget').val(logotypeget);

    });



       $('.logofont').click(function(){

        dis = $(this);

        logofonttyp = dis.data('logofont');

        sbl = dis.parents('li').siblings().find('.logofont');

        dis.addClass('gt_logofnt');

        sbl.removeClass('gt_logofnt');

        $('#logofonttyp').val(logofonttyp);

    });



          $('.logoclr').click(function(){

        dis = $(this);

        logoclrslect = dis.data('logoclr');

        sbl = dis.parents('li').siblings().find('.logoclr');

        dis.addClass('logoclr-slect');

        sbl.removeClass('logoclr-slect');

        $('#logoclrslect').val(logoclrslect);

    });











          