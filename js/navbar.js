$(document).ready(function(){
    $('.navbar').on('click', '.navbar-toggler', function(e){
      e.preventDefault();
      var target_selector = $(this).data('target');

      if (!$(this).hasClass('collapse-opened')) {
        $(target_selector).slideDown({
            start: function () {
              $(this).css({
                display: "flex"
              })
            }
          });
        $(this).addClass('collapse-opened');
      } else {
        $(target_selector).slideUp();
        $(this).removeClass('collapse-opened');
      }
    });
  });