// JavaScript Document
function modifMun(num) {

	var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	var img4 = document.getElementById("img4");
	var img5 = document.getElementById("img5");
	var img6 = document.getElementById("img6");
	img1.src="./images/nav_c_03.jpg";
	img2.src="./images/nav_05.jpg";
	img3.src="./images/nav_07.jpg";
	img4.src="./images/nav_09.jpg";
	img5.src="./images/nav_11.jpg";
	img6.src="./images/nav_13.jpg";
	if (num == 1) {
		img1.src = "./images/nav_03.jpg";	
		img1.onmouseout = function() {
				img1.src = "./images/nav_03.jpg";
			}
	}

	else if (num == 2) {
		img2.src = "./images/nav_c_05.jpg";
		img2.onmouseout = function() {
				img2.src = "./images/nav_c_05.jpg";

	       }
	}
	else if (num == 3) {
		img3.src = "./images/nav_c_07.jpg";
		img3.onmouseout = function() {
				img3.src = "./images/nav_c_07.jpg";
			}

	}
	
	else if (num == 4) {
		img4.src = "./images/nav_c_09.jpg";
		img4.onmouseout = function() {
				img4.src = "./images/nav_c_09.jpg";
			}

	}
	
	else if (num == 5) {
		img5.src = "./images/nav_c_11.jpg";
		img5.onmouseout = function() {
				img5.src = "./images/nav_c_11.jpg";
			}

	}
	
	else {
		img6.src = "./images/nav_c_13.jpg";
		img6.onmouseout = function() {
				img6.src = "./images/nav_c_13.jpg";
			}
	}
	
	onloadImg();

}

function onloadImg(){
	var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	var img4 = document.getElementById("img4");
	var img5 = document.getElementById("img5");
	var img6 = document.getElementById("img6");
	img1.onmouseover = function() {
		if (img1.src.indexOf("./images/nav_03.jpg") > 0) {
			return;
		} else {
			img1.src = "./images/nav_03.jpg";
			img1.onmouseout = function() {
				img1.src = "./images/nav_c_03.jpg";
			}

		}
	}

	img2.onmouseover = function() {
		if (img2.src.indexOf("./images/nav_c_05.jpg") > 0) {
			return;
		} else {
			img2.src = "./images/nav_c_05.jpg";
			img2.onmouseout = function() {
				img2.src = "./images/nav_05.jpg";
			}

		}
	}

	img3.onmouseover = function() {
		if (img3.src.indexOf("./images/nav_c_07.jpg") > 0) {
			return;
		} else {
			img3.src = "./images/nav_c_07.jpg";
			img3.onmouseout = function() {
				img3.src = "./images/nav_07.jpg";
			}

		}
	}
	
	img4.onmouseover = function() {
		if (img4.src.indexOf("./images/nav_c_09.jpg") > 0) {
			return;
		} else {
			img4.src = "./images/nav_c_09.jpg";
			img4.onmouseout = function() {
				img4.src = "./images/nav_09.jpg";
			}

		}
	}
	
	img5.onmouseover = function() {
		if (img5.src.indexOf("./images/nav_c_11.jpg") > 0) {
			return;
		} else {
			img5.src = "./images/nav_c_11.jpg";
			img5.onmouseout = function() {
				img5.src = "./images/nav_11.jpg";
			}

		}
	}
	
	img6.onmouseover = function() {
		if (img6.src.indexOf("./images/nav_c_13.jpg") > 0) {
			return;
		} else {
			img6.src = "./images/nav_c_13.jpg";
			img6.onmouseout = function() {
				img6.src = "./images/nav_13.jpg";
			}

		}
	}
}