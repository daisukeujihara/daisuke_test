// console.log("Hello World๐ฅ");
// console.error("ใใผใซ");
// console.clear();

// var hello = "ใใใซใกใฏ";
// console.log(hello);
// hello = "ใใใซใกใฏ!ใใใใใใใใใใใใใใใใใใ้่กใฎๅฒๅใใ";
// console.log(hello);


// var tax = 0.1;
// var apple_price = 120;
// var fee = tax * apple_price;
// console.log("ใใใใฎๆถ่ฒป็จใฏ" + fee + "ๅใงใ");
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
// var town_name = "้ฆๅท็้ซๆพๅธ"
// console.log(
//     town_name.split("็")
// );

// // ้ๅใซใคใใฆ
// var fruits = ["ในใคใซ","ใกใญใณ","ใใกใ","ใใณใดใผ","ใถใฉใ","ใใใ"];
// console.log(fruits);
// console.log(fruits[5]);
// fruits[5] = "ใใชใขใณ";
// console.log(fruits);

// var book = {
//     name: "ใใใใใใใฃใท",
//     author: "ใชใคใใใใใ",
//     publish_date: "1914ๅนด9ๆ",
//     impression: "paypay pay paypaypaya peypey",
//     sele_flag: 0
// };
// console.log(
//     book["name"]
// );

// book["impression"] = "้ข็ฝใใฃใ";
// console.log(
//     book["impression"]
// );

// var text = 'ใใญในใใๆธใใ';
// console.log(text);

// // True False ใซใคใใฆ
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
//     console.log("ใปใผใซใใใใใพใใ");
// }else {
//     console.log("ใปใผใซๅฏพ่ฑกๅๅใงใ");
// }

// var limit = 14 ;
// var getup = 8;
// if(limit < getup){
//     console.log("้ๅปใงใ");
// }else if(limit == getup){
//     console.log("ใฎใชใฎใชใปใผใ");
// }else{
//     console.log("ใใใใใฐใใพใใ");
// };


// // ็นฐใ่ฟใๅฆ็ใซใคใใฆ
// for(i=1; i<10; i++){
//     console.log(i);
// }

// function greet() {
//     console.log("ใใฏใใ");
// };
// greet();

// function name_text(name) {
//     var name_text = name + "ใใใใใซใกใฏ";
//     return name_text;
// }
// name_text("Daisuke");
// console.log(name_text("Daisuke"));

// console.log("้ข็ฉใฏ" + box_area(4,5));

// function box_area(width,height) {
//     area = width * height;
//     return area;
// };


// // DOMใซใคใใฆ

// var html_title = document.getElementById("title");
// html_title.textContent = "ใใผใๆดๆฐใใใ";

// var button = document.getElementById("button");
// button.addEventListener("click",textChanged);

// function textChanged() {
//     html_title.textContent = "ใญใฉใผใฏใคใผใณใฏใใงใซใใฎใใฟใณใซ่งฆใฃใฆใใ";
// }

$(function(){
    $('#title').text("jQueryใงๆดๆฐใใใ");
    $('#button').on('click', function(){
        $('#title').text("ใใฟใณใๆผใtaใญ๏ผ");
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
