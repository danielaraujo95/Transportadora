$('.myNav a').click(function (e) {
  e.preventDefault();
  var id = $(this).attr('href');
  console.log(id);
  targetOffset = $(id).offset().top;
  $('html,bady').animate(
    {
      scrollTop: targetOffset - 86,
    },
    500,
  );
});
