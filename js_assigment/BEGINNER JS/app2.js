// console.log("merhaba")

// const sayi= +prompt("enter a number")
// let sonuc = "";

// if (sayi > 0) {
//   sonuc = "Positif";
//   console.log(sonuc)
// } 
// else if (sayi < 0) {
//   sonuc = "Negatif";
//   console.log(sonuc);
// } 
// else {
//   sonuc = `sayiniz ${sayi} dir`;
//   console.log(sonuc);
// }

// if (sayi<0) {
//     console.log("sayınız negatif")
// }
// else if (sayi>0) {
//    console.log("sayınız pozitif"); 
// }
// else
// {
//     console.log("sayınız sıfır")
// }


// let sayım1= +prompt("ilk sayı")
// let sayım2= +prompt("ikinci sayı")
// let sayım3= +prompt("ücüncü sayı")

// let enBuyuk= sayım1

// if (sayım2>enBuyuk) {
//     console.log("en buyuk sayı", sayım2);
// }   if (sayım3>enBuyuk) {
//     console.log("en buyuk sayı", sayım3)
// }
// else{
//     console.log("en buyuk sayı", sayım1);
// }

// const num1=+prompt("bir sayı giriniz")
// const num2=+prompt("bir sayı daha giriniz")
// const operator= prompt("bir operator giriniz ","+", "-", "*","/")

// if (operator=="+") {
//     console.log(num1+num2)
// }
// else if (operator=="-") {
//     console.log(num1-num2);
    
// }else if (operator=="*") {
//     console.log(num1*num2)
// }else if (operator="/") {
//     console.log(num1/num2);
// }else{
//     console.log("gecerli operator giriniz")
// }

// const num1 = +prompt("Bir sayı giriniz: ")
// const num2 = +prompt("Bir sayı daha giriniz: ")
// const operator = prompt("Bir operator giriniz "+","-","*","/"")
// if (operator == "+") {
//     console.log(num1+num2)
// }
// else if (operator == "-") {
//     console.log(num1-num2)
// }
// else if (operator =="*"){
//     console.log(num1*num2)
// }
// else if (operator =="/"){
//     console.log(num1/num2)
// }
// else{
//     console.log("gecerli bir operator giriniz")
// }

// let hız = 130;

// let hızım = hız  ? console.log("hızını azalt"): console.log("hızın normal")

// let maas=+prompt("maasınızı giriniz")

// let minSalary= 10000


// let zamlıMaas= maas<minSalary ?  console.log(maas*1.5): console.log(maas*1.1)

// let gün = +prompt("1-7 arasinda bir deger gir");
// switch (gün) {
//   case 1:
//     gün = "pazartesi";
//     break;
//   case 2:
//     gün = "sali";
//     break;
//   case 3:
//     gün = "carsamba";
//     break;
//   case 4:
//     gün = "persembe";
//     break;
//   case 5:
//     gün = "cuma";
//     break;
//   case 6:
//     gün = "cumartesi";
//     break;
//   case 7:
//     gün = "pazar";
//     break;
//   default:
//     gün = "hatali giris";
//     break;
// }

// console.log(gün);
// console.log("switch-case karar mekanizmasi bitti");

// let numara=+prompt("lütfen 2 veya daha buyuk sayı giriniz")

// for (let i = 2; i<numara; i++) {
//     if (numara % i=== 0) {
//        console.log("ASAL değil"); 
//        break
//     }
        
//     else{
//         console.log("Asal ");
//     }
    
// }


//?Aşagıdaki çıktıyı konsola yazdırma


//* 0
//* 00
//* 000
//* 0000
//* 00000
//* 000000

// let rows=6

// for (let i = 1; i<=rows; i ++) {
    
//     let row="";
//     for (let j = 1; j <= i; j ++) {
        
//         row+="0";
//     }
//     console.log(row);
// }



















// //? Aşagıdaki çıktıyı konsola yazdırma

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// let alan=""

// for (let i = 1; i<6;  i ++) {
//     if (i=!1) {
//         alan+="\n"
        
//     }
//     for (let j = 1; j<6; j ++) {
//         alan+="* ";
        
//     }
    
// }
// console.log(alan);

// let x =""
// for (let i = 1; i < 6 ; i++) {
//     if (i!=1) {
//         x+="\n"
//     }
//     for (let j = 1; j < 6; j++) {
//         x += "* ";
//     }    
// }
// console.log(x);

