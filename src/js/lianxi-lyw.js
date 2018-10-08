// 实现楼层跳转
$(function() {
    $(".row ul>li").on("click", function() {
            var _index = $(this).index();
            var id = $(".row>div")[_index].attributes[1].value
                // console.log(id)
            $(this).children().attr('href', "#" + id);
        })
        // 滚动
    $(window).on("scroll", function() {
        console.log($("html").scrollTop());
        if ($("html").scrollTop() >= 580) { $(".city>.row>ul").css("visibility", "hidden") } else { $(".city>.row>ul").css("visibility", "visable") }

    })
})