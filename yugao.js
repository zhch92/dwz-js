// JavaScript Document
function bian(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("jiemu").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "bian";
	// 操作内容
	for(i=0; j=document.getElementById("laoshi"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	
	
}
