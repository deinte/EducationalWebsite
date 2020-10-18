function Page(Next) {
	var NextPage = Next;
	$("#main1").removeClass("display");
	$("#main2").removeClass("display");
	$("#main3").removeClass("display");
	$("#main4").removeClass("display");
	//document.getElementById("main1").style.width = "0%";
	$("#" + NextPage).addClass("display");
}