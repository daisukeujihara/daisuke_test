//console.log("Hello World JS !");

//var position =("President");
//var name =(" syatyou-san");
//var display = position + name;
//console.log(display);

//display = "等しいとゆう意味ではないよ";
//console.log(display);

//console.log(1 + 3);
//console.log(3 - 1);
//console.log(9 * 3);
//console.log(99 / 3);
//console.log(10 % 3);
//console.log("2" + "5");

//var value;
//value = 3;
//value += 1;
//value = value + 1;
//value -= 1;
//value *=3;
//value /=3;
//console.log(value);

//var count = 0;
//console.log(++count);

//var count = 1;
//console.log(count++);
//console.log(count);

//var count = 1;
//console.log(++count);
//console.log(count);

//var sunabaco = "aaaaa"
//console.log(sunabaco);
//console.log("sunabaco");

//console.log("I'm sunabacko");

//console.log("高松,お茶の水,".split(","));
//console.log("東京都お茶の水区".split("都"));

//var region = ["takamatu", "koza", "ebisu"]
//console.log(region);
// console.log(region[1]);
// console.log(region[0]);
// region[2] = "okayama"
// console.log(region);

// var region = {okinawa: "koza", kagawa: "takamatu"}
// console.log(region);
// console.log(region["okinawa"]);
// console.log(region["kagawa"]);
// region ["okinawa"] = "naha";
// console.log(region);

// var common = 1;
// var special = "1";

// console.log(common == special);
// // console.log(common != special);
// console.log(common === special);

// 条件文！！！(if文)

// var awake = 5;
// if (awake > 11) {
//     console.log("寝坊しました");
// } else if (awake < 6) {
//     console.log("早起きだね！");
// }else if (awake < 11) {
//     console.log("起きたよ");
// } else {
// console.log("徹夜でした");
// };

// var limit = 10;
// var getup = 8;

// if (limit < getup) {
//     console.log("遅刻です");
// } else if (limit == getup) {
//     console.log("ギリギリセーフ！");
// } else {
//     console.log("よくがんばりました！");
// };

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// };

// function greet(name) {
//     message = name + "さんこんにちは！"
//     return message
// };
// console.log(greet("Dai-chan"));

// function rectangle(tate,yoko) {
//     area = tate * yoko;
//     return area
// };

// result = rectangle(99, 9)
// console.log(result);

// var tintin = "大輔"
// console.log(tintin);
// var unti = "こんにちは"
// console.log(tintin + unti);

// var text_node = document.getElementById("text");
// text_node.textContent = "マクドナルド！";
// console.log(text_node.textContent);

//bottonノードを取得！
// var btn_node = document.getElementById("text_change_btn");
// btn_node.addEventListener("click",changeText);

// function changeText() {
//     //textノードを取得
//     var text_node = document.getElementById("text");
//     text_node.textContent = "モスバーガー";
// }

// var btn_node = document.getElementById("text_change_btn");
// btn_node.addEventListener("click",changeText);

// var btn_node = document.getElementById("text_blue_btn");
// btn_node.addEventListener("click",changeTextBlue);

// var btn_node = document.getElementById("text_green_btn");
// btn_node.addEventListener("click",changeTextgreen)
// function changeText() {
//     //textノードを取得
//     var text_node = document.getElementById("text");
//     text_node.textContent = "モスバーガー";
//     text_node.style.fontSize = '90px';
//     text_node.style.color = 'red'
// };

// function changeTextBlue() {
// var text_node = document.getElementById("text");
// text_node.style.backgroundColor = 'blue';
// };

// function changeTextgreen() {
//     var text_node = document.getElementById("text");
//     text_node.style.backgroundColor = 'green'
// };

// $(function () {

// $("#text").text("スパイシーチーズバーガー");

// $("#text_change_btn").on('click',function() {
// $('#text').text("照り焼きバーガー");

// });

 $('#text_change_btn').click(function () {
 $("#text").toggleClass("burger");
 });
 });
