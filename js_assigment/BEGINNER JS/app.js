// ?=  JavaScript'te verileri "görüntülemenin" farklı yolları vardır.  ====


//! ➤ console.log()
//*Console.log() methodu, mesajları konsola kaydetmek veya yazdırmak için kullanılır. Nesneleri ve diğer bilgileri yazdırmak için de kullanılabilir.
//*ön uç programlamada en iyi arkadaşınız olacak.

console.log("Merhaba");


//! ➤ document.write()
// *Document.write() fonksiyonu ile HTML belgemize bir dizi yazabiliriz.





//! prompt

// prompt("enter your age")
//PROMPT İLE ALINAN BÜTÜN DEĞERLER STRİNGDİR

// let number= +prompt("enter a number")

//? değişken tanımlama yolları

// let yas = 25

// const isim = "betül" 

// var meslek= "öğretmen"


// let yas1= 30


// let age = +prompt("Enter your age")
// console.log(age);


// *Verileri görüntülemek için, window.alert() ile bir uyarı kutusu kullanabiliriz.

// let age = prompt("How old are you?");
// alert(`you are ${age} years old!-1`);
// alert("your age-2" + age);
// alert("your age-3 " + age);
// console.log("your age-4 ", age);


//! ➤ window.confirm()
// *Bir soru ve iki düğme içeren kalıcı bir pencere gösterir: pencere.confirm() ile Tamam(OK) ve İptal(Cancel).
// *OK'e basıldığında sonuç true, aksi takdirde false olur.

// confirm("Are you of legal age?");
// let isLegit = confirm("Are you of legal age?");
// alert(isLegit);
// karar = confirm("Emin misiniz E/H")
// console.log(karar)


//! ➤console.warn();
// *ekrana sari renkte bir uyari verir
// console.warn("Bu bir uyarıdir");

// console.warn("eyvah hata yapıyorum galiba")



//! ➤console.error;
//  *ekrana kirmizi renkte bir hata mesaji verir
// console.error("Eyvah hata olustu..");

//********CONST ÖRNEKLERİ *********/
// const pi = 3.14;

// console.log(pi)

// console.log(typeof pi);


// const sayi1 = "3";
// console.log(sayi1, typeof sayi1);
// const sayi1 = 5;
// console.log(sayi1, typeof sayi1);



const varMi = true;
const isOpen = false;
const isClose = true;
// console.log(isOpen, typeof isOpen);
// console.log(isClose, typeof isClose);
// console.log(varMi, typeof varMi);



//* LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//* CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//* CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.



//?====let örnekleri====
// let language = "java";

// console.log(language, typeof language)


// let adil;
// console.log(adil, typeof adil);


// let adet;

// adet = "23";

// console.log(adet, typeof adet);



//? block scope örnegi
// let a = 10;
// if (a === 10) {
    
//     let a = 20;
// }

// console.log(a);


// let yaş=30;

// if(yaş==30){
    
//     console.log("Gençsiniz");
    
// }

// console.log(yaş)




//*===============================OPERATORS IN JAVASCRIPT===========================*

//!ARİTMETİK OPERATORS

//? TOPLAMA
// const num1 = 10;

// const num2 = 69;

// const toplam = num1 + num2;
// console.log(toplam);

// num1 ve num2 operand , + operator olark adlandırılıyor.

// const msg1 = "Hello ";
// const msg2 = "World!";

// const mesaj = msg1 + msg2;

// console.log(mesaj) 
//? iki string ifadenin toplamı demek o iki stringi yan yana birleştirmek demektir


// *örnekler
// let x = 1 + 1;
// console.log(x);
// let y = "1" + 1+5+8+9;

// console.log(y)  
//? javascript bir tane string görünce bundan sonraki değerler hangi tipte olursa olsun bunları yan yana birleştirir

// let z = 1 + 1 + "1"+8+9;
// console.log(z);

//? javascript number veya float değerleri ta ki bir string görene kadar toplar stringi gördüğü andan itibaren artar yan yana birleştirir.

// let t = 1 + 1 + "1" + 1 + 2;
// console.log(t)

// let v = 1 + "a"+2 +"3";
// console.log(v);

