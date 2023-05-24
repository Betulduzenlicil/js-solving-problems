

// function islem(parametre1, parametre2, parametre3){
//     console.log(parametre1);
//     console.log(parametre2);
//     console.log(parametre3);
//     return parametre2 + parametre1 + parametre3
// }
// console.log(islem(3,4,[1,2,3]))


// let topla= islem(3,4)
// console.log(topla) //Nan

// const sum = function(a,b) {
//   return a + b
  
// }
// sum(2,3)
// console.log(sum(2,3))

//? ÖRNEK:1 CELCİUS DEĞERİNİ fAHRENHEIT DEĞERİNE DÖNÜŞTÜREN BİR FONKSİYON YAZINIZ. (Celcius * 9/5) + 32 = Fahrenheit


// console.log(calFahrenheit(30))
// function calFahrenheit (deg) {
//   let hesapla= deg * 9/5  + 32 
//   console.log(hesapla) 
//   return hesapla
// }



//? ÖRNEK:2 BELİRLİ BİR STRİNG İFADENİN TERSİNİ BULAN FONKSİYONU YAZINIZ.

// let str = "Hello World"
// reverseString(str)
// console.log(str[10])
// function reverseString (str) {
//     let newStr= ''
// for(let i= str.length-1; i>=0; i--){
    
//     newStr+= str[i]
// }
// console.log(newStr)
 
  
    
// }



//? ÖRNEK:3 POLİNDROM OLUP OLMADIĞINI KONTROL ETME

// const string = 'alila'

//  console.log(isPalindrome(string)) // output: true

// function isPalindrome(str) {
//   let newStr = ''

//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
//   }

//   if (str == newStr) {
//     return true
//   } else {
//     return false
//   }
// }


//? ÖRNEK:4  Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?(includes)

// console.log(findVowels('hello world'))
// let text = "Hello World";
// let lowerText = text.toLowerCase();
// let result = ""
// let vowels = () => {
//     if (lowerText.includes("a")==true) {
//         result += "a ";
//     }
//     if (lowerText.includes("e")==true) {
//         result += "e ";
//     }
//     if (lowerText.includes("ı")==true) {
//         result += "ı ";
//     }
//     if (lowerText.includes("i")==true) {
//         result += "i ";
//     }
//     if (lowerText.includes("o")==true) {
//         result += "o ";
//     }
//     if (lowerText.includes("ö")==true) {
//         result += "ö";
//     }if (lowerText.includes("u")==true) {
//         result += "u ";
//     }
//     if (lowerText.includes("ü")==true) {
//         result += "ü ";
//     }
//     console.log(result);
// }

// vowels();


//? ÖRNEK: 5 Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?

// const sayı = 24
// function sumOfDivisors (num) {
//   let sum = 0;
//   // console.log(num)
//   for (let i = 1; i <= num; i++) {
//     console.log(i)
//     if (num % i==0) {
//       sum +=i
//     }
   
    
//   }
//   return sum

// }
// console.log(sumOfDivisors(sayı)) 

//?2.yol
// const sayi = 24 // 24 12 8 6 4 3 2 1

// function sumOfDivisors(num) {
//   let list = []
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       list.push(i)
//       console.log(i)
//     }
//   }

//   return list
// }
// console.log(sumOfDivisors(sayi))



//? ÖRNEK:6 VERİLEN CÜMLEYİ TERSTEN YAZDIRINIZ

//* 1. yol
// let sentence = "People should not be afraid of their goverments; the goverment should be afraid of their people";
// console.log(sentence.split(" ").reverse().join(" "));


//* 2.yol
// let sentence = "Coding. love I"

// let newSent = sentence.split(" ")
// let target = ""
// for(let i = newSent.length-1; i> -1; i--){
//   target+= " " + newSent[i]
// }
// console.log(target)

//*3.yol
// let sentence = prompt("Give a sentence to reverse").split(" ");
// function reversedSentence (a) {
//     let newStr = "";
//     for (let i = a.length -1; i>=0; i--){
//         newStr += " " + a[i];
//     }
//     return newStr
// }
// console.log(reversedSentence(sentence));


//? ÖRNEK:7 VERİLEN CÜMLEYİ TAMAMEN TERSTEN YAZDIRINIZ
// let sentence = "Clarusway Rocks!"

// let reversedSentence = sentence.split("").reverse().join("")
// console.log(reversedSentence)

