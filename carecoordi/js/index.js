$(document).ready(function() {

	var main01_slider = new Swiper('#main01 .main_slider', {
		slidesPerView: 1,
        spaceBetween: 25,
		loop:true,
		centeredSlides: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		  },
		pagination: {
          el: "#main01 .pages .pgNum",
          type: "fraction",
        },
		});
	$("#main01 .pages .pause").click(function(){
		main01_slider.autoplay.stop();
	});
	$("#main01 .pages .prev").click(function(){
		main01_slider.slidePrev();
	});
	$("#main01 .pages .next").click(function(){
		main01_slider.slideNext();
	});

	var main02_slider1 = new Swiper('#main02 .list_slider1', {
		slidesPerView: 'auto',
        spaceBetween: 10,
		loop:true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		  },
		pagination: {
          el: "#main02 .inner1 .pages .pgNum",
          type: "fraction",
        },
		});

	$("#main02 .inner1 .pages .pause").click(function(){
		main02_slider1.autoplay.stop();
	});
	$("#main02 .inner1 .pages .prev").click(function(){
		main02_slider1.slidePrev();
	});
	$("#main02 .inner1 .pages .next").click(function(){
		main02_slider1.slideNext();
	});

	var main02_slider2 = new Swiper('#main02 .list_slider2', {
		slidesPerView: 'auto',
        spaceBetween: 10,
		loop:true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		  },
		pagination: {
          el: "#main02 .inner2 .pages .pgNum",
          type: "fraction",
        },
		});

	$("#main02 .inner2 .pages .pause").click(function(){
		main02_slider2.autoplay.stop();
	});
	$("#main02 .inner2 .pages .prev").click(function(){
		main02_slider2.slidePrev();
	});
	$("#main02 .inner2 .pages .next").click(function(){
		main02_slider2.slideNext();
	});
	$("#main03 .cate .btn").click(function(){
		$("#main03 .cate .btn").removeClass("over");
		$(this).addClass("over");
		
		//ajax 등으로 구현하여 다음과 같이 내용을 변경하시면 됩니다.
		//$("#main03 .set").html("")
	});
	
})
$(window).resize(function(){
	
});
