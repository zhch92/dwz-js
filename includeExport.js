
// wqr 2015-5-13 添加初始化检查，根据结果动态生成超链接  
function check($this){
	var id = $this.attr("id");
	$.post($this.attr("href").split("/")[1] + "/downloadStatus!checkDownloadStatus", null,
			function(data) {
				if (data.count > 0){
					var massage = "您还有" + data.count + "次下载机会，确认要导出这些记录吗?";
					
			  		$("#" + id).attr("title", massage);
				}else { 
					$("#" + id).bind("click", function(){
					  	alertMsg.info("对不起，您今天的下载次数已到最大值");
					  });
				}
			}, "json");
}