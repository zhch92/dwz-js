//根据答案数制作答题卡选项
function judgechar(dati,tihao,i){
	var result = [];
	if(i==1){
		result.push("A<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
	}
	if(i==2){
		result.push("A<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
	}
	if(i==3){
		result.push("A<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
	}
	if(i==4){
		result.push("A<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
		result.push("D<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='D'/>");
	}
	if(i==5){
		result.push("A<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
		result.push("D<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='D'/>");
		result.push("E<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='E'/>");
	}
	if(i==6){
		result.push("A<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
		result.push("D<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='D'/>");
		result.push("E<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='E'/>");
		result.push("F<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='F'/>");
	}
	if(i==7){
		result.push("A<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
		result.push("D<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='D'/>");
		result.push("E<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='E'/>");
		result.push("F<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='F'/>");
		result.push("G<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='G'/>");
	}
	if(i==8){
		result.push("A<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
		result.push("D<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='D'/>");
		result.push("E<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='E'/>");
		result.push("F<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='F'/>");
		result.push("G<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='G'/>");
		result.push("H<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='H'/>");
	}
	if(i==9){
		result.push("A<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
		result.push("D<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='D'/>");
		result.push("E<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='E'/>");
		result.push("F<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='F'/>");
		result.push("G<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='G'/>");
		result.push("H<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='H'/>");
		result.push("I<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='I'/>");
	}
	if(i==10){
		result.push("A<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
		result.push("D<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='D'/>");
		result.push("E<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='E'/>");
		result.push("F<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='F'/>");
		result.push("G<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='G'/>");
		result.push("H<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='H'/>");
		result.push("I<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='I'/>");
		result.push("J<input type='radio' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='J'/>");
	}
	return result.join("");
}
//根据答案数制作答题卡选项
function judgeduoxuan(dati,tihao,i){
	var result = [];
	if(i==1){
		result.push("A<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
	}
	if(i==2){
		result.push("A<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
	}
	if(i==3){
		result.push("A<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
	}
	if(i==4){
		result.push("A<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
		result.push("D<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='D'/>");
	}
	if(i==5){
		result.push("A<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
		result.push("D<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='D'/>");
		result.push("E<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='E'/>");
	}
	if(i==6){
		result.push("A<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
		result.push("D<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='D'/>");
		result.push("E<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='E'/>");
		result.push("F<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='F'/>");
	}
	if(i==7){
		result.push("A<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
		result.push("D<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='D'/>");
		result.push("E<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='E'/>");
		result.push("F<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='F'/>");
		result.push("G<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='G'/>");
	}
	if(i==8){
		result.push("A<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
		result.push("D<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='D'/>");
		result.push("E<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='E'/>");
		result.push("F<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='F'/>");
		result.push("G<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='G'/>");
		result.push("H<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='H'/>");
	}
	if(i==9){
		result.push("A<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
		result.push("D<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='D'/>");
		result.push("E<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='E'/>");
		result.push("F<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='F'/>");
		result.push("G<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='G'/>");
		result.push("H<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='H'/>");
		result.push("I<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='I'/>");
	}
	if(i==10){
		result.push("A<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='A'/>");
		result.push("B<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='B'/>");
		result.push("C<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='C'/>");
		result.push("D<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='D'/>");
		result.push("E<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='E'/>");
		result.push("F<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='F'/>");
		result.push("G<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='G'/>");
		result.push("H<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='H'/>");
		result.push("I<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='I'/>");
		result.push("J<input type='checkbox' id='"+dati+"_"+tihao+"' name='"+dati+"_"+tihao+"' value='J'/>");
	}
	return result.join("");
}
//判断题号
function judgenum(i){
	var qid = null;
	if(i==1){
		qid="一";
	}
	if(i==2){
		qid="二";
	}
	if(i==3){
		qid="三";
	}
	if(i==4){
		qid="四";
	}
	if(i==5){
		qid="五";
	}
	if(i==6){
		qid="六";
	}
	if(i==7){
		qid="七";
	}
	if(i==8){
		qid="八";
	}
	if(i==9){
		qid="九";
	}
	if(i==10){
		qid="十";
	}
	if(i==11){
		qid="十一";
	}
	if(i==12){
		qid="十二";
	}
	if(i==13){
		qid="十三";
	}
	if(i==14){
		qid="十四";
	}
	if(i==15){
		qid="十五";
	}
	if(i==16){
		qid="十六";
	}
	if(i==17){
		qid="十七";
	}
	if(i==18){
		qid="十八";
	}
	if(i==19){
		qid="十九";
	}
	if(i==20){
		qid="二十";
	}
	if(i==21){
		qid="二十一";
	}
	if(i==22){
		qid="二十二";
	}
	if(i==23){
		qid="二十三";
	}
	if(i==24){
		qid="二十四";
	}
	if(i==25){
		qid="二十五";
	}
	if(i==26){
		qid="二十六";
	}
	if(i==27){
		qid="二十七";
	}
	if(i==28){
		qid="二十八";
	}
	if(i==29){
		qid="二十九";
	}
	if(i==30){
		qid="三十";
	}
	if(i==31){
		qid="三十一";
	}
	if(i==32){
		qid="三十二";
	}
	if(i==33){
		qid="三十三";
	}
	if(i==34){
		qid="三十四";
	}
	if(i==35){
		qid="三十五";
	}
	if(i==36){
		qid="三十六";
	}
	if(i==37){
		qid="三十七";
	}
	if(i==38){
		qid="三十八";
	}
	if(i==39){
		qid="三十九";
	}
	if(i==40){
		qid="四十";
	}
	if(i==41){
		qid="四十一";
	}
	if(i==42){
		qid="四十二";
	}
	if(i==43){
		qid="四十三";
	}
	if(i==44){
		qid="四十四";
	}
	if(i==45){
		qid="四十五";
	}
	if(i==46){
		qid="四十六";
	}
	if(i==47){
		qid="四十七";
	}
	if(i==48){
		qid="四十八";
	}
	if(i==49){
		qid="四十九";
	}
	if(i==50){
		qid="五十";
	}
	return qid;
}
