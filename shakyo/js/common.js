$(function(){
    $("header").on('click',function(){
        $('header').toggleClass("open");
    });
    
});

var takasa = 3
var teihen = 6

console.log("三角形の面積は" + takasa * teihen / 2 + "です");

$(function(){
    $('#kakudai').on('click', function(){
        $('#sec4 .portfolio img').css("width", "600px");
    });
});

$(function(){

    $('.eng').on('click', function(){
        $('.m').text("Heading");
        $('.f').text("Flex");
        $('.s').text("Centering");
        $('.se').text("Portfolio");
    });
    $('.japan').on('click', function(){
        $('.m').text("見出しのエリア");
        $('.f').text("flexのエリア");
        $('.s').text("センタリングエリア");
        $('.se').text("制作実績");
    });


});

const imgs = ['thumb_01.img'];  // 画像ファイル名
let index = 0;  // インデックス番号

$(function(){
    $('#henkou').on('click', function(){
    $('#sec4 .portfolio img').attr('class','img_change');
    $('.image_change').attr('src', 'https://zukan.pokemon.co.jp/zukan-api/up/images/index/f8d806f32ee833db68f00e2c50b136be.png');
    });
});



