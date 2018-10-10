$(function() {
    var timer = setTimeout(function() {
        var $mask = $("<div class ='mask'>\n" +
            "<div class='login' style='display:none'>\n" +
            "<span>跳过</span>\n" +
            "<img src='../images/img_yjp/imgxyang/welcom.png' alt=''>\n" +
            "<h2>欢迎您</h2>" +
            "<p>聚客友网络科技公司</p>" +
            "</div>" +
            "</div>"
        );

        $('body').append($mask);
        $('.login').fadeIn(2000);
        $('body').on('click', '.login>span', function() {
            $mask.remove();
        });

    }, 2000);
});