console.log("===============JS AASIGMENT=============");

//? QUESTION-1)
//! Consoldan girilen bir sayının pozitif negatif veya sıfır olup olmadığını belirleyen kodu yazınız


// const num= +prompt("Enter a number")

// if(num<0){
//     console.log(`${num} is negative`);
// }else if(num>0){
//     console.log(`${num} is positive`);
// }else{
//     console.log(`${num} is zero`);
// }


//? QUESTION-2)
//! CONSOLDAN 3 TAMSAYI ALARAK BUNLARIN EN BÜYÜĞÜNÜ YAZDIRINIZ

// const num1=4
// const num2=73
// const num3=32

// let bigNum= num1;

// if(num2>bigNum){
//     bigNum=num2;
    
// }else{
//     bigNum=num1
// }
// if(num3>bigNum){
//     bigNum=num3;

// }else{
//     console.log(`Biggest is ${bigNum}`);
// }
// console.log(`Biggest is ${bigNum}`);


//? QUESTION-3)
//! Consoldan iki sayı alarak 4 işlem yapan hesap makinesi oluşturunuz

// const num1= +prompt("Enter a number")
// const num2= +prompt("Enter a number")
// const symbol= prompt("Enter a symbol (+, -, *, /)")
// let result;

// if (symbol=="+") {
//    result= num1 + num2
// }else if (symbol=="-") {
//     result= (num1-num2);
// }else if (symbol=="*") {
//     result=(num1*num2);
// }else{
//     result= (num1/num2);
// }
// console.log(`${num1} ${symbol} ${num2} = ${result}`);

//?QUESTION-4)
//!CONSOLDAN girilen günlere göre haftalık programınızı yazdırınız

let etkinlik = "";
let gun= prompt("Enter a number between monday, 1-7")

    switch (gun) {
        case "1":
            etkinlik = "In class";
            break;
        case "2":
            etkinlik = "In class";
            break;
        case "2":
            etkinlik = "In class";
            break;
        case "4":
            etkinlik = "In class";
            break;
        case "5":
            etkinlik = "Team Work";
            break;
        case "6":
            etkinlik = " In class + Teamwork";
            break;
        case "7":
            etkinlik = "self study";
            break;
        default:
            etkinlik = "yanlış gün girildi";
    }

    console.log(`${gun} günü: ${etkinlik}`);
