

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

const sayı = 24
function sumOfDivisors (num) {
  let sum = 0;
  // console.log(num)
  for (let i = 1; i <= num; i++) {
    console.log(i)
    if (num % i==0) {
      sum +=i
    }
   
    
  }
  return sum

}
console.log(sumOfDivisors(sayı)) 

