//분류 전체보기 삭제
$("ul.tt_category > li > a").hide();
//메뉴 바로가기 설정
$("ul.category_list > li > a > img").hide();
$("ul.category_list > li").prop("class","dropdown");
$("ul.category_list > li > a").prop("class","dropdown-toggle");
$("ul.sub_category_list").prop("class","dropdown-menu");
// console.log($("ul.tt_category").html());
$("ul.navbar-nav").html($("ul.tt_category > li  > ul.category_list").html());
$("#webType").val("0");
//browserFont();
if($(".navbar-toggle").css("display") === "block"){
	$("li.dropdown > a").prop("href","#");
	$("li.dropdown > a").attr("data-toggle","dropdown");
	$("#webType").val("1");
	$("div.paging").hide();
//	mobileFont();
}
$(window).resize(function() {
	$("li.open").prop("class","dropdown");
	if($(".navbar-toggle").css("display") === "block"){
		if($("#webType").val()  !== "1" ){
			$("ul.navbar").html($("ul.tt_category").html());
			
			$("li.dropdown > a").prop("href","#");
			$("li.dropdown > a").attr("data-toggle","dropdown");
			$("#webType").val("1");
			$("div.paging").hide();
//			mobileFont();
		}
	}else{
		if($("#webType").val()  !== "0" ){
			$("ul.navbar").html($("ul.tt_category").html());
			$("#webType").val("0");
			$("div.paging").show();
//			browserFont();
		}
	}
});
$(".dropdown-menu").hover(function(){
	if($("#webType").val()  === "0" ){
		$(this).parent().css("color","#fff");
		$(this).parent().css("background-color","#f1c40f");
	}
},function(){
	$(this).parent().css("background-color","#29343a");
});
var htmltest = $("div.article>div.tt_article_useless_p_margin>div.another_category").html();
if(htmltest == null){
	$("footer").hide();
}else{
	$("div.widget-footer").html(htmltest);
}

//function mobileFont(){
//	$("div.title").css("font-size","2.0em");
//	$("div.article > div.tt_article_useless_p_margin").css("font-size","1.2em");
//}
//function browserFont(){
//	$("div.title").css("font-size","3.0em");
//	$("div.article > div.tt_article_useless_p_margin").css("font-size","2.0em");
//}
