 var jsReady = false;
	     function isReady() {
	         return jsReady;
	     }
	     function pageInit() {
	         jsReady = true;
	        
	     }
	     function thisMovie(movieName) {
	         if (navigator.appName.indexOf("Microsoft") != -1) {
	             return window[movieName];
	         } else {
	             return document[movieName];
	         }
	     }
	     function sendToActionScript(methodName,para) {
		     var OS=getOS();
			 switch(OS){
			     case "MSIE":
				 {
	               document.getElementById('flashPaperIE').sendToActionScript(methodName,para);			   
				 }
				 break;
				 case "Firefox":
				 {
	              document.getElementById('flashPaperFF').sendToActionScript(methodName,para);	
				 }
				 break;
				 default:
				 {
				  document.getElementById('flashPaperIE').sendToActionScript(methodName,para);	
				 }
			}		
	         
	     }
	    
		
		 function getOS(){	    
		    if(navigator.userAgent.indexOf("MSIE")>0) { 
			   return "MSIE"; 
			} 
			if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){ 
			  return "Firefox";
		    }
		 }
		 function change(w,h) {
		     var OS=getOS();
			 switch(OS){
			     case "MSIE":
				 {
	               document.getElementById('flashPaperIE').style.width = w;
				   document.getElementById('flashPaperIE').style.height = h;
				 }
				 break;
				 case "Firefox":
				 {
	               document.getElementById('flashPaperFF').style.width = w;
				   document.getElementById('flashPaperFF').style.height = h;
				 }
				 break;
				 default:
				 {
				   document.getElementById('flashPaperIE').style.width = w;
				   document.getElementById('flashPaperIE').style.height = h;
				 }
			}	 	
		 }