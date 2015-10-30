// JavaScript Document

function vary(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("jiaoyan").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "vary";
	// 操作内容
	for(i=0; j=document.getElementById("cloud"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	
	
}



function space(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("kongjian").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "space";
	// 操作内容
	for(i=0; j=document.getElementById("space"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	
	
}


function special(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("zhuanji").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "special";
	// 操作内容
	for(i=0; j=document.getElementById("collect"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	
	
}


function study(showContent,selfObj){
	// 操作标签
	var tag = document.getElementById("jiaoshi").getElementsByTagName("li");
	var taglength = tag.length;
	for(i=0; i<taglength; i++){
		tag[i].className = "";
	}
	selfObj.parentNode.className = "study";
	// 操作内容
	for(i=0; j=document.getElementById("diary"+i); i++){
		j.style.display = "none";
	}
	document.getElementById(showContent).style.display = "block";
	
	
}
