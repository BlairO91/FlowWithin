$(document).ready(() => {
  $('.wrapper').show();
  $('.overlay').fadeIn(1500);
  $('.pimg1').fadeIn();

  // ABOUT

  $('.moreInfoBio').hide();
  $('.readLessBioDana').hide();
  $('.readLessBioKristina').hide();
  $('.moreInfoButtonDana').on('click', function () {
    $('.moreInfoBioDana').fadeToggle(400);
    $('.moreInfoButtonDana').toggleClass('bioUnderline');
    $('.moreInfoButtonKristina').removeClass('bioUnderline');
    $('.readMoreBioDana').toggle();
    $('.readLessBioDana').toggle();
    $('.moreInfoBioKristina').hide();
    $('.readLessBioKristina').hide();
    $('.readMoreBioKristina').show();
  });
  $('.moreInfoButtonKristina').on('click', function () {
    $('.moreInfoBioKristina').fadeToggle(400);
    $('.moreInfoButtonKristina').toggleClass('bioUnderline');
    $('.moreInfoButtonDana').removeClass('bioUnderline');
    $('.readMoreBioKristina').toggle();
    $('.readLessBioKristina').toggle();
    $('.moreInfoBioDana').hide();
    $('.readLessBioDana').hide();
    $('.readMoreBioDana').show();
  });


  // TESTIMONIALS

  $(".readMore").hide();
  $(".readLessButton").hide();
  $(".readMoreButton").on("click", function () {
    $(".readMore").fadeIn(400);
    $(".readMoreButton").hide();
    $(".readLessButton").show();
  });
  $(".readLessButton").on("click", function () {
    $(".readMore").fadeOut(400);
    $(".readMoreButton").show();
    $(".readLessButton").hide();
  });

  // Contact Form

  $("#my-form").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Thank you!");
  });
    $form.reset();
});
});
