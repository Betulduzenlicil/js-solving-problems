

// function islem(parametre1, parametre2, parametre3){
//     console.log(parametre1);
//     console.log(parametre2);
//     console.log(parametre3);
//     return parametre2 + parametre1 + parametre3
// }
// console.log(islem(3,4,[1,2,3]))


// let topla= islem(3,4)
// console.log(topla) //Nan



//? ÖRNEK:1 cELCİUS DEĞERİNİ fAHRENHEIT DEĞERİNE DÖNÜŞTÜREN BİR FONKSİYON YAZINIZ. (Celcius * 9/5) + 32 = Fahrenheit


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



//? ÖRNEK:3 pALİNDROM OLUP OLMADIĞINI KONTROL ETME

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