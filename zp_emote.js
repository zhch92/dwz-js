//function facesall()
//{
//	document.getElementById("facesall").innerHTML = facesallshow();
//}
//facesall();
function facesallshow(path)
{
	var facesall='';
	for(i = 1;i < 13;i ++)
	{
		var name = '[:'+emotename(i).substring(5)+':]';
		facesall+='<img src="'+path+'/images/emote/'+emotename(i)+'.gif" width="20" height="20" onclick=faceadd("'+name+'") title="'+faces(i)+'" style="cursor:pointer;"  />';
	}
	return facesall;
}
function faces(id)
{
	var faces = new Array(
	'',//0
	'mrgreen',//1
	'razz',//2
	//'sad',//3
	'smile',//4
	//'oops',//5
	//'grin',//6
	'eek',//7
	'???',//8
	//'cool',//9
	//'lol',//10
	//'mad',//11
	'twisted',//12
	'roll',//13
	'wink',//14
	'idea',//15
	'arrow',//16
	//'neutral',//17
	'cry',//18
	//'?',//19
	//'evil',//20
	//'shock',//21
	'!'//22
);
	return faces[id];
}
function emotename(id)
{
	var emotename = new Array(
	'',//0
	'icon_mrgreen',//1
	'icon_razz',//2
	//'icon_sad',//3
	'icon_smile',//4
	//'icon_redface',//5
	//'icon_biggrin',//6
	'icon_surprised',//7
	'icon_confused',//8
	//'icon_cool',//9
	//'icon_lol',//10
	//'icon_mad',//11
	'icon_twisted',//12
	'icon_rolleyes',//13
	'icon_wink',//14
	'icon_idea',//15
	'icon_arrow',//16
	//'icon_neutral',//17
	'icon_cry',//18
	//'icon_question',//19
	//'icon_evil',//20
	//'icon_eek',//21
	'icon_exclaim'//22
);
	return emotename[id];
}
function faceadd(name)
{
	document.getElementById("content").innerHTML += name;
}
function imgshow(id)
{
	var imgshow='';
	imgshow='<img src="/images/emote/'+emotename(id)+'.gif" width="20" height="20" />';
	return imgshow;
}