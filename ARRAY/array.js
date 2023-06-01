

//************************** */ DİZİLER /**********************


//? soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız?​

// let dizi = [1,2,3,45,65];
// let ortalama = 0;

// for (let i = 0; i < dizi.length; i++) {
//     ortalama+= dizi[i];
    

// }
// console.log(ortalama)
// console.log(ortalama/dizi.length);

//?-2. yol ----------------------------------------------------------------

// let dizi = [1,2,3,45,65];
// let ortalama = 0;
// dizi.forEach((d) => {ortalama+=d
    
// });
// console.log(ortalama/dizi.length)


//? soru 2: Bir prağraftaki sesliharflerin sayısını bulan fonksiyonu yazınız?



// soru 3: Bir dizideki en büyük sayıyı bulan fonksiyonu yazınız?



// soru 4: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.




// soru 5: Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.



// soru 6: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.



// soru 7: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun.
//*********************/ ARRAY METHODS /********************/


const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];

const isimler = ['sezer', 'ali', 'hasan', 'ayse'];

const ogrenciler = [
    {id : 12, isim : "sezer", yas : 30},
    {id : 22, isim : "hasan", yas : 15},
    {id : 32, isim : "fatma", yas : 55},
    {id : 13, isim : "nuriye", yas : 19},
    {id : 92, isim : "kemal", yas : 45},
    {id : 15, isim : "mustafa", yas : 75},
    {id : 44, isim : "ceren", yas : 30}
];

//?================= FONKSİYON ÇEŞİTLERİ=======================?//

//! decleration
ahmet() // herhangi bir değişkene atanmadığı için öncesinde çalıştırılabilir
function ahmet () {
    console.log("***");
    
}

//! expression
const mehmet = function () {
    console.log("***");
    
}
mehmet()// değişkene atandığı için tanımlama öncesinde çalışmaz

//! arrow
const fatma = () => {
    console.log("***");
}
fatma()// değişkene atandığı için tanımlama öncesinde çalışmaz


//! ************** */METHODS*/*********** */

//? SHIFT
// let result =sayilar.shift() //ilk elemanı sildi
// console.log(result) //  sildiğini yazdırdı
// console.log(sayilar) // 1 silindi [50,2,41,41,84,8,35,3] kaldı

// let result2 = isimler.shift() //sezer silindi
// console.log(result2) // sezeri yazdırdı
// console.log(isimler)


// let result3 = ogrenciler.shift() // ilk sıradaki objeyi sildi
// console.log(result3) // sildiğini yazdırdı
// console.log(ogrenciler) // kalan 5 elemanlı dizi oldu




//?UNSHIFT

// let result4= sayilar.unshift(100)// arryin ilk elemanını olarak 100 ekledi
// console.log(result4); // arryain uzunluğunu gösterdi
// console.log(sayilar); // ilk elemanı 100 olan array oluştu


// let result5= isimler.unshift("Noah")
// console.log(result5); // ilk eleman hoah oldu
// console.log(isimler); // isimler araryinin uzunluğunu yazdırdı

// let result6 = ogrenciler.unshift({id : 46, isim : "BETÜL", yas : 39})
// console.log(result6);
// console.log(ogrenciler)

//?POP

// let result7 = sayilar.pop()// son elemanı siler
// console.log(result7) // sildiğini yazdırır 
// console.log(sayilar)


// let result8 = isimler.pop()// son elemanı siler
// console.log(result8)// sildiğini yazdırır 
// console.log(isimler)

// let result9 = ogrenciler.pop()
// console.log(result9)
// console.log(ogrenciler)

//? PUSH
// let result10= sayilar.push(2222) // sona eleman ekler
// console.log(result10) // dizinin eklendikten sonraki eleman sayısını gösterir
// console.log(sayilar) // son hali gösterir


// let result11 = isimler.push("Betül")
// console.log(result11)
// console.log(isimler)


// let result12= ogrenciler.push({id : 118, isim : "AZRA", yas : 11})// sona ekledi
// console.log(result12) // dizinin son eleman sayısını yazdırdı
// console.log(ogrenciler) // ekendikten sonra yeni array yazıldı

