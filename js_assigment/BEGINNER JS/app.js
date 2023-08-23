// ?=  JavaScript'te verileri "görüntülemenin" farklı yolları vardır.  ====


//! ➤ console.log()
//*Console.log() methodu, mesajları konsola kaydetmek veya yazdırmak için kullanılır. Nesneleri ve diğer bilgileri yazdırmak için de kullanılabilir.
//*ön uç programlamada en iyi arkadaşınız olacak.

console.log("Merhaba");


//! ➤ document.write()
// *Document.write() fonksiyonu ile HTML belgemize bir dizi yazabiliriz.





//! prompt

// prompt("enter your age")


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

//********CONST ÖRNEKLERİ */
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

