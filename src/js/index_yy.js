window.onload = function() {
    var a1 = document.querySelector(".a1"),
        a2 = document.querySelector(".a2");
    var item = document.querySelector(".item"),
        item1 = document.querySelector(".item1");
    a1.addEventListener('click', function(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        item.removeClass("active");
        item1.addClass("active");
    });
    a2.addEventListener('click', function(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        item1.removeAttribute("class", "active");
        item.createAttribute("class", "active");
    });

}