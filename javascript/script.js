$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.header-nav').toggleClass('nav-toggle');
    });
    $('#login').click(function(){
        $('.login-container').toggleClass('popup');
    });
    $('.login-container .fa-times').click(function(){
        $('.login-container').removeClass('popup');
    });
    $(window).on('load scroll', function(){
        $('#menu').removeClass('fa-times');
        $('.header-nav').removeClass('nav-toggle');
        // $('.login-container').removeClass('popup');
    });
});