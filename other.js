jQuery(document).ready(function(){
	jQuery("#menu a").find("a").click(function(){
		alert(jQuery(this).text());
		return false;
	});
});


  	jQuery("#menu a").click(function(){
		var text=jQuery(this).parent().parent().children().eq(0).text();
alert(text);
		return false;
	});
	
	
if($("a").parent().parent().parent()==$("sddm")){
	$(this).click(function(){
		alert($(this).text());
	});
}

$("a").click(function(){
	if($(this).parent().parent().parent()==$("sddm")){
		alert($(this).text());
		return false;
	}
});


$("#menu a").click(function(){
	if($(this).parent().parent().parent().attr("id")=="sddm"){
		var sub_category=$(this).text();
		var category=$(this).parent().parent()..eq(0);
		alert(category+"|"+sub_category);
		return false;
	}
	else if($(this).parent().parent().attr("id")=="sddm"){
		alert($(this).text());
		return false;
	}
});

$("#menu a").click(function(){
	if($(this).parent().parent().parent().attr("id")=="sddm"){
		var sub_category=$(this).text();
		var category=$(this).parent().parent().children().eq(0).text();
		ga('send','event','top_nav','click',category+"|"+sub_category);
		alert(category+"|"+sub_category);
	}
	else if($(this).parent().parent().attr("id")=="sddm"){
		var category=$(this).text();
		ga('send','event','top_nav','click',category);
		alert(category);
	}
});










