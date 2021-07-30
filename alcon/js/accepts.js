$(function(){
	$(".auto_chk_tb td.t_num").each(function(e){
		$(".auto_chk_tb input.type").eq(e).change(function(){
			if($(".auto_chk_tb input.type").eq(e).is(":checked")==true){
				$(".auto_chk_tb td.t_num").eq(e).text('U');
				$(".auto_chk_tb input.chk").eq(e).prop("checked",true);
			}else{
				$(".auto_chk_tb td.t_num").eq(e).text(e+1);
				$(".auto_chk_tb input.chk").eq(e).prop("checked",false);
			}
		});
		$(".auto_chk_tb select.traf").eq(e).change(function(){
			$(".auto_chk_tb td.t_num").eq(e).text('U');
			$(".auto_chk_tb input.chk").eq(e).prop("checked",true);
		});
		$(".auto_chk_tb input.GEditBack").eq(e).change(function(){
			if($(".auto_chk_tb input.GEditBack").eq(e).is(":checked")==true){
				$(".auto_chk_tb td.t_num").eq(e).text('U');
				$(".auto_chk_tb input.chk").eq(e).prop("checked",true);
			}else{
				$(".auto_chk_tb td.t_num").eq(e).text(e+1);
				$(".auto_chk_tb input.chk").eq(e).prop("checked",false);
			}
		});
	})

});