//?SLICE
// let result13 = sayilar.slice(1,5) // 1.index ile 5. index kadar olan kısmını al 5. index dahil değil
// console.log(result13) // istenen dilimi aldı [50,2,41,41]
// console.log(sayilar) // orjinal array değişmeden yazıldı


// let result14= isimler.slice(1,3)// 
// console.log(result14) //["ali", "hasan"]
// console.log(isimler)


//?SPLICE
// let result15 = sayilar.splice(2,4)//2. indexden başlayarak 4 eleman atar
// console.log(result15) // sildiklerini yazdırır
// console.log(sayilar) // yeni oluşan arrayi yazdırır



// let result16 = isimler.splice(2)// 2.indexden başla sonuna kadar sil
// console.log(result16)//sildiklerini yazdırır
// console.log(isimler)


// let result17 = ogrenciler.splice(2,5)
// console.log(result17)//sildiklerini yazdırır
// console.log(ogrenciler)



// let result18= sayilar.splice(3,0,100,200) //3. indexe git birşey silme 100 ve 200 elemmanlarını ekle
// console.log(result18) // birşey silmediği için boş arry yazdırır
// console.log(sayilar) //[1, 50, 2, 100, 200, 41, 41, 84, 8, 35, 3]



// let result19 = isimler.splice(2, "ali", "mehmet","aliye")
// console.log(result19) // hasan ve ayseyi çıkardı
// console.log(isimler) //['sezer', 'ali', 'mehmet', 'aliye', 'hasan', 'ayse'] yeni bu oluştu



//?FIND
// let result20= ogrenciler.find((item)=> console.log(item))//ogrenciler arryinin içindeki herbir itemi yani elemanı yazdırdı

// let result21 = ogrenciler.find((item) => item.id == 15)
// console.log(result21);
// console.log(ogrenciler);


//?fındIndex
// let result21= ogrenciler.findIndex((kisi)=> kisi.id==92)
// console.log(result21); // id si 92 olanın index numarasını buldu ve index numarasını yazdırdı
// console.log(ogrenciler);


//? Every

// let result22 = sayilar.every((item)=>item <85)
// console.log(result22);// her eleman 85 ten küçük ise true yzdırır

// let result23 = sayilar.every((item)=>item < 84)
// console.log(result23);// en az bir eleman 84 ten büyük veya eşit  ise false yzdırır

//? some

// let result23 = sayilar.some((item)=> item < 10)
// console.log(result23); //true

// let result24 = sayilar.some((item)=> item > 1000)
// console.log(result24); //false


//? INCLUDES 

// let result25 = isimler. includes("ali")
// console.log(result25); //true keysensitive olduğunu unutmayalım


// let result26 = isimler. includes("Ali")
// console.log(result26); //false keysensitive olduğunu unutmayalım


//? forEach

// let result27 = sayilar.forEach(function(i) {
//     console.log(i*5);
// })
// console.log(sayilar);



//? filter

// let result28 = ogrenciler.filter((item)=>item.id % 2==1)
// console.log(result28); //id si tek olanları listeleyip yazdırdı
// console.log(ogrenciler);


// let result29 = ogrenciler.filter((item)=>item.yas>=30)
// console.log(result29);// yaşı 30 a eşit ve 30dan büyük olanları yazdırdı



// let result30 = ogrenciler.find((item)=>item.yas>=30)
// console.log(result30);// yaşı 30 a eşit ve 30dan büyük olan ilk kişiyi yazdırdı

// let result30 = sayilar.filter((sayi)=> sayi>=20 && sayi<=30)
// console.log(result30); // bos array döndü çunku sartı sağlayan depğer yok


//?concat

// let result31= sayilar.concat(isimler)
// console.log(result31);//iki aray i birleştirip tek array yaptı

// let result32 = isimler.concat(sayilar, "serhat")
// console.log(result32);


//?MAP

// let result33 = sayilar.map((item)=> item*3)
// console.log(result33); //herbir elemanı 3 ile çarpıp yeni array oluşturdu
// console.log(sayilar);// orjinal array duruyor




















