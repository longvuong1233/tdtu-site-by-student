function check(){
	var id=document.getElementById("MSSV").value;
	var change=document.getElementsByClassName('login');
	if(id.length!=0){
		var str="<li><h4>TDT-er: <i style='color: red'>" +id+"</i></h4></li>";
	}
	else
		str="<li><h4><u>Welcom to TDTU</u></h4></li>";
	change[0].outerHTML=str;
}

$(document).ready(function(){
	var pree_enter= document.getElementById("MSSV");
	pree_enter.addEventListener("keyup", function(event){
		if(event.keyCode==13)
		{
			document.getElementById("button").click();
		}
	});
});
		