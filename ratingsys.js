var sMax;	// 最大数量的星星即最大评分值
var holder; // 鼠标停留的评分控件
var preSet; // 保存了评分值（通过单击来进行评分）
var rated=new Array(); //是否评分过，并保存了结果（注意此值一旦设为空，就不能再评分）

// 鼠标停留事件
function rating(idPre,num){
	sMax = 0;	// 默认值为0
	for(n=0; n<num.parentNode.childNodes.length; n++){
		if(num.parentNode.childNodes[n].nodeName == "A"){
			sMax++;	
		}
	}
	
	if(!rated[idPre]){
		
		s = num.id.replace(idPre+'_', ''); // 获取选中的星星的索引，这里使用_1,_2,_3,_4,_5来做为评分控件的ID，当然也有其他的方式。
		a = 0;
		for(i=1; i<=sMax; i++){		
			if(i<=s){
				
				document.getElementById(idPre+"_"+i).className = "on";
				document.getElementById("rateStatus").innerHTML = num.title;	
				holder = a+1;
				a++;
			}else{
				
				document.getElementById(idPre+"_"+i).className = "";
			}
		}
	}
}

// 离开事件
function off(idPre,me){
	if(!rated[idPre]){
		if(!preSet){	
			for(i=1; i<=sMax; i++){		
				document.getElementById(idPre+"_"+i).className = "";
				document.getElementById("rateStatus").innerHTML = me.parentNode.title;
			}
		}else{
			rating(idPre,preSet);
		}
	}
}

// 点击进行评分
function rateIt(idPre,me){
	if(!rated[idPre]){
		document.getElementById("rateStatus").innerHTML = me.title;//document.getElementById("ratingSaved").innerHTML + " :: "+
		preSet = me;
		//rated=1;  //设为1以后，就变成了最终结果，不能再修改评分结果
//		rated[idPre]=1;
		sendRate(me);
		rating(idPre,me);
	}
}


