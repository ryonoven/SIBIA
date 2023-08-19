(function ($) {
  "use strict";

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $(".sidebar .collapse").collapse("hide");
    }
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $(".sidebar .collapse").collapse("hide");
    }

    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $(".sidebar .collapse").collapse("hide");
    }
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $("body.fixed-nav .sidebar").on(
    "mousewheel DOMMouseScroll wheel",
    function (e) {
      if ($(window).width() > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    }
  );

  // Scroll to top button appear
  $(document).on("scroll", function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on("click", "a.scroll-to-top", function (e) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1000,
        "easeInOutExpo"
      );
    e.preventDefault();
  });

  // Modal handling
  var idDataHapus;
  $("button#btn-hapus").click(function () {
    idDataHapus = $(this).data("id");
    console.log(idDataHapus);
    $("#idData").text(idDataHapus);
    $("#modalHapus").modal("show");
  });

  $("#btnHapus").click(function () {
    window.location.href = "bisnis/hapus/" + idDataHapus;
  });

  // Modal handling Data Inv
  var idDataHapus2;
  $("button#btn-hapus").click(function () {
    idDataHapus2 = $(this).data("id");
    console.log(idDataHapus2);
    $("#idDataI").text(idDataHapus2);
    $("#modalHapusI").modal("show");
  });

  $("#btnHapusI").click(function () {
    window.location.href = "inv/hapus/" + idDataHapus2;
  });

  // Modal handling Data Bia
  var idDataHapusB;
  $("button#btn-hapus").click(function () {
    idDataHapusB = $(this).data("id");
    console.log(idDataHapusB);
    $("#idData").text(idDataHapusB);
    $("#modalHapus").modal("show");
  });

  $("#btnHapusB").click(function () {
    window.location.href = "bia/hapus/" + idDataHapusB;
  });

  
})(jQuery);
