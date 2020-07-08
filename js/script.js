$(document).ready(function(){
  $(window).scroll(function() {
	    if ($(document).scrollTop() > 50) {
	      $(".site-header").addClass("fixed-header");
	    } else {
	      $(".site-header").removeClass("fixed-header");
	    }
  });

  $("#course_name").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".product-content-main .inner-col-product").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $("#state").on("keyup", function() {
    var state = $(this).val().toLowerCase();
    $(".product-content-main .inner-col-product").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(state) > -1)
    });
  });
  $("#category").on("keyup", function() {
    var state = $(this).val().toLowerCase();
    $(".product-content-main .inner-col-product").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(state) > -1)
    });
  });

});