// let u = "a" + "b";
// console.log(u)



//? ÇIKARMA
// const x = 55;
// const y = 44;
// const cıkar= x-y
// console.log(cıkar);



// const x = 10;
// const y = "1";
// const cıkar= x-y;  
//? bir number değeri string içinde yazılmış olsa bile javascript bunu number olarak algılayıp çıkarma işlemi yapıyor
// console.log(cıkar)

// const a = "b";
// const c= 10
// const d= c-a;
// console.log(d);

//? bir string değer numara değilse buna javascript not a number diyor ve çıkarma işleminin sonucunu Nan olarak veriyor
// const z = x - y;
// const v = y - a;
// console.log(v)
//? değeri number olmayan iki stringi çıkarma yaparken de Not a Number sonucunu vermekte


//*Örnekler
// let x = 10 - 5;   //5
// let y = 10 - "5"; //5
// let z = "10" - 5; //5
// let t = "10" - "5"; //5
// let u = 10 - "a";  //Nan
// let v = "a" - "b"; //Nan


//?ÇARPMA
// let carp1 = 7;
// let carp2 = 9;
// let carpma = carp1 * carp2;
// console.log(carpma);
// let x = "a" * "b";
// console.log(x)  //? iki string ifadenin çarpımının sonucu Nan  olarak karşımıza çıkar
// let y = "a" * 3;
// console.log(y); //? bir number bir string ifadenin çarpımının sonucu da Nan dır



//?ÖNEMLİ
Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123


//?BÖLME
// const böl1 = 85;
// const böl2 = 9;
// const a= böl1/böl2
// console.log(a)

// const x = böl1 / "9"; //? kullanıcının number tipinde değer girdiğini varsayarak normal bölme işlemi yapıyor
// console.log(x);

// const b = böl1 / "dokuz";
// console.log(b) //? string ifade sayı olmadığı için sonucu Not a number olarak veriyor
// const c= böl2 / 0;  // ınfinity
// console.log(c);
// console.log(0/0) //Nan
// console.log(0/böl1);  //0



//? MOD ALMA (%)

// const mod1 = 57;
// const mod2 = 9;

// console.log(mod1%mod2)


// const sayı = 537

// const birlerbasamağı= sayı%10
// const onlarbasamağı=((sayı%100)-birlerbasamağı)/10
// const onlarbasamağı= Math.floor((sayı%100)/10)

// const yüzlerbasamağı= Math.floor(sayı/100)
// console.log(birlerbasamağı)
// console.log(onlarbasamağı)

// console.log(`${sayı}  nin birler basamağı: ${birlerbasamağı}`);
// console.log(`${sayı}  nin onlar basamağı: ${onlarbasamağı}`);
// console.log(`${sayı}  nin yüzler basamağı: ${yüzlerbasamağı}`);




// const name= "Betül"
// let yas =35

// console.log(`benim adım ${name}`)
// console.log(`${yas} yaşında işe başladım`);


//* bazı hazır fonksiyonlar

//!     Math.ceil();  (sayıyıh her zaman bir üstteki tamsayı değerine yuvarlar)

// let sayı= Math.ceil(5.3)
// console.log(sayı)



//!     Math.floor();    ( sayıyı her zaman bir alttaki tamsayı değerine yuvarlar)
// let sayı2= Math.floor(6.7)
// console.log(sayı2);




//!               Math.trunc(); (sayının tam kısmını alır)

// let sayı3= Math.trunc(5.00009)
// console.log(sayı3)



//!           Math.round();  (ondalıklı sayıyı en yakın tamsayıya yuvarlar)

// let sayı4= 5.8;
// let sayı5= 8.3;
// let sayı6= 6.5

// console.log(Math.round(sayı4));
// console.log(Math.round(sayı5));
// console.log(Math.round(sayı6));



//!           Math.random();   (0 ile 1 arasında rastgele sayı üretir)

// let sayı7= (Math.random()*100)   //!   (0 ile 100 arasında sayı üretir)
// let sayı8= Math.random()  //! 0 ile 1 rasında sayı üretir
// let sayı9= Math.random()*10  //! 0 ile 10 rasında sayı üretir
// console.log(sayı9)


