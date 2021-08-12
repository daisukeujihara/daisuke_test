// console.log("Hello World🔥");
// console.error("バーカ");
// console.clear();

// var hello = "こんにちは";
// console.log(hello);
// hello = "こんにちは!うんこうんこうんこうんこうんこうんこ運行の勲功んこ";
// console.log(hello);


// var tax = 0.1;
// var apple_price = 120;
// var fee = tax * apple_price;
// console.log("りんごの消費税は" + fee + "円です");
// var height = 100;
// var wight = 10;
// console.log(height + wight + height + wight);
// console.log(10 + 10 * 100 * 100 * 100 + 100 * 100 *100 * 12414253242525144);
// console.log(100 / 1);
// console.log(100 % 7);

// var x = 5;
// x = x + 1;
// console.log(x);
// x += 1;
// console.log(x);
// x -= 1;
// console.log(x);
// console.log(++x);

// "I like hotdog.because it looks like dog.".split(" ")
// console.log("I like hotdog.because it looks like dog.".split(" "));
// var town_name = "香川県高松市"
// console.log(
//     town_name.split("県")
// );

// // 配列について
// var fruits = ["スイカ","メロン","いちご","マンゴー","ぶどう","うんこ"];
// console.log(fruits);
// console.log(fruits[5]);
// fruits[5] = "ドリアン";
// console.log(fruits);

// var book = {
//     name: "こころくろこっぷ",
//     author: "なつめそうせき",
//     publish_date: "1914年9月",
//     impression: "paypay pay paypaypaya peypey",
//     sele_flag: 0
// };
// console.log(
//     book["name"]
// );

// book["impression"] = "面白かった";
// console.log(
//     book["impression"]
// );

// var text = 'テキストを書くよ';
// console.log(text);

// // True False について
// var ten = 10;
// var nine = 9;
// var ten_string = "10";
// console.log(ten == nine);
// console.log(ten >= nine);
// console.log(ten < nine);
// console.log(ten == ten_string);
// console.log(ten != nine);
// book["sele_flag"] = 1;
// if(book["sele_flag"] == 0){
//     console.log("セールじゃありません");
// }else {
//     console.log("セール対象商品です");
// }

// var limit = 14 ;
// var getup = 8;
// if(limit < getup){
//     console.log("遅刻です");
// }else if(limit == getup){
//     console.log("ギリギリセーフ");
// }else{
//     console.log("よくがんばりました");
// };


// // 繰り返し処理について
// for(i=1; i<10; i++){
//     console.log(i);
// }

// function greet() {
//     console.log("おはよう");
// };
// greet();

// function name_text(name) {
//     var name_text = name + "さんこんにちは";
//     return name_text;
// }
// name_text("Daisuke");
// console.log(name_text("Daisuke"));

// console.log("面積は" + box_area(4,5));

// function box_area(width,height) {
//     area = width * height;
//     return area;
// };


// // DOMについて

// var html_title = document.getElementById("title");
// html_title.textContent = "ノード更新したぜ";

// var button = document.getElementById("button");
// button.addEventListener("click",textChanged);

// function textChanged() {
//     html_title.textContent = "キラークイーンはすでにそのボタンに触っている";
// }

$(function(){
    $('#title').text("jQueryで更新したよ");
    $('#button').on('click', function(){
        $('#title').text("ボタンを押しtaね！");
    });

    $('#toggel_button').on('click', function(){
        $('#title').toggle();
        $('p').css('color', 'red')
    });
    $(".icon").on('mouseover',function(){
        $('.icon').addClass("big");
    });
    $(".icon").on("mouseout", function (){
        $('.icon').removeClass("big");
    });
});
