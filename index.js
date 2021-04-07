$(document).ready(function () {
  $(".nav__item").click(function () {
    if (document.title == "Basket") {
      document.location.href = "./index.html";
    }
    console.log($(this));
    if ($(this).attr("class").includes("basket")) return;
    $(".active").removeClass("active");
    $(this).addClass("active");
    const elementToScrollTo = $(this).data("element");
    $("html, body").animate(
      {
        scrollTop: $(`#${elementToScrollTo}`).position().top - 65,
      },
      400
    );
  });
});