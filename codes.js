<!-- Google Analytics -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-65426154-1', 'auto');
  ga('send', 'pageview');

</script>
<!-- End Google Analytics -->


<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-KLP2DP"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KLP2DP');</script>
<!-- End Google Tag Manager -->


old jquery

<script type="text/javascript">
$(document).ready(function(){
	$("#menu a").click(function(){
		if($(this).parent().parent().parent().attr("id")=="sddm"){
			var sub_category=$(this).text();
			var category=$(this).parent().parent().children().eq(0).text();
			ga('send','event','top_nav','click',category+"|"+sub_category);
		}
		else if($(this).parent().parent().attr("id")=="sddm"){
			var category=$(this).text();
			
		}
	});
})
$(document).ready(function(){
	$("input[type='submit']").click(function(){
		var text= $("#searchfield").val();
		ga('send','event','search','click',text);
	});
});