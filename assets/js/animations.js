/* ======= Animations ======= */
jQuery(document).ready(function($) {

    //Only animate elements when using non-mobile devices
    if (isMobile.any === false) {

        /* Animate elements in #Promo */
        $('#promo .title').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp1');}
        });
        $('#promo .summary').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp2');}
        });

        $('#promo .ipad').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInRight delayp3');}
        });

        $('.chrome-window').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInRight delayp4');}
        });

        $('.promo-landscape').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp4');}
        });

        /* Animate elements in #Features */
        $('#features .icon').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp1');}
        });

        /* Animate elements in #How */
        $('#how .video-wrapper').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInLeft delayp1');}
        });

        $('#how .content').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInRight delayp2');}
        });

        /* Animate elements in #faq */
        $('#faq .title').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp1');}
        });

    }


});
