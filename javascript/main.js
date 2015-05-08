$(function(){
	if( $.cookie("mySkinId") ){
		$("#getid").attr('href', 'css/' + $.cookie("mySkinId") + '.css');
		var defskinnum = parseInt($.cookie("mySkinId").replace(/[^0-9]/ig,""));
		$(".skinlist div").removeClass('active').eq(defskinnum).addClass('active');
	}
	$(".skinlist div").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var thisIdName = $(this).attr('id');
		$("#getid").attr('href', 'css/' + thisIdName + '.css');
		$.cookie("mySkinId",thisIdName,{
			path: '/',
			expires: 10
		});
	});
});