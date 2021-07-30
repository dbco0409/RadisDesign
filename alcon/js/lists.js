$(function(){
	$(".m_menu").click(function(){
		if(window.innerWidth<950){
			$("#fixed-bg").fadeIn();
			$(".m_menu").hide();
			$(".m_close").show();
			$(".menu").show().animate({"right":"0px"});
		}else{
			$("#fixed-bg").fadeOut();
			$(".m_close, .m_menu").hide();
			$(".menu").css("display","");
		}
	});
	$(".m_close, #fixed-bg").click(function(){
		if(window.innerWidth<950){
			$(".m_menu").show();
			$(".m_close").hide();
			$("#fixed-bg").fadeOut();
			$(".menu").animate({"right":"-100%"},function(){
				$(".menu").hide();
			});
		}else{
			$("#fixed-bg").fadeOut();
			$(".m_close, .m_menu").hide();
			$(".menu").css("display","");
		}
	});
	$.datepicker.regional['ko'] = {
        closeText: '닫기',
        prevText: '이전달',
        nextText: '다음달',
        currentText: '오늘',
        monthNames: ['1월(JAN)','2월(FEB)','3월(MAR)','4월(APR)','5월(MAY)','6월(JUN)',
        '7월(JUL)','8월(AUG)','9월(SEP)','10월(OCT)','11월(NOV)','12월(DEC)'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월',
        '7월','8월','9월','10월','11월','12월'],
        dayNames: ['일','월','화','수','목','금','토'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        weekHeader: 'Wk',
        dateFormat: 'yy-mm-dd',
		changeMonth: true, 
		changeYear: true, 
		showButtonPanel: true, 
		yearRange: "c-2:c+1", 
    };
	$.datepicker.setDefaults($.datepicker.regional['ko']);
    $("#fr_date, #to_date").datepicker({maxDate: "+0d"});
	$("#date").datepicker();
	$("#ywal").datepicker({currentText: '이번달',closeText: '선택', dateFormat: 'yy.mm', changeMonth: true, changeYear: true, showButtonPanel: true, onClose: function(dateText, inst) { var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val(); var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val(); $(this).datepicker('setDate', new Date(year, month, 1)); $(".ui-datepicker-calendar").css("display","none"); } }); $("#ywal").focus(function () { $(".ui-datepicker-calendar").css("display","none"); $("#ui-datepicker-div").position({ my: "center top", at: "center bottom", of: $(this) }); });
});
$(window).resize(function(){
	$("#fixed-bg").fadeOut();
	if(window.innerWidth<950){
		$(".menu, .m_close").hide();
		$(".m_menu").show();
	}else{
		$(".m_close, .m_menu").hide();
		$(".menu").css("display","");
	}
});

function list_order(n){
	if(n==1){
		$("#ywal").css("display","inline-block");
		$(".date_group").hide();
	}else{
		$("#ywal").hide();
		$(".date_group").css("display","inline-block");
	}
}

var k=0;
function prod_add(n){
	var htm='<button type="button" name="save" class="btn btn-delete" onclick="remove_col('+k+')">삭제</button>';
	if(n==1){
		if($("select[name=lens]").val()!=""){
			$("#lens_add").append('<div class="col-b" id="b'+k+'">'+$("#lens").html()+"</div>");
			$("#b"+k).find('.frm1-1').html('<input type="hidden" name="" value="'+$("#lens .frm1-1 select").val()+'">'+$("#lens .frm1-1 select").val());
			$("#b"+k).find('.frm1-2').html('<input type="hidden" name="" value="'+$("#lens .frm1-2 select").val()+'">'+$("#lens .frm1-2 select").val());
			$("#b"+k).find('.frm1-3').html('<input type="hidden" name="" value="'+$("#lens .frm1-3 select").val()+'">'+$("#lens .frm1-3 select").val());
			$("#b"+k).find('.frm1-4').html('<input type="hidden" name="" value="'+$("#lens .frm1-4 input").val()+'">'+$("#lens .frm1-4 input").val());
			$("#b"+k).find('.frm1-5').html('<input type="hidden" name="" value="'+$("#lens .frm1-5 input").val()+'">'+$("#lens .frm1-5 input").val());
		}else{
			return;
		}
	}else{
		$("#consum_add").append('<div class="col-b" id="b'+k+'">'+$("#consum").html()+"</div>");
		$("#b"+k).find('.frm2-1').html('<input type="hidden" name="" value="'+$("#consum .frm2-1 select").val()+'">'+$("#consum .frm2-1 select").val());
		$("#b"+k).find('.frm2-2').html('<input type="hidden" name="" value="'+$("#consum .frm2-2 input").val()+'">'+$("#consum .frm2-2 input").val());
		$("#b"+k).find('.frm2-3').html('<input type="hidden" name="" value="'+$("#consum .frm2-3 input").val()+'">'+$("#consum .frm2-3 input").val());
	}
	$("#b"+k).find('.btns').html(htm);
	k++;
}

function remove_col(n){
	$("#b"+n).remove();
}

function all_chks(){
	if($(".all_chk").is(":checked")==false){
		$(".chk").prop("checked",false);
	}else{
		$(".chk").prop("checked",true);
	}
}

function select_pop(url, name, w){
	if(window.innerWidth<w){
		wwidth='';
	}else{
		wwidth='width='+w+',';
	} // 반응형 고려

	var options = 'top=10, left=10, '+wwidth+' height=796, status=no, menubar=no, toolbar=no, resizable=no';
	window.open(url, name, options);
}

// 재고부족 접수데이터 팝업에서 선택 적용시
function cursomer_sel(no){
	//여기서 ajax연동하시면 됩니다.
	opener.document.getElementById("D_NAME").value='대전 이안과병원';
	opener.document.getElementById("D_TELN").value='010-2323-1212';
	opener.document.getElementById("D_ADDRDESC").value='대전 중구 대종로 468 천우빌딩 7층';
	self.close();
}

// 고객선택 팝업에서 선택 적용시
function cursomer_sel2(no){
	//여기서 ajax연동하시면 됩니다.
	opener.document.getElementById("A_NAME").value='대전 이안과병원';
	opener.document.getElementById("A_TELN").value='010-2323-1212';
	opener.document.getElementById("A_ADDR").value='대전 중구 대종로 468 천우빌딩 7층';
	self.close();
}

// 소모품 검색 팝업에서 선택 적용시
function consum_sel(no){
	//여기서 ajax연동하시면 됩니다.
	var g=$("#consum_add .col-b", opener.document).length+1;
	var htm='<button type="button" name="save" class="btn btn-delete" onclick="remove_col('+g+')">삭제</button>';
	$("#consum_add", opener.document).append('<div class="col-b" id="b'+g+'">'+$("#consum", opener.document).html()+"</div>");
	$("#b"+g, opener.document).find('.frm2-1').html('<input type="hidden" name="" value="100000179">100000179'); // 제품코드
	$("#b"+g, opener.document).find('.frm2-2').html('<input type="hidden" name="" value="(24053) EXPRESS GLAUCOMA FILTRATIONDEVICE P50(1EA)">(24053) EXPRESS GLAUCOMA FILTRATIONDEVICE P50(1EA)'); // 제품명
	$("#b"+g, opener.document).find('.frm2-3').html('<input type="hidden" name="" value="1">1'); //개수
	self.close();

	$("#b"+g, opener.document).find('.btns').html(htm);
	g++;
	self.close();
}

function orchk_search(){
	var reload=Number($("#reload").val())*1000;
	if($("#reload").val()!=0){
		window.setTimeout(function(){
			 $("#reload_box").load(window.location.href + "#reload_box");
		},reload); //선택된 시간마다 새로고침 시킨다.
	}
}
