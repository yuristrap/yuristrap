$(document).ready(function(){
    var isOpen = false;
    $('.navbar').on('click', '.navbar-toggler', function(e){
      e.preventDefault();
      var target_selector = $(this).data('target');
      if (!isOpen) {
        $(target_selector).slideDown();
      } else {
        $(target_selector).slideUp();
      }
      isOpen = !isOpen;
    });
  });