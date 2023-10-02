//?kullanıcıdan 0-100 arasında bir not isteyen ve girilen not 0-100'den farklı ise kullanıcıyı uyararak yeniden 0-100 arasında not girmeye zorlayan kodu While döngüsü ile yazınız.
// let num= +prompt("Enter a number: ")
// while (num<0 || num>100) {
//      num= +prompt("enter a number: ")
    
// }
// console.log("Girdiğininz sayı", num)


//* Fonksiyon türleri

//! Declaration (Fonksiyonun tanimlanmasi)

// selamlama("betul", "cil")
// function selamlama(name, surname){
//     console.log(name, surname);
// }

//! Expression (Fonksiyonun tanimlanmasi)

// let selamlama=function () {
//     console.log("Merhaba");
// }

// selamlama()
// let num1=5
// let num2=6
// let toplama=function(a,b){
//     let sum= num1+num2
//     return sum
// }

// console.log(toplama())


//! Arrow Function

// let selamlama=()=>console.log("Merhaba hoşgeldin");

// let carpma=(a,b)=>a*b

// console.log(carpma(3,5))

//? Kullanıcıdan alınan sayının tek mi çift mi olduğunu belirleyen fonksiyonu arrow function ile yazınız

// let sayı=+prompt("Enter a number: ")

// let tekCift=(sayı)=>sayı%2==0 ? "EVEN": "ODD"

// console.log(tekCift(sayı));

// let result
// let tekCift=(sayı)=>{
   
//     if (sayı%2==0) {
        
//         result="even"   
//     }else if (sayı==0) {
//         result="zero"
//     }else{
//         result="odd"
//     }
//     return result
// }
// console.log(tekCift(result))

//?Bir dairenin alanını hesaplayan fonksiyonu arrow function ile yazınız yarıçapı kullanıcıdan alınız

//! arrow function
// let yarıcap=+prompt("Enter a number: ")
// let pi=3.14

// let hesaplama=(yarıcap, pi)=>alan=pi*(yarıcap**2)

// console.log(hesaplama(alan));

//! decleration yöntemi

// function alanHesapla(r,pi){
//     let alan= pi*r**2
//     return alan
// }
// console.log(alanHesapla(5,3))

let tarih=new Date().getFullYear()
// console.log(tarih);

// let age=(dogumYılı)=> tarih-dogumYılı
// let dogumYılı=2000
// console.log(`${dogumYılı} yılında doğan bir kişinin yaşı ${age(2000)}`)

//? girilen bir yıl değerinin artık yıl olup olmadığını bulan fonksiyonu yazınız

//? yıl 4 e bölünüyor VE  YIL 100 e bölünmeyip veya 400 e bölünüyorsa artık yıldır aksi halde artık yıl değildir.


// let year= +prompt("Enter a year")

// let bul =(year)=>{
//     if ((year%4==0)&&(year%100!=0 || year%400==0)) {
//         year="artık yıldır"
//     }else{
//         year="artık yıl değil"
//     }
//     return year
// }
// console.log(`${year} yılı ${bul(year)}`);