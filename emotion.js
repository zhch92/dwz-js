/***
 * ����ԭ�����߱���༭��Jquery���
 * ��дʱ�䣺2012��10��13��
 * ֧��ԭ�� ��עJquerySchool
 * http://www.jq-school.com
 * version:manhuaHtmlArea.1.0.js
***/
$(function() {
	$.fn.manhuaHtmlArea = function(options) {
		var defaults = {
			Event : "click",	//��Ӧ���¼�
			Left : 0,			//�������ʾƫ��Ԫ����ߵ�λ��
			Top : 22,			//�������ʾƫ��Ԫ���ϱߵ�λ��
			id : "content"  	//���ݲ������ID
		};
		var options = $.extend(defaults,options);
		var bid = parseInt(Math.random()*100000);	
		$("body").prepend("<div id='showAddFacePic"+bid+"'class='addons layer-emotions'><b class='tri-b'></b><b class='tri-t'></b><div class='layer-tab clearfix'><a id='close"+bid+"' class='close' href='javascript:void(0)'></a><span>���ñ���</span></div><div class='layer-content'><ul id='emotions"+bid+"' class='emotions clearfix'><li><img src='http://localhost:8080/hghdwx/images/smilea.gif' addFacesPic='[�Ǻ�]' alt='�Ǻ�' title='�Ǻ�'/></li><li><img src='http://localhost:8080/hghdwx/images/tootha.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/laugh.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/tza.gif' addFacesPic='[�ɰ�]' alt='�ɰ�' title='�ɰ�'/></li><li><img src='http://localhost:8080/hghdwx/images/kl.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/kbsa.gif' addFacesPic='[�ڱ�ʺ]' alt='�ڱ�ʺ' title='�ڱ�ʺ'/></li><li><img src='http://localhost:8080/hghdwx/images/cj.gif' addFacesPic='[�Ծ�]' alt='�Ծ�' title='�Ծ�'/></li><li><img src='http://localhost:8080/hghdwx/images/shamea.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/zy.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/bz.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/bs2.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/lovea.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/sada.gif' addFacesPic='[��]' alt='��' title='��'/></li><li><img src='http://localhost:8080/hghdwx/images/heia.gif' addFacesPic='[͵Ц]' alt='͵Ц' title='͵Ц'/></li><li><img src='http://localhost:8080/hghdwx/images/qq.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/sb.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/mb.gif' addFacesPic='[̫����]' alt='̫����' title='̫����'/></li><li><img src='http://localhost:8080/hghdwx/images/ldln.gif' addFacesPic='[��������]' alt='��������' title='��������'/></li><li><img src='http://localhost:8080/hghdwx/images/yhh.gif' addFacesPic='[�Һߺ�]' alt='�Һߺ�' title='�Һߺ�'/></li><li><img src='http://localhost:8080/hghdwx/images/zhh.gif' addFacesPic='[��ߺ�]' alt='��ߺ�' title='��ߺ�'/></li><li><img src='http://localhost:8080/hghdwx/images/x.gif' addFacesPic='[��]' alt='��' title='��'/></li><li><img src='http://localhost:8080/hghdwx/images/cry.gif' addFacesPic='[˥]' alt='˥' title='˥'/></li><li><img src='http://localhost:8080/hghdwx/images/wq.gif' addFacesPic='[ί��]' alt='ί��' title='ί��'/></li><li><img src='http://localhost:8080/hghdwx/images/t.gif' addFacesPic='[��]' alt='��' title='��'/></li><li><img src='http://localhost:8080/hghdwx/images/k.gif' addFacesPic='[�����]' alt='�����' title='�����'/></li><li><img src='http://localhost:8080/hghdwx/images/bba.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/angrya.gif' addFacesPic='[ŭ]' alt='ŭ' title='ŭ'/></li><li><img src='http://localhost:8080/hghdwx/images/yw.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/cza.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/88.gif' addFacesPic='[�ݰ�]' alt='�ݰ�' title='�ݰ�'/></li><li><img src='http://localhost:8080/hghdwx/images/sk.gif' addFacesPic='[˼��]' alt='˼��' title='˼��'/></li><li><img src='http://localhost:8080/hghdwx/images/sweata.gif' addFacesPic='[��]' alt='��' title='��'/></li><li><img src='http://localhost:8080/hghdwx/images/sleepya.gif' addFacesPic='[��]' alt='��' title='��'/></li><li><img src='http://localhost:8080/hghdwx/images/sleepa.gif' addFacesPic='[˯��]' alt='˯��' title='˯��'/></li><li><img src='http://localhost:8080/hghdwx/images/money.gif' addFacesPic='[Ǯ]' alt='Ǯ' title='Ǯ'/></li><li><img src='http://localhost:8080/hghdwx/images/sw.gif' addFacesPic='[ʧ��]' alt='ʧ��' title='ʧ��'/></li><li><img src='http://localhost:8080/hghdwx/images/cool.gif' addFacesPic='[��]' alt='��' title='��'/></li><li><img src='http://localhost:8080/hghdwx/images/hsa.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/hatea.gif' addFacesPic='[��]' alt='��' title='��'/></li><li><img src='http://localhost:8080/hghdwx/images/gza.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/dizzya.gif' addFacesPic='[��]' alt='��' title='��'/></li><li><img src='http://localhost:8080/hghdwx/images/bs.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/crazya.gif' addFacesPic='[ץ��]' alt='ץ��' title='ץ��'/></li><li><img src='http://localhost:8080/hghdwx/images/h.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/yx.gif' addFacesPic='[����]' alt='����' title='����'/></li><li><img src='http://localhost:8080/hghdwx/images/nm.gif' addFacesPic='[ŭ��]' alt='ŭ��' title='ŭ��'/></li><li><img src='http://localhost:8080/hghdwx/images/hearta.gif' addFacesPic='[��]' alt='��' title='��'/></li><li><img src='http://localhost:8080/hghdwx/images/unheart.gif' addFacesPic='[����]' alt='����' title='����'/></li></ul></div></div>");	
		var $btn = $(this);
		var $biaoqing = $("#showAddFacePic"+bid);	
		var $emotions = $("#emotions"+bid+" li img");
		var $close = $("#close"+bid);
		var $input = $("#"+options.id);
		//�������¼�
		$emotions.die().click(function(){
			 $biaoqing.hide();
			 $input.die().insertContent($(this).attr("addFacesPic"));			 
		});		
		//�رձ����
		$close.click(function(){
			 $biaoqing.hide();			 	 
		});
		$biaoqing.hover(function(){$biaoqing.show();},function(){$biaoqing.hide();	});
		//ѡ����鰴ť�����¼�
		$btn.live(options.Event,function(e){						
		  var iof = $(this).offset();
		  var w = $(this).width();
		  var h = $(this).height();
		  $biaoqing.css({ "left" : iof.left+options.Left,"top" : iof.top+options.Top });
		  $biaoqing.show();		  
		});			
	};
	
	var bq_names = ['�Ǻ�','����','����','�ɰ�','����','�ڱ�ʺ','�Ծ�','����','����','����','����','����','��','͵Ц','����','����','̫����','��������','�Һߺ�','��ߺ�','��','˥','ί��','��','�����','����','ŭ','����','����','�ݰ�','˼��','��','��','˯��','Ǯ','ʧ��','��','����','��','����','��','����','ץ��','����','����','ŭ��','��','����'];
	
	var bq_pic = ['http://localhost:8080/hghdwx/images/smilea.gif','http://localhost:8080/hghdwx/images/tootha.gif','http://localhost:8080/hghdwx/images/laugh.gif','http://localhost:8080/hghdwx/images/tza.gif','http://localhost:8080/hghdwx/images/kl.gif','http://localhost:8080/hghdwx/images/kbsa.gif','http://localhost:8080/hghdwx/images/cj.gif','http://localhost:8080/hghdwx/images/shamea.gif','http://localhost:8080/hghdwx/images/zy.gif','http://localhost:8080/hghdwx/images/bz.gif','http://localhost:8080/hghdwx/images/bs2.gif','http://localhost:8080/hghdwx/images/lovea.gif','http://localhost:8080/hghdwx/images/sada.gif','http://localhost:8080/hghdwx/images/heia.gif','http://localhost:8080/hghdwx/images/qq.gif','http://localhost:8080/hghdwx/images/sb.gif','http://localhost:8080/hghdwx/images/mb.gif','http://localhost:8080/hghdwx/images/ldln.gif','http://localhost:8080/hghdwx/images/yhh.gif','http://localhost:8080/hghdwx/images/zhh.gif','http://localhost:8080/hghdwx/images/x.gif','http://localhost:8080/hghdwx/images/cry.gif','http://localhost:8080/hghdwx/images/wq.gif','http://localhost:8080/hghdwx/images/t.gif','http://localhost:8080/hghdwx/images/k.gif','http://localhost:8080/hghdwx/images/bba.gif','http://localhost:8080/hghdwx/images/angrya.gif','http://localhost:8080/hghdwx/images/yw.gif','http://localhost:8080/hghdwx/images/cza.gif','http://localhost:8080/hghdwx/images/88.gif','http://localhost:8080/hghdwx/images/sk.gif','http://localhost:8080/hghdwx/images/sweata.gif','http://localhost:8080/hghdwx/images/sleepya.gif','http://localhost:8080/hghdwx/images/sleepa.gif','http://localhost:8080/hghdwx/images/money.gif','http://localhost:8080/hghdwx/images/sw.gif','http://localhost:8080/hghdwx/images/cool.gif','http://localhost:8080/hghdwx/images/hsa.gif','http://localhost:8080/hghdwx/images/hatea.gif','http://localhost:8080/hghdwx/images/gza.gif','http://localhost:8080/hghdwx/images/dizzya.gif','http://localhost:8080/hghdwx/images/bs.gif','http://localhost:8080/hghdwx/images/crazya.gif','http://localhost:8080/hghdwx/images/h.gif','http://localhost:8080/hghdwx/images/yx.gif','http://localhost:8080/hghdwx/images/nm.gif','http://localhost:8080/hghdwx/images/hearta.gif','http://localhost:8080/hghdwx/images/unheart.gif'];

	//�����������
	$.fn.extend({
		replaceContent : function(content){
		var result = "";
		var temps = content.split("]");
		for(var i=0;i<temps.length;i++){
			if(temps[i] != null && temps[i] != ""){
				var cts = temps[i].split("[");
				if(cts.length == 1){
					result += cts[0]+"]";
				}else{
					for(var j=0;j<cts.length;j++){
						ct = cts[j];
						var b = true;
						for(var k=0;k<bq_names.length;k++){
							if(ct == bq_names[k] && j>0){
								result += "<img src='"+bq_pic[k]+"' addFacesPic='["+ct+"]' alt='"+ct+"' title='"+ct+"'/>"
								b = false;
								break;
							}
						}
						if(b && ct != null && ct != ""){
							result += ct;
						}
					}
				}
			}
		}
		$(this).html(result);
		}		
	})	
	//�����괦�Ĳ��
	$.fn.extend({  
		insertContent : function(myValue, t) {  
			var $t = $(this)[0];  
			if (document.selection) {  
				this.focus();  
				var sel = document.selection.createRange();  
				sel.text = myValue;  
				this.focus();  
				sel.moveStart('character', -l);  
				var wee = sel.text.length;  
				if (arguments.length == 2) {  
				var l = $t.value.length;  
				sel.moveEnd("character", wee + t);  
				t <= 0 ? sel.moveStart("character", wee - 2 * t	- myValue.length) : sel.moveStart("character", wee - t - myValue.length);  
				sel.select();  
				}  
			} else if ($t.selectionStart || $t.selectionStart == '0') {  
				var startPos = $t.selectionStart;  
				var endPos = $t.selectionEnd;  
				var scrollTop = $t.scrollTop;  
				$t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos,$t.value.length);  
				this.focus();  
				$t.selectionStart = startPos + myValue.length;  
				$t.selectionEnd = startPos + myValue.length;  
				$t.scrollTop = scrollTop;  
				if (arguments.length == 2) { 
					$t.setSelectionRange(startPos - t,$t.selectionEnd + t);  
					this.focus(); 
				}  
			} else {                              
				this.value += myValue;                              
				this.focus();  
			}  
		}  
	})  
});
