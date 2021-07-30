function pwd_view(){
	if($("#pwd").attr("type")=="password"){
		$("#pwd").attr("type","text");
		$("#pwd-addon i").removeClass("fa-eye");
		$("#pwd-addon i").addClass("fa-eye-slash");
	}else{
		$("#pwd").attr("type","password");
		$("#pwd-addon i").removeClass("fa-eye-slash");
		$("#pwd-addon i").addClass("fa-eye");
	}
}