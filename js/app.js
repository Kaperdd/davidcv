(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    $(".spoller__button").click((function() {
        const el = $(this);
        const show = el.attr("data-show");
        if (1 == show) {
            el.attr("data-show", 0);
            el.closest(".intro").removeClass("active");
            el.closest(".intro").addClass("hover");
            setTimeout((function() {
                el.closest(".intro").removeClass("hover");
            }), 400);
            el.next(".spoller__content").slideUp(300);
        } else {
            el.attr("data-show", 1);
            el.closest(".intro").addClass("active");
            el.next(".spoller__content").slideDown(300);
        }
    }));
    $(document).keyup((function(e) {
        if (27 == e.keyCode) {
            $(".spoller__button").attr("data-show", 0);
            $(".spoller__button").closest(".intro").removeClass("active");
            $(".spoller__button").closest(".intro").addClass("hover");
            setTimeout((function() {
                el.closest(".intro").removeClass("hover");
            }), 400);
            $(".spoller__button").next(".spoller__content").slideUp(300);
        }
    }));
    window["FLS"] = true;
    isWebp();
})();