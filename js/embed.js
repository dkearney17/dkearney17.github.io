(function () {
  document.querySelectorAll("[data-youtube-key]").forEach(function (el) {
    var key = el.getAttribute("data-youtube-key");
    var ids = window.PORTFOLIO_YOUTUBE_IDS || {};
    var id = ids[key];
    if (id && el.tagName === "IFRAME") {
      el.src =
        "https://www.youtube.com/embed/" +
        id +
        "?rel=0&modestbranding=1";
    }
  });
})();
