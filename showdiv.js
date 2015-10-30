/*
document.getViewportHeight = function(){
	if (window.innerHeight!=window.undefined) return window.innerHeight;
	if (document.compatMode=='CSS1Compat') return document.documentElement.clientHeight;
	if (document.body) return document.body.clientHeight; 
	return window.undefined; 
}

document.getViewportWidth = function(){
	if (window.innerWidth!=window.undefined) return window.innerWidth; 
	if (document.compatMode=='CSS1Compat') return document.documentElement.clientWidth; 
	if (document.body) return document.body.clientWidth; 
}
	
	
function getsize()
{
        var theBody = document.body;			
		var fullHeight = document.getViewportHeight();
		var fullWidth = document.getViewportWidth();
		
		// Determine what's bigger, scrollHeight or fullHeight / width
		if (fullHeight > theBody.scrollHeight) {
			this.popHeight = fullHeight;
		} else {
			this.popHeight = theBody.scrollHeight;
		}
		
		if (fullWidth > theBody.scrollWidth) {
			this.popWidth = fullWidth;
		} else {
			this.popWidth = theBody.scrollWidth;
		}
		document.getElementById('fade').style.width=this.popWidth + "px";
		document.getElementById('fade').style.height=this.popHeight + "px";

}*/
	document.getViewportHeight = function(){
	if (window.innerHeight!=window.undefined) return window.innerHeight;
	if (document.compatMode=='CSS1Compat') return document.documentElement.clientHeight;
	if (document.body) return document.body.clientHeight; 
	return window.undefined; 
}

document.getViewportWidth = function(){
	if (window.innerWidth!=window.undefined) return window.innerWidth; 
	if (document.compatMode=='CSS1Compat') return document.documentElement.clientWidth; 
	if (document.body) return document.body.clientWidth; 
}
	
function showDetail() {
  var theBody = document.body;			
		var fullHeight = document.getViewportHeight();
		var fullWidth = document.getViewportWidth();
		
		// Determine what's bigger, scrollHeight or fullHeight / width
		if (fullHeight > theBody.scrollHeight) {
			this.popHeight = fullHeight;
		} else {
			this.popHeight = theBody.scrollHeight;
		}
		
		if (fullWidth > theBody.scrollWidth) {
			this.popWidth = fullWidth;
		} else {
			this.popWidth = theBody.scrollWidth;
		}
		
//背景
  var bgObj=document.getElementById("bgDiv");
  bgObj.style.width = this.popWidth + "px";
  bgObj.style.height =this.popHeight + "px";

//定义窗口
  var msgObj=document.getElementById("msgDiv");
  //msgObj.style.marginTop = -175 +  document.documentElement.scrollTop + "px";

//关闭
  
  msgObj.style.display = bgObj.style.display = "block";

}