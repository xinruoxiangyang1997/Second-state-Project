/*选项卡功能*/
$(function() {
    var li = $('.pdt_advantage .tab_bar>li');
    li.click(function() {
        $(this).addClass('tab_active');
        $(this).siblings().removeClass('tab_active');
        var index = $(this).index();
        var cont = $('.content-info').eq(index);

        cont.addClass('content_on');
        cont.siblings().removeClass('content_on');
    });
});

/*第二个选项卡功能*/
$(function() {
    var li = $('.solve_method .solve_tab>li');
    li.click(function() {
        $(this).addClass('cur');
        $(this).siblings().removeClass('cur');
        var index = $(this).index();
        var imgSrc1 = $('.solve_content img').eq(0);
        var imgSrc2 = $('.solve_content img').eq(1);

        var url1 = '../images/img_wj/youdao/' + (index + 1) + '-' + '1.jpg';
        var url2 = '../images/img_wj/youdao/' + (index + 1) + '-' + '2.jpg';
        imgSrc1.attr('src', url1);
        imgSrc2.attr('src', url2);
    });
});