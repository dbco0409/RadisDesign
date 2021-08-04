$(document).ready(function() {
	$("#header .m_nav").click(function(){
		if($(window).width() < 768){
		$("#allMenu").fadeIn();
		$("#header .m_nav").hide();
		$("#header .inner .m_close").show();
		}
	});
	$("#header .inner .m_close").click(function(){
		if($(window).width() < 768){
		$("#allMenu").fadeOut();
		$("#header .m_nav").show();
		$("#header .inner .m_close").hide();
		}
	});
	$("#allMenu .menu div.y").click(function(){
		if($(window).width() < 768){
			if(!$(this).hasClass("on")){
				$("#allMenu .menu div.y").removeClass("on");
				$(this).addClass("on");
				$(this).find(".sub").slideDown();
			}else{
				$("#allMenu .menu div.y").removeClass("on");
				$("#allMenu .menu div.y").find(".sub").slideUp();
			}
		}
	});
	$("#footer .inner .w_box").click(function(){
		if(!$(this).hasClass("no_sm")){
			$("#footer .inner .w_box a").hide();
			$(this).addClass("no_sm");
			$(this).html("주식회사 케어닥은 대한민국 비급여 의료시장에서 소비자와 돌보미(간병인) 간의 정보 비대칭을 해소하여 투명한 비급여 돌봄(간병) 시장을 만들기 위해 어르신 돌보미 서비스를 제공하고 있습니다. 주식회사 케어닥은 직업소개업에 등록된 알선 업체(제2019-3220237-14-5-00055호)로 구인회원과 케어코디(돌보미)의 알선 및 소개를 진행하고 있으며 관련 알선 및 중개 관련 규정을 준수하고 있습니다. 또, 케어코디(돌보미)가 제공하는 돌봄(간병)서비스에 대한 계약 당사자가 아니므로 어떠한 법적 책임도 부담하지 않습니다. 또한, 회원간의 예약 및 온라인 수납 정보 시스템을 제공할 뿐, 통신판매의 당사자가 아닙니다. 모든 돌봄(간병)서비스는 각 돌보미(간병인)이 직접 수행하며, 모든 돌보미(간병인)은 독립적으로 돌봄(간병)서비스를 제공합니다. 그리고 케어닥에 가입한 회원들간에는 어떠한 조직적인 관계가 없음을 밝힙니다. 회원들간 계약 체결 후 분쟁이 발생할 경우, 케어닥은 계약 당사자가 아닌 중재인으로써 이를 원만하고 신속하게 해결할 수 있도록 케어닥 안심중재솔루션을 운영하고 있습니다.");
		}else{
			$("#footer .inner .w_box a").show();
			$(this).removeClass("no_sm");
			$(this).html("주식회사 케어닥은 대한민국 비급여 의료시장에서 소비자와 돌보미(간병인) 간의 정보 비대칭을 해소하여 투명한 비급여 돌봄(간병) 시장을 만들기 위해 어르신 돌보미 서비스를 제공하고 있습니다. 주식회사 케어닥은 직업소개업에 등록된 알선 업체(제2019-3220237-14-5-00055호)로 구인회원과 케어코디(돌보미)의 알선 ...더보기");
		}
	});
})
$(window).resize(function(){
	if($(window).width() < 768){
		$("#header .m_nav, #header .m_member").show();
		$("#allMenu, #header .m_close").hide();
		$("#header .menu").hide();
	}else{
		$("#header .m_nav, #header .m_close, #header .m_member").hide();
		$("#header .menu").show();
		$("#allMenu").hide();
	}
});

function fnMove(seq){
		var offset = $(seq).offset();
		$('html, body').animate({scrollTop : offset.top}, 400);
}

function fnback(n){
	history.back();
}
function loca(n){
	location.href=n;
}

function chat_open(){
	$("#chat").show();
}

function chat_close(){
	$("#chat").hide();
}

function btn_val(id, val,num){
	$("#"+id).val(val);
	$(".box-btn .btn").removeClass("active");
	$(".box-btn .btn").eq(num).addClass("active");
}