// let benimSayım=  Math.random()*100
// console.log(benimSayım.toFixed(5));



// console.log(Math.round(-3.80))




//?                  ++ ve -- operatörleri 1 artırır veya 1 eksiltir


let number= 6;
// let newNumber= number
// console.log(number);
// console.log(newNumber);



// number= number + 1
// console.log(number)

// newNumber= ++number;
// console.log(newNumber);


// newNumber= number++
// console.log(newNumber)



// let newNumber= ++number;
// console.log(newNumber);
// console.log(--newNumber);
// console.log(newNumber--)


// let ssa= Math.random()*10;
// console.log(ssa);

// console.log(Math.floor(ssa))




//!                                                 Atama Operatörleri

//! += Ekle ve Sonucu Ata
let num1 = 14;
let num2 = 17;


num2= num2 + num1 ;
//? yukarıdaki gibi uzun uzun yazmak yerine += operatörünü kullanarak işlemimi kısaltmış oldum. Aynı şekilde diğer operatörler içinde geçerli.
// nums2 += nums1;
// num2 += num1;

// console.log(num2)

//! -= Çıkar ve Sonucu Ata

// let num4 = 6;
// let num5 = 3;


// num4 = num4 - num5;

// num5 -= num4;

// console.log(num5);

let num14 = 6;
let num15 = 3;

// //! -= Çıkar ve Sonucu Ata
// num14 = num14 - num15;
// num14 -= num15;
// console.log(num14); // 3



// //! *= Çarp ve Sonucu Ata
// num14 = num14 * num15;
// num14 *= num15;
// console.log(num14); 





// //! /= Böl ve Sonucu Ata
// num14 = num14 / num15;
// num14 /= num15;
// console.log(num14);




 //! /= Bölümden Kalanı Bul ve Ata
// num14 = num14 % num15;
// num14 %= num15;
// console.log(num14);



//?                         Karşılaştırma Operatörleri


// const num16 = 27;


// console.log(num16 == 27); //true
// console.log(27 == "27"); // true


// const num17=27

//* eğer iki değişkeni hem değer hem de tip olarak karşılaştırmak için === operatörünü kullanırız iki eşilik varsa bu değişkenlerin sadece değer olarak eşit olup olmdıklarını sorgular

// console.log(num16===27)
// console.log(num16==="27")

// let user1= prompt("enter a number user1")  //*string tipinde
// let user2= +prompt("enter a number user2")   //* string ifadeyi number a cevirir
// let user2= +prompt("enter a number")   //* string ifadeyi number a cevirir
// 12


// console.log(user1===user2);
// console.log(user1 == user2);



// //? !=, !==

// console.log(15 != "15"); // false. çünkü değerleri eşit
// console.log(15 !== "15"); // true. çünkü typeları eşit değil



//? >, < (Büyük mü?, Küçük mü?)

// console.log(15 >= 15); //true
// console.log(15 <= 15); // true
// console.log(15 >= 16); // false
// console.log(15 >== "15");// error verir. Çünkü bu şekilde karşılaştırma operatörü bulunmuyor.
// console.log(15 >= "15"); // true
// console.log("14" <= "15"); // true




//! Mantıksal Operatörler

//* &&           and


//  console.log(" " && true && 2 && 6 && "ali" && "veli" && true);

//  console.log(true && ""); 
//  console.log(5 && "Merhaba"); // "Merhaba"




// //*                  || or

//  console.log(true || false); 
//  console.log("" || 0);

 //?        || operatoru true ve truthy değer arar. ilk gördüğü true veya truthy döner.Bulamazsa son gördüğü false veya falsy değeri döner.




 //*                    ! not

// console.log(!true); // false
// console.log(!false); // true
// console.log(!0); // true
// console.log(!5); // false



//? falsy
// console.log(Boolean(false)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(-0)); // false
// console.log(Boolean(0n)); // false
// console.log(Boolean("")); // false (boş string)
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN)); // false





