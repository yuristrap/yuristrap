window.mobileCheck = function() {var check = false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)){check = true;}return check;};
function whichTransitionEvent() {
	let t,
		el = document.createElement("fakeelement");
  
	let transitions = {
	  "transition"      : "transitionend",
	  "OTransition"     : "oTransitionEnd",
	  "MozTransition"   : "transitionend",
	  "WebkitTransition": "webkitTransitionEnd"
	}
  
	for (t in transitions) {
	  if (el.style[t] !== undefined)
		return transitions[t];
	}
}  
const transitionEvent = whichTransitionEvent();

function checkingNoticeTargetTransitioning(target, className) {
	if (target.hasClass(className)) {
		target.off(transitionEvent);
		target.removeClass(className);
		target.css('transition', '');
		target[0].offsetWidth;
	}
}
$(function(){	
	const body = $('body');
	let alertTimer;

    body.on('click', '[data-toggle="collapse"]', function(e){
		e.preventDefault();
		let collapseTarget;
		try {
			collapseTarget = $(this).data('target');
			if (collapseTarget === undefined) throw `[yuristrap] ${$(this)} : data-target not defined`;
		} catch (err) {
			console.error(err);
		}

		if (!$(collapseTarget).hasClass('show'))
			$(collapseTarget).addClass('show');
		else
			$(collapseTarget).removeClass('show');
    });
    body.on('click', '[data-toggle="modal"]', function(e){
		e.preventDefault();
		let modalTarget = '';
		let modalTargetName = undefined;
		let transitionSpeed = '.2';
		try {
			modalTargetName = $(this).data('target');
			if (modalTargetName === undefined) throw `[yuristrap] ${$(this)} : data-target not defined`;
			modalTarget = $(modalTargetName);
		} catch (err) {
			console.error(err);
		}
		try {
			if (modalTarget.data('speed') !== undefined) {
				transitionSpeed = Number(modalTarget.data('speed'));
				if (isNaN(transitionSpeed)) throw `[yuristrap] ${modalTargetName} : data-speed was wrong type`;
				transitionSpeed /= 1000;
			}
		} catch (err) {
			console.error(err);
		}
		
		if (!modalTarget.hasClass('addModalCloseEvent') && !modalTarget.hasClass('bg-disabled')) {
			modalTarget.addClass('addModalCloseEvent');
			for (var i = 0 ; i < modalTarget.length; i++) {
				modalTarget[i].addEventListener('click' , function(e) {
					if (e.target == this && $(this).hasClass('show')) {
						$(this).removeClass('show');
						$(this).addClass('removing');
						$(this).one(transitionEvent, (e) => {
							modalTarget.removeClass('removing');
							body.removeClass('modal-opend-' + (mobileCheck()? 'mobile' : 'window'));
							modalTarget.css('transition', '');
							$(modalTargetName + ' > .modal-content').css('transition', '');
						});
					}
				});
			}
		}
		
		if (!modalTarget.hasClass('show')) {
			modalTarget.addClass('show');
			body.addClass('modal-opend-' + (mobileCheck()? 'mobile' : 'window'));
			modalTarget.css('transition', `visibility 0s, padding ${transitionSpeed}s, opacity ${transitionSpeed}s linear`);
			$(modalTargetName + ' > .modal-content').css('transition', `all ${transitionSpeed}s`);
		}
		else {
			modalTarget.removeClass('show');
			modalTarget.addClass('removing');
			modalTarget.one(transitionEvent, (e) => {
				modalTarget.removeClass('removing');
				body.removeClass('modal-opend-' + (mobileCheck()? 'mobile' : 'window'));
				modalTarget.css('transition', '');
				$(modalTargetName + ' > .modal-content').css('transition', '');
			});
		}
    });
    body.on('click', '[data-toggle="notice"]', function(e){
		e.preventDefault();

		let noticeTarget = undefined;
		let transitionSpeed = '4.0';

		try {
			noticeTarget = $(this).data('target');
			if (noticeTarget === undefined) throw `[yuristrap] ${$(this)} : data-target not defined`;
		} catch (err) {
			console.error(err);
		}

		try {
			if ($(noticeTarget).data('speed') !== undefined) {
				transitionSpeed = Number($(noticeTarget).data('speed'));
				if (isNaN(transitionSpeed)) throw `[yuristrap] ${noticeTarget} : data-speed was wrong type`;
				transitionSpeed /= 1000;
			}
		} catch (err) {
			console.error(err);
		}

		noticeTarget = $(noticeTarget);

		checkingNoticeTargetTransitioning(noticeTarget, 'notice-box-showing');
		checkingNoticeTargetTransitioning(noticeTarget, 'notice-box-closing');

		noticeTarget.addClass('notice-box-showing');
		
		noticeTarget.css('pointer-events', 'all');
		noticeTarget.css('transition', `opacity ${transitionSpeed/2}s cubic-bezier(.1,1,0,1)`);

		noticeTarget.one(transitionEvent, (e) => {	
			noticeTarget.removeClass('notice-box-showing');
			noticeTarget.addClass('notice-box-closing');

			noticeTarget.css('transition', `opacity ${transitionSpeed/2}s cubic-bezier(1,0,1,.1)`);

			noticeTarget.one(transitionEvent, (e) => {
				noticeTarget.removeClass('notice-box-closing');
				noticeTarget.css('pointer-events', 'none');
				noticeTarget.css('transition', '');
			});
		});
    });	
	
	var locationHref = function (hash) {
		if (history.pushState) history.pushState(null, null, hash);
		else location.hash = hash;
	};

	$('[data-spy="scroll"]').each(function () {
		let beforeScrollTarget,
			scrollNavTarget;
		let self = $(this),
			scrollHead = $(this);
		let imBody = false;

		if (self.is('body')) {
			self = $(window);
			scrollHead = $('html, body');
			imBody = true;
		}

		try {
			scrollNavTarget = $(this).data('target');
			if (scrollNavTarget === undefined) throw `[yuristrap] ${$(this)} : data-target not defined`;
			scrollNavTarget = $(scrollNavTarget);
		} catch (err) {
			console.error(err);
		}

		scrollNavTarget.on('click', '[href]', function(e){
			let hrefTaget = $(this).attr('href');
			if (hrefTaget[0] !== '#') return;
			
			e.preventDefault();
			if (hrefTaget !== undefined && hrefTaget !== '#') {
				let target = $(hrefTaget); 
				scrollHead.animate({
					scrollTop: target.offset().top
				},
				{
					duration: 600,
					complete: locationHref(hrefTaget)
				});
			}
		});

		let navDatas = [], sectionDatas = [];
		scrollNavTarget.find('[data-scroll]').each(function(idx, element) {
			navDatas.push($(element));
			sectionDatas.push($($(element).attr('href')));
		});

		self.on('scroll', function(e){
			checkingScrollSpy(navDatas, sectionDatas, imBody ? document.documentElement.scrollTop : self.offset().top );
		});	

		function checkingScrollSpy(navDatas, sectionDatas, headScrollTop) {
			let isActiveScrollSpy = false;
			navDatas.forEach((navData, idx) => {
				if (sectionDatas[idx].offset().top - headScrollTop <= 20) {
					if (beforeScrollTarget !== undefined)
						beforeScrollTarget.removeClass('active');
					navData.addClass('active');
					beforeScrollTarget = navData;
					isActiveScrollSpy = true;
				}
			});
			if (!isActiveScrollSpy && beforeScrollTarget !== undefined) {
				beforeScrollTarget.removeClass('active');
				beforeScrollTarget = undefined;
			}
		}

		checkingScrollSpy(navDatas, sectionDatas, imBody ? document.documentElement.scrollTop : self.offset().top);
	});
});
