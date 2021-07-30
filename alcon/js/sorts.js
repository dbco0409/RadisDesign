$( function() {
	var lang_kor = {
        "decimal" : "",
        "emptyTable" : "데이터가 없습니다.",
        "info" : "",
        "infoEmpty" : "",
        "infoFiltered" : "_MAX_",
        "infoPostFix" : "",
        "thousands" : ",",
        "lengthMenu" : "_MENU_ 개씩 보기",
        "loadingRecords" : "로딩중...",
        "processing" : "처리중...",
        "search" : "검색 : ",
        "zeroRecords" : "검색된 데이터가 없습니다.",
        "paginate" : {
            "first" : "처음",
            "last" : "마지막",
            "next" : "다음",
            "previous" : "이전"
        }
    };

	$("#list").DataTable({
		dom: 'Bfrtip',
		buttons: [
			'copy', 'excel', 'pdf'
		],
		columnDefs: [ {targets: 'no-sort', orderable: false }],
		language : lang_kor,
		ordering: true,
		colReorder: true,
		stateSave: true,
		lengthChange: true,
		scrollY: 400,
		scrollX: true
	});
	$("#list2").DataTable({
		dom: 'Bfrtip',
		buttons: [
			'copy', 'excel', 'pdf'
		],
		columnDefs: [ {targets: 'no-sort', orderable: false }],
		language : lang_kor,
		ordering: true,
		colReorder: true,
		stateSave: true,
		lengthChange: true
	});
});