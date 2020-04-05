$(function(){
    $('.warp').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        nextArrow: '.right',
        prevArrow: '.left'
    });
    $('.reen').venobox({
        framewidth: '800px',
        spinner: 'wave'
    }); 
});