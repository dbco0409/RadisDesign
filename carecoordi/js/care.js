$(document).ready(function() {
	if($(window).width() < 640){
		m_slider=m5_slider();
	}else{
		m_slider="";
	}
})

$(window).resize(function(){
	if($(window).width() < 640){
		m_slider=m5_slider();
	}else{
		m_slider="";
	}
});

function m5_slider(){
	care_slider= new Swiper('#cody05 .set-m', {
		loop:true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
          el: "#cody05 .swiper-pagination",
		clickable: true,
        }
	});
	return m5_slider;
}