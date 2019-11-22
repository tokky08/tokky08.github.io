$(window).load(function(){
  $(".product_othres img").click(function(){
    var img_src = $(this).attr("src");
    $(".product_select img").attr("src", img_src);
  });
});