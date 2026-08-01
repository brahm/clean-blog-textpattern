/*!
 * Start Bootstrap - Clean Blog v5.0.1 (https://startbootstrap.com/template-overviews/clean-blog)
 * Copyright 2013-2018 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-clean-blog/blob/master/LICENSE)
 *
 * Ported to Bootstrap 5: rewritten without jQuery.
 */
(function() {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  function floatingGroup(event) {
    return event.target.closest ? event.target.closest(".floating-label-form-group") : null;
  }

  document.addEventListener("input", function(event) {
    var group = floatingGroup(event);
    if (group) {
      group.classList.toggle("floating-label-form-group-with-value", Boolean(event.target.value));
    }
  });

  // focus and blur do not bubble, so delegate through their bubbling counterparts
  document.addEventListener("focusin", function(event) {
    var group = floatingGroup(event);
    if (group) {
      group.classList.add("floating-label-form-group-with-focus");
    }
  });

  document.addEventListener("focusout", function(event) {
    var group = floatingGroup(event);
    if (group) {
      group.classList.remove("floating-label-form-group-with-focus");
    }
  });

  // Show the navbar when the page is scrolled up
  var MQL = 992;
  var mainNav = document.getElementById("mainNav");

  //primary navigation slide-in effect
  if (mainNav && window.innerWidth > MQL) {
    var headerHeight = mainNav.offsetHeight;
    var previousTop = 0;

    window.addEventListener("scroll", function() {
      var currentTop = window.scrollY;
      //check if user is scrolling up
      if (currentTop < previousTop) {
        //if scrolling up...
        if (currentTop > 0 && mainNav.classList.contains("is-fixed")) {
          mainNav.classList.add("is-visible");
        } else {
          mainNav.classList.remove("is-visible", "is-fixed");
        }
      } else if (currentTop > previousTop) {
        //if scrolling down...
        mainNav.classList.remove("is-visible");
        if (currentTop > headerHeight && !mainNav.classList.contains("is-fixed")) {
          mainNav.classList.add("is-fixed");
        }
      }
      previousTop = currentTop;
    }, {
      passive: true
    });
  }

})(); // End of use strict
