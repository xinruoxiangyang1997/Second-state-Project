$(function() {
    $(".indexbase-top").load("http://10.31.157.28:8080/Project_YY/Second-state-Project/src/html/index_top.html");
    $(".indexbase-btm").load("http://10.31.157.28:8080/Project_YY/Second-state-Project/src/html/index_btm.html");
    $(".navbar-toggle").on('click', function() {
        $("this").hide();

    });
})