//?             truthy
// console.log(Boolean(true)); // true
// console.log(Boolean({})); // true (boş object)
// console.log(Boolean([])); // true (boş array)
// console.log(Boolean(5)); // true
// console.log(Boolean("0")); // true (dolu string)
// console.log(Boolean("false")); // true (dolu string)
// console.log(Boolean(Infinity)); // true
// console.log(Boolean(new Date())); // true (tarih methodları)
// console.log(Boolean(function () {})); // true (boş fonksiyon)
// console.log(
// Boolean(function () {
//     console.log("Hello World!");
//   })
// ); // true (boş fonksiyon)}



//! İşlem Önceliği sıralaması
// 1. ! (not)
// 2. && (and)
// 3. || (or)



//! Kullanıcının vize ve final ortalaması canEgrisine eşit veya büyükse Kullanıcıya "Geçtiniz" mesajı dönünüz. Eşit veya büyük değilse "Kaldınız" şeklinde mesaj dönününüz.
//! Not: prompt tan gelen veriler string olarak geliyor o nedenle dönüştürme işlemi yapıyoruz.
//! Vizenin 530 u finalin % 70 ini alarak hesaplama yapalım

// const canEgrisi= 65
// const vize= Number(prompt("vize notunuzu giriniz"))
// const final= +prompt("final notunuzu giriniz")

// const ortalama= vize*0.3 +final*0.7


// console.log((ortalama>=canEgrisi) && "Gectiniz" || "Kaldınız")


// console.log(`ortalamanız:  ${ortalama}`);




// * =============================================
// *            TIP DONUSUMLERI
// * =============================================



// let sayi = prompt("Bir sayi girinz:") //? 100
// console.log(typeof sayi)
// let sayi2 = 10
// sayi = sayi + sayi2 //? concatination


// console.log(sayi++)




// console.log(Number("123")) //? 123
// console.log(Number("12.3")) //? 12.3
// console.log(Number("0")) //? 0
// console.log(Number(" ")) //? 0   true
// console.log(Number("")) //? 0
// console.log(Number(null)) //? 0
// console.log(Number(undefined)) //? NaN

// const myNumber = "threezeroone" //? string
// let myNumber2 = Number(myNumber)
// console.log(myNumber2) //? NaN
// console.log(typeof myNumber2) //? number

// const dolar = "1000.3"
// const tl = "2000.2"

// const totalMoney = Number(dolar) + +tl
// console.log(totalMoney)



//* ALternatif olarak parseInt() ve parseFloat() da kullanilabilir.
// const dolarInt = parseInt(dolar) //? tamsayiya cevirir
// console.log(dolarInt)
// const tlFloat = parseFloat(tl) //? virgüllü sayiya çevirir
// console.log(tlFloat)

// console.log(parseFloat(null)) //? NaN
// console.log(parseFloat("")) //? NaN
// console.log(parseFloat(undefined)) //? NaN



//*nedenlerini anlamak icin bu linkteki yaziya göz atabilirsiniz  
https://medium.com/@kplnhsyn.49/list/reading-list

// true + false             // 1
// 12 / "6"                 // 2
// console.log("number" + 15 + 3 );       // 
// 15 + 3 + "number"        // 
// console.log( 15 + 3 + "number" )
// [1] > null               // true
// "foo" + + "bar"          // 'fooNaN'
// console.log('15' == 15);         // false
// false == 'false'         // false
// null == ''      


// console.log("a">"A")


//! KULLANICIDAN İKİ SAYI ALINIZ BU SAYILARIN BİRBİRİ İLE ÇARPIMI 10 DAN BÜYÜK İSE SAYIM İKİ BASAMAKLI DEĞİL İSE SAYIM BİR BASAMAKLI DİYE BİR ÇIKTI VERİNİZ


// let numaram= Number(prompt("enter your number"));
// let numara2= +prompt("enter your number");
// let sonuc= numara1*numara2;
// let carpım= 10


// console.log((sonuc>=carpım)&& "çıft haneli"  || "tek haneli");



const sayi= +prompt("enter a number")
let sonuc = "";

if (sayi > 0) {
  sonuc = "Positif";
} 
else if (sayi < 0) {
  sonuc = "Negatif";
} 
else {
  sonuc = `sayiniz ${sayi} dir`;
}