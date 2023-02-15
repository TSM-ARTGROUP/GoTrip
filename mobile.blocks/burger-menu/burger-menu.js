$(document).ready(function(){

	// Параметры
	var BM = $('.burger-menu');
	var BMItems = $(".burger-menu__items");
	var BMicon = $(".burger-menu__icon");
	var BMParetHeight = $('.burger-menu').parent().css("height");
	var BMItemsHeight = BMItems.css('height');
	// Выставление стандартный значений
	BM.parent().css({
		'position': 'relative',
		'margin-bottom': '0',
		'transition': 'all 0.4s linear'
	});

	BMItems.css({
		'top': BMParetHeight
	})

	BMItems.hide();

	// Анимации burger-menu


	BMicon.click(function(){
		if (!BMicon.hasClass("open")) {
			BM.parent().css({
				'margin-bottom': BMItemsHeight
			});

			BMItems.slideDown({ // плавно скрывыаем элементы <div> в документе
				duration: 400, // продолжительность анимации
				easing: "linear", // скорость анимации
				progress: function(){			
					BMItems.css({
						'margin-block-start': "20px",
						'padding-block-start': '20px'
					})
				}
			});
		};
	});


	BMicon.click(function(){
		if (BMicon.hasClass("open")) {
			
			BM.parent().css({
				'margin-bottom': '0'
			});


			BMItems.slideUp({ // плавно скрывыаем элементы <div> в документе
				duration: 400, // продолжительность анимации
				easing: "linear", // скорость анимации
				progress: function(){			
					BMItems.css({
						'margin-block-start': "20px",
						'padding-block-start': '20px'
					})
				}
			  });

		};	

	});

	
	BMicon.click(function(){
		$(this).toggleClass("open");
	});

	$('.burger-menu').css({
		'display': 'none'
	});

});