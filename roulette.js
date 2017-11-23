var elem = document.getElementById("elem");
var out = document.getElementById("result");
var item = document.createElement("img");

var random = function(){
	var item = document.createElement("img");
	var rand = Math.round(Math.random() * 100);
	switch(true){
	case rand<=2:
		item.setAttribute("src","img/knife.png");
		out.appendChild(item);
		break;
	
	case rand >2 && rand<=7:
		item.setAttribute("src","img/usp-s.png");
		out.appendChild(item);
		break;
	
	case rand >7 && rand<=20:
		item.setAttribute("src","img/ak.png");
		out.appendChild(item);
		break;
	
	case rand >20 && rand<=38:
		item.setAttribute("src","img/m4a1.png");
		out.appendChild(item);
		break;

	case rand >38 && rand<=62:
		item.setAttribute("src","img/awp.png");
		out.appendChild(item);
		break;
	
	case rand >62 && rand<=100:
		item.setAttribute("src","img/p250.png");
		out.appendChild(item);
		break;
	}
}
elem.onclick = function(){
	random();

}






