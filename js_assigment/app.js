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

// let etkinlik = "";
// let gun= prompt("Enter a number between monday, 1-7")

//     switch (gun) {
//         case "1":
//             etkinlik = "In class";
//             break;
//         case "2":
//             etkinlik = "In class";
//             break;
//         case "2":
//             etkinlik = "In class";
//             break;
//         case "4":
//             etkinlik = "In class";
//             break;
//         case "5":
//             etkinlik = "Team Work";
//             break;
//         case "6":
//             etkinlik = " In class + Teamwork";
//             break;
//         case "7":
//             etkinlik = "self study";
//             break;
//         default:
//             etkinlik = "yanlış gün girildi";
//     }

//     console.log(`${gun} günü: ${etkinlik}`);

   
 //?QUESTION-5)
 //! Consoldan gelir ve gider bilgilerini alıp gelir giderden en az asgari ücret kadar ise kredi alabilir yoksa alamaz (ternary)

//  const minSalary= 11000
//  let gelir= +prompt("Enter your gelir")
//  let gider= +prompt("Enter your gider")

//  let result= gelir-gider>=minSalary? console.log("kredi alabilir"):console.log("kredi alamaz");

 //?QUESTION-6)
 //! Consoldan kişinin maaşını alınız eğer maaş asgari ücretten az ise %50 değilse %10 zam yapan kodu(ternary)

// const minSalary= 11000
// let salary= +prompt("Enter your salary")
// let zam= salary<minSalary? console.log(`yeni maaşınız: ${salary*1.5}`):console.log(`yeni maaşınız: ${salary*1.1} `)

//?QUESTION-7) 
//! 0 ile 100 arasında girilen not değerine karşılık gelen programı yazınız
// const not= +prompt("Enter your note")

// if (not<0 || not>100) {
//     console.log("Girilen değer hatalı");  
// }else{
//     if(not>0&&not<=25){
//         console.log("Başarı durumunuz: FF")
// }   else if(not>25&&not<=45){
//         console.log("Başarı durumunuz: DD");
// }   else if(not>45&&not<=65){
//         console.log("Başarı durumunuz: CC")
// }   else if(not>65&&not<=75){
//         console.log("Başarı durumunuz: BB");
// }   else{
//         console.log("Başarı durumunuz: AA")
// }}

//?QUESTION-8) 
//!  girilen  sayı değerinin tek veya çift olduğunu belirleyen programı yazınız

// const num=+prompt("enter a number")
// let result= num%2==0?console.log(`${num} çift sayı`):console.log(`${num} tek sayı`);