$(document).ready(function() {
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
	$("#startDay, #endDay").datepicker();

	$("#careStart").timepicker({
		'minTime': '2:00pm', // 부터
		'maxTime': '11:30pm', // 까지
		step: 15,            //시간간격 : 15분
		timeFormat: "A h:i"    //AM/PM 시간:분 으로표시
	});

});