var arr = [];
function loadX (){
		var xmlhttp;
		if(window.XMLHttpRequest){
			xmlhttp = new XMLHttpRequest();     //IE7，FireFox,Chrome,OPera,Safari
		}else{
			xmlhttp = new ActiveXobject('Microsoft.xmlHTTP');  // IE6，IE5
		}
		xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			  var str = xmlhttp.responseText;
			  var jso = JSON.parse(str);
			  var strs = document.getElementById("str");
			  var len = jso.result.length;
			  var strc = "";
			  
			  var brr = [];
			  while(true) {
				if(arr.length == 10){
					brr = arr;
					break;
				}else if(arr.length > 10) {
					brr = arr.slice(0,10);
					// for(var b = 0; b < 10; b++) {
					// 	brr.push(arr[b]);
					// }
					break;
				}else {
					boolum();
				}
			  }
			  console.log(brr, brr.length);
			  
			  for(var j=0;j<10;j++){
				strc+="<div class='topic'><p>题目"+(j+1)+"</p><p>来自题库第"+(brr[j])+"题</p><div class='row'><div class='col-xs-12 col-sm-6 col-md-6'><p>"+jso.result[brr[j]-1].subject+"</p></div><div class='col-xs-12 col-sm-6 col-md-6'><textarea class='form-control' rows='2'></textarea></div></div></div>";
				strs.innerHTML = strc;
			  }
		  }
	  }
		xmlhttp.open('GET','subject1.json',true);
		xmlhttp.send(); 
	}
function boolum() {
		for(var i=0; i<10; i++){
			var num = Math.random();
			num = num*50;
			num = Math.floor(num);
			if(arr.indexOf(num) == -1) {
				arr.push(num);
			}
		}
	}
	loadX();