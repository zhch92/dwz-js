   var whichText;
    function selectStation(obj) {
   var objSelStation = obj;
        if (obj.selectedIndex != -1) {
            var stationName = obj.options[obj.selectedIndex].text;
            whichText.value = stationName;
        }
        showDivStation(this, false,'selStation')//Êó±êµ¥»÷Ä³Ò»Ñ¡ÏîÑ¡¶¨ºó¹Ø±ÕÏÂÀ­¿ò
    }

//ÏìÓ¦textµÄÊÂ¼þ
   var pageD =0, pageU;
    function similarFind(txtObj,seledName) {
        var curStationName = txtObj.value;
        var objSelStation = eval("document.myform."+seledName);//¸ù¾ÝÊµ¼ÊµÄform nameÐÞ¸Ä
        var stationLength = objSelStation.options.length;
   pageU = pageD;
        
//Æ¥ÅäÓÃtextÖÐµÄÊý¾Ý¸úÏÂÀ­¿òÖÐµÄÊý¾Ý
        for (var i=0; i<stationLength; i++) {
            var stationName = objSelStation.options[i].text;
            var re = new RegExp("^" + curStationName);
       if (stationName.match(re)) {
                if (i<stationLength - 10) {
                    objSelStation.selectedIndex = i + 10;
                }
                objSelStation.selectedIndex = i;
       pageD = i;
       pageU = i;
                break;
            }
        }
//ÏìÓ¦ÏÂÒÆ¼ü
   if(event.keyCode==40) {
     pageD++;
     if(pageD==objSelStation.options.length) pageD=0;
     txtObj.value=objSelStation.options[pageD].text ;
     objSelStation.selectedIndex = pageD;
   }
//ÏìÓ¦ÉÏÒÆ¼ü
   if(event.keyCode==38) {
     --pageU;
     if(pageU<0) pageU=objSelStation.options.length-1;
     txtObj.value = objSelStation.options[pageU].text;
     objSelStation.selectedIndex = pageU;
    }
}
//ÏÂÀ­¿òÏÔÊ¾Î»ÖÃ
    function showDivStation(obj, b,selName) {
        var divStation = eval("document.myform."+selName);//¸ù¾ÝÊµ¼ÊµÄform nameÐÞ¸Ä
        if (b) {
            whichText = obj;
            divStation.style.top = 20;
            divStation.style.left = 0;
            divStation.style.display="block";
            similarFind(obj,selName);
        } else {
            divStation.style.display="none";
        }
    }