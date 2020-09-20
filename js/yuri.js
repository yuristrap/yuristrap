$(function(){
    $('body').on('click', '[data-toggle="collapse"]', function(e){
		e.preventDefault();
		var collapseTarget = $(this).data('target');

		if (!$(collapseTarget).hasClass('show'))
			$(collapseTarget).addClass('show');
		else
			$(collapseTarget).removeClass('show');
    });
    $('body').on('click', '[data-toggle="modal"]', function(e){
		e.preventDefault();
		var modalTarget = $(this).data('target');
		
		if (!$(modalTarget).hasClass('addModalCloseEvent') && !$(modalTarget).hasClass('bg-disabled')) {
			$(modalTarget).addClass('addModalCloseEvent');
			for (var i = 0 ; i < $(modalTarget).length; i++) {
				$(modalTarget)[i].addEventListener('click' , function(e) {
				   if (e.target == this && $(this).hasClass('show'))
						$(this).removeClass('show');
				});
			}
		}		
		
		if (!$(modalTarget).hasClass('show'))
			$(modalTarget).addClass('show');
		else
			$(modalTarget).removeClass('show');
    });
});
