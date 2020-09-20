$(function(){
    $('body').on('click', '[data-toggle="collapse"]', function(e){
      e.preventDefault();
      var target_selector = $(this).data('target');

      if (!$(target_selector).hasClass('show')) {
        $(target_selector).addClass('show');
      } else {
        $(target_selector).removeClass('show');
      }
    });
  });