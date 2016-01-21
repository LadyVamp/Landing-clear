$(window).scroll(function() {
	var st = $(this).scrollTop();

	// // Parallax для текста
	// $(".header_text").css({
	// 	"transform" : "translate(0%, "+ st + "%"
	// });

	// Parallax для картинки
	$(".sect_2 img").css({
		"transform" : "translate(0%, "+ st /20+ "%"
	});

}); 