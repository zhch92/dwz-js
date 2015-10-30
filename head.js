
    function checkpassword() {
	var account = document.getElementById("user.account").value;
	var password = document.getElementById("user.password").value;
	if (account == "") {
		alert("用户名不能为空!");
		return false;
	} else if (password == "") {
		alert("密码不能为空!");
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
													"欢迎您：<font style='color: red;'>"
															+ data[key].name
															+ "</font> | <a target='_blank' href='http://www.nmjyw.cn/usermanager/userindex.jsp'>个人中心</a> | <a href='http://www.nmjyw.cn/user!exit'>退出</a>");
									$("#loginResult").show();
								} else if (key == "lock") {
									$("#loginForm").show();
									alert("账户已被锁定，如有疑问请联系管理员");
								} else if (key == "wait") {
									$("#loginForm").show();
									alert("账户还在审核中，如有疑问请联系管理员");
								} else {
									$("#loginForm").show();
									alert("用户名或密码错误，请重新再试");
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
					$("#loginResult").html("欢迎您：<font style='color: red;'>"+ data.name + "</font> | <a target='_blank' href='http://www.nmjyw.cn/usermanager/userindex.jsp'>个人中心</a> | <a href='http://www.nmjyw.cn/user!exit'>退出</a>");
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
	var isnDays = new isnArray("星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日");
	isnDays[0] = "星期日";
	mydate = new Date();
	myyear = mydate.getFullYear();
	mymonth = mydate.getMonth() + 1;
	today = mydate.getDate();
	document.write("今天是" + myyear + "年" + mymonth + "月" + today + "日");
	document.write("&nbsp;&nbsp;&nbsp;&nbsp;")
	document.write(isnDays[mydate.getDay()]);
}