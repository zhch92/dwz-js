	 //ajax-start
		   //定义一个变量用于存放XMLHttpRequest对象    
		   var xmlHttp;    
		   //改函数用于创建一个XMLHttpRequest对象    
		   function createXMLHttpRequest(){    
		       if(window.ActiveXObject){    
		           xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");    
		       }else if(window.XMLHttpRequest){    
		           xmlHttp = new XMLHttpRequest();    
		       }    
		   }    
		   //这是一个启动AJAX异步通信的方法    
		   function ajax_submit(){
			   var userid = document.getElementById("vuserid").value;
			   if(userid==""){
				   alertMsg("请选择主讲人");
				   window.location.href = "${pageContext.request.contextPath}/system/videoadd.jsp";
				   return;
			   }
			   document.form1.uploadfile.disabled = true;//设置提交按钮
			   //load文件提示用户等待
			   document.getElementById("loadfile").innerHTML="服务器正在处理您所上传的视频文件，请用户耐心等待......";
			   //获取视频相关信息
			   var toflvflg = document.form1.toflvflg.value;//视频转压方式
			   var versions = document.form1.versions.value;//教学版本
			   var vgrade = document.form1.vgrade.value;//年级
			   var vsubject = document.form1.vsubject.value;//科目
			   var vuserid = document.form1.vuserid.value;//主讲人
			   var videosource = document.form1.videosource.value;//视频来源
			   var price = document.form1.price.value;//视频观看费用
			   var description = document.form1.description.value;//视频description
		       //创建一个XMLHttpRequest对象    
		       createXMLHttpRequest();    
		       //通过GET方法向指定的URL建立服务器的调用    
		       var url="${pageContext.request.contextPath}/system/uploadvideo/videoinfosession.jsp?toflvflg="+toflvflg+"&versions="+versions+"&vgrade="+vgrade+"&vsubject="+vsubject+"&videosource="+videosource+"&price="+price+"&description="+description+"&vuserid"+vuserid;
		       xmlHttp.open("GET",url,true);    
		       //发送请求    
		       xmlHttp.send(null);    
		   }
	 //ajax-end

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
    	 //处理视频数据-start
    	 ajax_submit();
    	 //处理视频数据-end
	     var OS=getOS();
		 switch(OS){
		     case "MSIE":
			 {
               document.getElementById('freeUploadIE').sendToActionScript(methodName,para);			   
			 }
			 break;
			 case "Firefox":
			 {
              document.getElementById('freeUploadFF').sendToActionScript(methodName,para);	
			 }
			 break;
			 default:
			 {
			  document.getElementById('freeUploadIE').sendToActionScript(methodName,para);	
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
               document.getElementById('freeUploadIE').style.width = w;
			   document.getElementById('freeUploadIE').style.height = h;
			 }
			 break;
			 case "Firefox":
			 {
               document.getElementById('freeUploadFF').style.width = w;
			   document.getElementById('freeUploadFF').style.height = h;
			 }
			 break;
			 default:
			 {
			   document.getElementById('freeUploadIE').style.width = w;
			   document.getElementById('freeUploadIE').style.height = h;
			 }
		}	 	
	 }