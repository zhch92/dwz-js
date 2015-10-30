/*基于jQuery简单Ajax调用
 * params:参数
 * usrStr:服务地址
 * returnType:返回数据类型
 * asyncOption:同步异步策略
 * handler:回调方法
 * 用例：AjaxCommonTools("","xx地址",'json',true,function(data){alert(data)});
 */
function  AjaxCommonTools(params,urlStr,returnType,asyncOption,handler){
	$.ajax({
		type : "post",
		url  : urlStr,
		data : params,
		dataType : returnType,
		async: asyncOption,
		success  : handler
	});
}


