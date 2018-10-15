$(".menu1 li a").on("click", function(event) {
    event.prevetDefault();
    $(this).location.href = "../html/index_yy.html";


})