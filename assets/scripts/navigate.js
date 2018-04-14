$(document).ready(function () {

  $(document).ready(function () {
    // bootstrap 4 smooth scrollspy
    $('.nav-item a').on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function () {
          window.location.hash = hash;
        });
      }
    });

    // back to top button
    $('#back-to-top').on('click',function () {
      $('body,html').animate({
        scrollTop: 0
      }, 700);
      return false;
    });

    // hide collapse navbar on click
    $('.navbar-nav>li>.hide-on-click').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });

  });
});
