 $(function () {

    $(".hum_menu").on("click",function () {
         $("header").toggleClass("open");
     });
});

  $(function () {

 $(".change_en").on('click',function () {
 $('#midasi').text("heading");
$('#flexnoeria').text("Flex");
$('#sentaringueria').text("Centering");
$('#seisaku').text("Portfolio");
 })
});

$(function () {
    $(".change_ja").on('click',function () {
        $('#midasi').text("見出しのエリア")
        $('#flexnoeria').text("flexのエリア")
        $('#sentaringueria').text("センタリングエリア")
        $('#seisaku').text("制作実績")
    })
})


  $("#size-up").on('click', function () {
$("#sec4 img").css("width", "600px")
  });

  $("#img-change").on('click', function () {
      $("#sec4 img").attr("src", "img/うんち.png");
  });
  