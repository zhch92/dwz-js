
    function checkpassword() {
	var account = document.getElementById("user.account").value;
	var password = document.getElementById("user.password").value;
	if (account == "") {
		alert("�û�������Ϊ��!");
		return false;
	} else if (password == "") {
		alert("���벻��Ϊ��!");
		return false;
	} else {
		$.post(
						"http://www.nmjyw.cn/user!indexlogin?useraccount="
								+ account + "&password1=" + password,
						null,
						function(data) {
							$("#loginForm").hide();
							for ( var key in data) {
								if (key == "success") {
									$("#loginResult")
											.html(
													"��ӭ����<font style='color: red;'>"
															+ data[key].name
															+ "</font> | <a target='_blank' href='http://www.nmjyw.cn/usermanager/userindex.jsp'>��������</a> | <a href='http://www.nmjyw.cn/user!exit'>�˳�</a>");
									$("#loginResult").show();
								} else if (key == "lock") {
									$("#loginForm").show();
									alert("�˻��ѱ�������������������ϵ����Ա");
								} else if (key == "wait") {
									$("#loginForm").show();
									alert("�˻���������У�������������ϵ����Ա");
								} else {
									$("#loginForm").show();
									alert("�û����������������������");
								}
							}
						}, "json");
	}
}
function loginAgain() {
	$("#loginResult").hide();
	$("#loginForm").show();
}

function checkIsLogin()
{
	$.post("http://www.nmjyw.cn/user!isLogin",null,function(data) {
			if(data=="null")
			{
				$("#loginResult").hide();
				$("#loginForm").show();
			}
			else
			{
				loginUserId = data.id;
				if(data.role!=2)
				{
					$("#loginForm").hide();
					$("#loginResult").html("��ӭ����<font style='color: red;'>"+ data.name + "</font> | <a target='_blank' href='http://www.nmjyw.cn/usermanager/userindex.jsp'>��������</a> | <a href='http://www.nmjyw.cn/user!exit'>�˳�</a>");
					$("#loginResult").show();
				}
				else
				{
					$("#loginResult").hide();
					$("#loginForm").show();
				}
			}
		}, "json");
}


function isnArray() {
	argnr = isnArray.arguments.length
	for ( var i = 0; i < argnr; i++) {
		this[i + 1] = isnArray.arguments[i];
	}
}


function getToday()
{
	isnArray()
	var isnDays = new isnArray("����һ", "���ڶ�", "������", "������", "������", "������", "������");
	isnDays[0] = "������";
	mydate = new Date();
	myyear = mydate.getFullYear();
	mymonth = mydate.getMonth() + 1;
	today = mydate.getDate();
	document.write("������" + myyear + "��" + mymonth + "��" + today + "��");
	document.write("&nbsp;&nbsp;&nbsp;&nbsp;")
	document.write(isnDays[mydate.getDay()]);
}