//? Negatif sayı girilene kadar girdiği sayıları toplama

// let sum=0;
// let number=+prompt("Enter a number")

// while (number>=0){
//     sum+=number;
//     number=+prompt("Enter a number")
// }
// console.log(sum);

//? 3'e tam bölünenlere "Fizz", 5'e tam bölünenlere "Buzz", hem 3'e hem de 5'e tam bölünenlere "FizzBuzz" yazdıran program

// sayı=50
// for (let i = 1; i<=sayı;  i ++) {
//     if (i %3==0 && i%5==0) {
//         console.log("Fizzbuzz");
//     }
//     else if (i%3==0) {
//         console.log("fizz");
        
//     }
//     else if (i%5==0) {
//         console.log("buzz");
//     }
//     else{
//         console.log(i);
//     }
// }


//? 500 ile 1250 arasındaki 13 e bölümünden kalanı 3 olan sayıları yazdırma ve kaç tane yazdırdığını hesaplama

// let number1=500
// let number2= 1250
// let count=""

// for (let i = number1;  i<= number2; i ++) {
//     if (i%13==3) {
//         console.log(i);
//         count++
        
//     }
    
// }
// console.log(`there are ${count} number`);
// console.log("there are", count, "var");
// ? Çarpım tablosu oluşturma

// for (let i = 1; i<=10; i ++ ) {
//     console.log(`${i}`, "lar");
    
//     for (let j = 1; j<=10; j ++) {
//         console.log(`${i}x${j}=${i*j}`);
        
//     }
   // console.log("====");
    
// }

// ? Arsmstrong sayısı

//* 153 => 1**3 + 5**3 + 3**3 = 153 - bu armstrong sayısıdır

// let number=153

// let toplam=0

// let birlerBas= Math.floor(number%10)
// console.log(birlerBas);

// let onlarBas= Math.trunc((number%100)/10)
// console.log(onlarBas);

// yüzlerBas=Math.floor((number%1000)/100)
// console.log(yüzlerBas);

// let armstrong= (birlerBas**3 +onlarBas**3+ yüzlerBas**3)==number ? console.log("Bu sayı armstrong sayıdır"): console.log("Bu sayı armstrong sayı değildir");





// ? Kullanıcıdan 0-100 arasında bir not isteyen ve girilen not 0-100'den farklı ise kullanıcıyı uyararak yeniden 0-100 arasında not girmeye zorlayan kodu While döngüsü ile yazınız.


//? 4 işlem yapan hesap makinesini fonksiyon kullanarak yapalım
// let hesapMakinesi=(num1,num2, symbol)=>{
//     if (symbol=="+") {
//       result= num1+num2  
//     }
//     else if (symbol=="-") {
//         result=num1-num2
//     }
//     else if (symbol=="*") {
//         result=num1*num2
        
//     }else if (symbol=="/") {
//         result=num1/num2
//     }
//     return result
// }

// console.log(hesapMakinesi(4,5,"-"));


//? Bir sayının tek mi çift mi olduğunu belirleyen fonksiyonu yazalım

// let oddEven=(num)=>{
//     if (num%2==0) {
//         result="EVEN"
        
//     }else{
//         result="ODD"

//     }
//     return result
       

// }

// console.log(oddEven(5));
// console.log(oddEven(8));


//? ikinci yol

// let oddEven=(num)=>num%2==0 ? "EVEN":"ODD"
// console.log(oddEven(7));

//? Bir dairenin alanını hesaplayan fonksiyonu arrow function ile yazınız yarıçapı kullanıcıdan alınız

// let yarıcap=+prompt("yarıçap değeri yazınız: ")
// let pi= 3.14
// let area= pi*(yarıcap**2)

// let hesapla=(a,b)=>area

// console.log(hesapla(yarıcap,pi));


//? Doğum tarihini parametre olarak alan ve kişinin yaşını hesaplayan fonksiyonu yazınız



// let yasHesapla=function() {
//     let dogumTarihi=+prompt("doğum tarihinizi yıl olarak giriniz: ")
//     let age=new Date().getFullYear()-dogumTarihi
//     return age
    
// }
// console.log(yasHesapla())


let ucgenAlan=function(a,b) {
    
}