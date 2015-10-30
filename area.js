function Dsy()
{
 this.Items = {};
}
Dsy.prototype.add = function(id,iArray)
{
 this.Items[id] = iArray;
}
Dsy.prototype.Exists = function(id)
{
 if(typeof(this.Items[id]) == "undefined") return false;
 return true;
}

function change(v){
 var str="0";
 for(i=0;i<v;i++){ str+=("_"+(document.getElementById(s[i]).selectedIndex-1));};
 var ss=document.getElementById(s[v]);
 with(ss){
  length = 0;
  options[0]=new Option(opt0[v],opt0[v]);
  if(v && document.getElementById(s[v-1]).selectedIndex>0 || !v)
  {
   if(dsy.Exists(str)){
    ar = dsy.Items[str];
    for(i=0;i<ar.length;i++)options[length]=new Option(ar[i],ar[i]);
    if(v)options[1].selected = true;
   }
  }
  if(++v<s.length){change(v);}
 }
}
function changes(v){
 var str="0";
 for(i=0;i<v;i++){ str+=("_"+(document.getElementById(sv[i]).selectedIndex-1));};
 var ss=document.getElementById(sv[v]);
 with(ss){
  length = 0;
  options[0]=new Option(opt0[v],opt0[v]);
  if(v && document.getElementById(sv[v-1]).selectedIndex>0 || !v)
  {
   if(dsy.Exists(str)){
    ar = dsy.Items[str];
    for(i=0;i<ar.length;i++)options[length]=new Option(ar[i],ar[i]);
    if(v)options[1].selected = true;
   }
  }
  if(++v<sv.length){changes(v);}
 }
}

var dsy = new Dsy();

dsy.add("0",["内蒙古"]);


dsy.add("0_0",["阿拉善盟","巴彦淖尔盟","包头","赤峰","鄂尔多斯","呼和浩特","呼伦贝尔","通辽","乌海","乌兰察布盟","锡林郭勒盟","兴安盟"]);
dsy.add("0_0_0",["阿拉善右旗","阿拉善左旗","额济纳旗"]);
dsy.add("0_0_1",["临河区","杭锦后旗","巴彦淖尔市","乌拉特后旗","乌拉特前旗","乌拉特中旗","五原县","磴口县"]);
dsy.add("0_0_2",["昆都仑区","东河区","青山区","石拐区","白云矿区","九原区","达尔罕茂明安联合旗","固阳县","土默特右旗","高新区"]);
dsy.add("0_0_3",["红山区","元宝山区","松山区","阿鲁科尔沁旗","敖汉旗","巴林右旗","巴林左旗","喀喇沁旗","克什克腾旗","林西县","宁城县","翁牛特旗"]);
dsy.add("0_0_4",["东胜区","达拉特旗","鄂托克旗","鄂托克前旗","杭锦旗","乌审旗","伊金霍洛旗","准格尔旗","康巴什新区"]);
dsy.add("0_0_5",["回民区","新城区","玉泉区","赛罕区","和林格尔县","清水河县","土默特左旗","托克托县","武川县"]);
dsy.add("0_0_6",["海拉尔","阿荣旗","陈巴尔虎旗","额尔古纳市","鄂伦春自治旗","鄂温克族自治旗","根河市","满洲里市","莫力达瓦达斡尔族自治旗","新巴尔虎右旗","新巴尔虎左旗","牙克石市","扎兰屯市"]);
dsy.add("0_0_7",["科尔沁区","霍林郭勒市","开鲁县","科尔沁左翼后旗","科尔沁左翼中旗","库伦旗","奈曼旗","扎鲁特旗","通辽市经济技术开发区"]);
dsy.add("0_0_8",["海勃湾区","海南区","乌达区"]);
dsy.add("0_0_9",["集宁区","察哈尔右翼后旗","察哈尔右翼前旗","察哈尔右翼中旗","丰镇市","化德县","凉城县","商都县","四子王旗","兴和县","卓资县"]);
dsy.add("0_0_10",["阿巴嘎旗","东乌珠穆沁旗","多伦县","二连浩特市","苏尼特右旗","苏尼特左旗","太仆寺旗","西乌珠穆沁旗","锡林浩特市","镶黄旗","正蓝旗","正镶白旗","乌拉盖管理区"]);
dsy.add("0_0_11",["阿尔山市","科尔沁右翼前旗","科尔沁右翼中旗","突泉县","乌兰浩特市","扎赉特旗"]);

var s=["s1","s2","s3"];
var sv=["s4","s5","s6"];
var opt0 = ["省份","地级市","市、县级市、县"];
function setup()
{
 for(i=0;i<s.length-1;i++)
  document.getElementById(s[i]).onchange=new Function("change("+(i+1)+")");
 change(0);
}
function setoption()
{
 for(i=0;i<sv.length-1;i++)
  document.getElementById(sv[i]).onchange=new Function("changes("+(i+1)+")");
 changes(0);
}
