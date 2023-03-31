var swiper = new Swiper(".hero-slider", {
	pagination: {
		el: ".hero-slider-pagination",
		dynamicBullets: true,
	},
});

$(function () {
	$('.section-courses .tab:first').addClass('active');
	$('.section-courses .tab-item').not(':first').hide();
	$('.section-courses .tab').click(function () {
		$('.section-courses .tab').removeClass('active').eq($(this).index()).addClass('active');
		$('.section-courses .tab-item').hide().eq($(this).index()).fadeIn();
	});
})
$(document).ready(function () {

    imgSvg = $('img.img-svg');

    imgSvg.each(function () {
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function (data) {
            var $svg = $(data).find('svg');
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
});
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos}, 1500);
});
$(".btn-phone-wrapper .btn-phone").click(function () {
    $(this).siblings(".btn-phone-wrapper-inner").toggleClass("active");
});
$(".btn-message").click(function () {
    $(this).siblings(".btn-telegram").toggleClass("active");
    $(this).siblings(".btn-phone-wrapper").toggleClass("active");
});
$(document).mouseup(function (e) {
    var container = $(".action-btns");
    if (container.has(e.target).length === 0) {
        $(".btn-phone-wrapper-inner").removeClass("active");
        $(".btn-telegram").removeClass("active");
        $(".btn-phone-wrapper").removeClass("active");
    }
});

