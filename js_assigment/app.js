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

//?QUESTION-9) 
//! Girilen dereceyi fahrenhayta veya fahrenhaytı dereceye çeviren programı tasarlayınız

// let sıcaklık= +prompt("lütfen  bir değer giriniz")
// let dönüşüm= prompt("lütfen secim yapınız: (1 veya 2)")

// if (dönüşüm==1) {
//     console.log(`${sıcaklık} derece: ${(sıcaklık*9/5)+32} fahrenhayta eşittir`)
// }else if(dönüşüm==2) {
//     console.log(`${sıcaklık} fahrenhayt: ${(sıcaklık-32)*5/9} dereceye eşittir`)
// }else{
//     console.log("geçerli secim yapmadınız");
// }


//?QUESTION-10)

//! sayı tahmin oyunu
// let sayı= Math.round(Math.random()*100)
// let hak = 5; // Kullanıcının kalan tahmin hakkı

// console.log("0 ile 100 arasında bilgisayarın tuttuğu sayıyı bulmak için 5 tahmin hakkınız var.");

// while (hak > 0) {
//     var user = +(prompt("Tahmininizi girin:"));

//     if (isNaN(user) || user < 0 || user> 100) {
//         console.log("Geçerli bir sayı giriniz (0-100 arası)!");
//         continue;
//     }

//     if (user === sayı) {
//         console.log("Tebrikler! Doğru tahmin ettiniz.");
//         break;
//     } else {
//         hak--;

//         if (hak === 0) {
//             console.log("Hakkınız bitti. Doğru tahmin edemediniz. Tutulan sayı: " + sayı);
//             break;
//         } else if (user < sayı) {
//             console.log("Daha büyük bir sayı girin. Kalan hak: " + hak);
//         } else {
//             console.log("Daha küçük bir sayı girin. Kalan hak: " + hak);
//         }
//     }
// }

//?QUESTION-11)
//! 1 den n ye kadar olan sayıların toplamını yazdıran kodu yazınız

// let sayı= +prompt("Enter a number")
// let sum=0;

// for (let i = 0; i < sayı; i++) {
//     sum+=i;
    
// }
// console.log(`1 den ${sayı} e  kadar olan sayıların toplamı:  ${sum}`);

//?QUESTION-12)
//! 1 den 100 e kadar 10 adet rastgele sayı üreten kodu yazınız

// for (let i = 0; i < 10; i++) {
//     let sayı=Math.round(Math.random()*100)
   
//     console.log(`${i} nci sayı ${sayı}`);
// }

//?QUESTION-13)
//! girilen sayının asal olup olmadığını belirleyen kodu for döngüsü ile yazınız

// const sayı = +prompt("enter a number")
// let asalMı= true;

// if (sayı <= 1) {
//     asalMı = false;
// } else {
//     for (let i = 2; i < sayı; i++) {
//         if (sayı % i === 0) {
//             asalMı = false;
//             break;
//         }
//     }
// }

// if (asalMı) {
//     console.log(sayı + " asal bir sayıdır.");
// } else {
//     console.log(sayı + " asal bir sayı değildir.");
// }

//?QUESTION-14)
//! consola 1o kere merhaba yazdıran kodu while döngüsü ile yazınız

// let num=1;
// while (num<10) {
//     console.log(num+ " Merhaba");
//     num++;
// }


//?QUESTION-15)
//! consola 0-100 arasında not isteyen ve girilen not farklı ise yeniden 0-100 arasında not girmeye yönlendiren kodu yazınız 

// let note=+prompt("Enter your note")

// while (true) {
//     if (note<0 || note>100) {
//         note=+prompt("Enter your note")
//         continue;
//     }else{
//         console.log("notunuz: " +note)
//     }
//     break;
// }

//?QUESTION-16)
//! consola 0-100 arasında not isteyen ve girilen not farklı ise yeniden 0-100 arasında not girmeye yönlendiren kodu yazınız 



