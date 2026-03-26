$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  $("a.abstract").click(function () {
    var entry = $(this).closest("[id]");
    entry.find(".abstract.hidden").toggleClass("open");
    entry.find(".award.hidden.open").toggleClass("open");
    entry.find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    var entry = $(this).closest("[id]");
    entry.find(".abstract.hidden.open").toggleClass("open");
    entry.find(".award.hidden").toggleClass("open");
    entry.find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    var entry = $(this).closest("[id]");
    entry.find(".abstract.hidden.open").toggleClass("open");
    entry.find(".award.hidden.open").toggleClass("open");
    entry.find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.helpers.getHeadings = function (scope) {
      return this.findOrFilter(scope, "h2");
    };
    Toc.init({ $nav: $myNav });
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
    // Activate the first TOC link immediately on page load
    $("body").scrollspy("refresh");
    $(window).trigger("scroll");
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
