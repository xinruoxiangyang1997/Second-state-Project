$(function() {
    $(".main-middle .row ul li").on("click", function() {
        var _index = $(this).index();
        $(".main-bottom .row").eq(_index).show(200).siblings().hide(200);
    })
    $(".main-top .row .left").on("click", function() {
        window.location.reload();
    })
    var i = 0;
    $(".select .row .jia").on("click", function() {
        if (i < 2) {
            i++;
        } else {
            i = 2;
        }
        $(".main-bottom .sel").eq(i).show(200).siblings().hide(200);

        $(".select .row #select option").eq(i).attr("selected", "selected").siblings().removeAttr("selected");

    })
    $(".select .row .jian").on("click", function() {
        if (i === 0) {
            i = 0
        } else {
            i--;
        }
        $(".main-bottom .sel").eq(i).show(200).siblings().hide(200);
        $(".select .row #select option").eq(i).attr("selected", "selected").siblings().removeAttr("selected");

    })
    $(".select .row .first").on("click", function() {
        i = 0;
        $(".main-bottom .sel").eq(i).show(200).siblings().hide(200);
    })
    $(".select .row .finally").on("click", function() {
        i = 2;
        $(".main-bottom .sel").eq(i).show(200).siblings().hide(200);
    })

})
$(".select .row #select").on("change", function() {
    switch ($(this).val()) {
        case "one":
            i = 0;
            $(".main-bottom .sel").eq(i).show(200).siblings().hide(200);
            break;
        case "second":
            i = 1;
            $(".main-bottom .sel").eq(i).show(200).siblings().hide(200);
            break;
        case "three":
            i = 2;
            $(".main-bottom .sel").eq(i).show(200).siblings().hide(200);
            break;
    }
})