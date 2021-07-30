$(document).ready(function() {
	$("#file_add").modal();
});

function file_add(){
	var n=$("#file_add .cont1 .fileUp").length;
	$("#file_add .cont1").append('<input type="file" name="fileUp'+n+'"  class="fileUp">');
}