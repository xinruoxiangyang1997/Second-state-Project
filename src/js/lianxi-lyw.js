$(function() {
    // pc点击
    $(".row ul>li").on("click", function() {
            var _index = $(this).index();
            var id = $(".row>div")[_index].attributes[1].value
                // console.log(id)
            $(this).children().attr('href', "#" + id);
        })
        //移动点击
    if (window.screen.width == 375 && window.screen.height == 812) {
        $(".row ul>li").on("click", function() {
            var _index = $(this).index();
            var top = $(".row>div").eq(_index).offset().top;


        })
    }

    // pc的滚动
    $(window).on("scroll", function() {
        // console.log($("html").scrollTop());
        if ($("html").scrollTop() >= 500) { $(".city>.row>ul").addClass("bx") } else { $(".city>.row>ul").removeClass("bx") };
        // if ($("html").scrollTop() < 500) { $(".city>.row>ul").removeClass("hide") }
        var top = $("html").scrollTop();
        // 判断移动端
        if (window.screen.width == 375 && window.screen.height == 812) {
            // //滚动
            if (top > 117 && top < 669) { $(".city>.row>ul>li").eq(0).css("background", "#26A4B2").siblings().css("background", "") };
            if (top > 669 && top < 1100) { $(".city>.row>ul>li").eq(1).css("background", "#26A4B2").siblings().css("background", "") };
            if (top > 1100 && top < 1500) { $(".city>.row>ul>li").eq(2).css("background", "#26A4B2").siblings().css("background", "") };
            if (top > 1500 && top < 2070) { $(".city>.row>ul>li").eq(3).css("background", "#26A4B2").siblings().css("background", "") };
            if (top > 2070 && top < 2595) { $(".city>.row>ul>li").eq(4).css("background", "#26A4B2").siblings().css("background", "") };
            if (top > 2595 && top < 2800) { $(".city>.row>ul>li").eq(5).css("background", "#26A4B2").siblings().css("background", "") };
            if (top > 2800) { $(".city>.row>ul>li").eq(6).css("background", "#26A4B2").siblings().css("background", "") };
            // //点击
        }

        // 判断pc端
        if (window.screen.height > 860 && window.screen.width > 1300) {
            if (top > 500 && top < 1200) { $(".city>.row>ul>li").eq(0).css("background", "#26A4B2").siblings().css("background", "") };
            if (top > 1200 && top < 1863) { $(".city>.row>ul>li").eq(1).css("background", "#26A4B2").siblings().css("background", "") }
            if (top > 1863 && top < 2512) { $(".city>.row>ul>li").eq(2).css("background", "#26A4B2").siblings().css("background", "") };
            if (top > 2512 && top < 3163) { $(".city>.row>ul>li").eq(3).css("background", "#26A4B2").siblings().css("background", "") };
            if (top > 3163 && top < 3812) { $(".city>.row>ul>li").eq(4).css("background", "#26A4B2").siblings().css("background", "") };
            if (top > 3812 && top < 4420) { $(".city>.row>ul>li").eq(5).css("background", "#26A4B2").siblings().css("background", "") };
            if (top > 4420) { $(".city>.row>ul>li").eq(6).css("background", "#26A4B2").siblings().css("background", "") }
        }


        // // console.log(window.innerWidth, window.innerHeight)
        // console.log(window.screen.height, window.screen.width)
    })
})