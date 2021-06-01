$(function () {
    $(".action li").on("click", function () {
        $(this).addClass("actions").siblings().removeClass("actions");
        var idx = $(this).index();
        $(".date").eq(idx).addClass("select").siblings().removeClass("select");

    });
});