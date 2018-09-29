$(function() {
    $(".drop1").on('mouseenter', function() {
        $(".dropdown-submenu").removeClass("show");
        $('.submenu1').addClass('show');
    })
    $(".drop1").on('click', function() {
        $('.submenu1').removeClass('show');
    })
    $(".drop2").on('mouseenter', function() {
        $(".dropdown-submenu").removeClass("show");
        $('.submenu2').addClass('show');
    })
    $(".drop2").on('click', function() {
        $('.submenu2').removeClass('show');
    })
    $(".drop3").on('mouseenter', function() {
        $(".dropdown-submenu").removeClass("show");
        $('.submenu3').addClass('show');
    })
    $(".drop3").on('click', function() {
        $('.submenu3').removeClass('show');
    })
})