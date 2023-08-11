kullanicilar=JSON.parse(localStorage.getItem("kullanicilar"))

//*Kayit ol butona tikladiginda 
document.querySelector(".kayitol").addEventListener("click",()=>{
    document.querySelector(".giris").style.display="none";
    document.querySelector(".kayitOl").style.display="block"; 
})

//*Kayit bilgilerini girdiginde localStorage kaydetmesini saglar 
document.querySelector(".kayitOlun").addEventListener("click",()=>{
    kullanici=document.querySelector(".kulllanici").value;
    tc=document.querySelector(".tcni").value;
    gizliCevap=document.querySelector(".gizli").value;
    sifre=document.querySelector(".sifre").value;
    sifreT=document.querySelector(".sifret").value;

//!Burda try catch kullandim localStoragede eger olusmamissa olusturmak icin
try {
    let kullanicilar=JSON.parse(localStorage.getItem("kullanicilar"))
    kullanicilar[0];
} catch (error) {
    let kullanicilar = []
    localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar));
}
if(sifre==sifreT){
    let kullanicilar=JSON.parse(localStorage.getItem("kullanicilar"))
    kullanci1={
       tc:tc,
       guvenlikSo:gizliCevap,
       kydolKullanci:kullanici,
       kydolSifre:sifre,
       bakiye:0
   };
   kullanicilar.push(kullanci1);
   
   localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar));
   document.querySelector(".sifreYanlis").style.display="block"; 
   document.querySelector(".sifreYanlis").innerHTML="Kullanici basariyla Olusturulmustur Giris Ekranina Yonlendiriliyorsunuz"


   setTimeout(() => {
    document.querySelector(".giris").style.display="block";
    document.querySelector(".kayitOl").style.display="none"; 
    window.location.reload(false)
   },3000 );
  

//!Burda Sifre Ayni olmadigi zaman hata mesaji verir
}else{
    document.querySelector(".sifreYanlis").style.display="block"; 
   document.querySelector(".sifreYanlis").innerHTML="Sifreniz Birbiriyle Ayni Degildir Tekrar Deneyin"
    document.querySelector(".sifre").value=""
    document.querySelector(".sifret").value=""

setTimeout(() => {
        document.querySelector(".sifreYanlis").style.display="none"; 
      },3000);   
}
})
//*Sifremi Unuttum Butona tikladigimizda
document.querySelector(".sifreUnut").addEventListener("click",()=>{
    document.querySelector(".giris").style.display="none";
    document.querySelector(".sifremUnuttum").style.display="block"; 
})
//*Sifremi yenileme  bilgiler kontrol edilme butonu
document.querySelector(".sifreOnayB").addEventListener("click",()=>{
    let tc1=document.querySelector(".sifreUtc").value;
    let gizliCevap1=document.querySelector(".sifreUnG").value;

   let kullanicilar=JSON.parse(localStorage.getItem("kullanicilar"))
   dogru=true
   kullanicilar.forEach((element,i)=> {
    if(element.tc==tc1 &&element.guvenlikSo==gizliCevap1){
        dogru=false
        sifreIndex=i
        document.querySelector(".sifreBilgi").style.display="none";
        document.querySelector(".sifreYenileme").style.display="block"; 
    }
   });
   if(dogru==true){
    document.querySelector(".sifreOnay").style.display='block'
    document.querySelector(".sifreOnay").innerHTML='Tcnizi ve ya gizli cevabinizi yanlis girdiniz tekrar deneyin'
    
    setTimeout(()=>{
        document.querySelector(".sifreOnay").style.display='none'
        document.querySelector(".sifreUtc").value=''
        document.querySelector(".sifreUnG").value=''

    },2000)
}

})
//*Sifremi yenileme onayladiginda butonu
document.querySelector(".sifreOnayC").addEventListener("click",()=>{
   let kullanicilar=JSON.parse(localStorage.getItem("kullanicilar"))

    let sifre1=document.querySelector(".sifreYe").value;
    let sifreY1=document.querySelector(".sifreYeT").value;
     if(sifre1==sifreY1){
       kullanicilar[sifreIndex].kydolSifre=sifreY1
       localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar)); 
       document.querySelector(".sifreOnay").style.display='block'
       document.querySelector(".sifreOnay").innerHTML='SIFRENIZ YENILENMISTIR GIRIS EKRANINA  YONLENDIRILIYORSUNUZ'
       
       setTimeout(() => {
        document.querySelector(".giris").style.display="block";
        document.querySelector(".sifremUnuttum").style.display="none"; 
        document.querySelector(".sifreOnay").style.display='none'
        window.location.reload(false)

    
       }, 3000);
     }else{
        document.querySelector(".sifreOnay").style.display='block'
        document.querySelector(".sifreOnay").innerHTML='Sifreleriniz ayni degil Tekrar Deneyin'
        
        setTimeout(()=>{
            document.querySelector(".sifreOnay").style.display='none'
            document.querySelector(".sifreYe").value=''
            document.querySelector(".sifreYeT").value=''
    
        },2000)
     }
})
//*Giris Saglandiginda
var indexNumasi=
document.querySelector(".girisYap").addEventListener("click",()=>{
        let kullnc=document.querySelector(".giris1").value;
        let sifre=document.querySelector(".girisS1").value;
        let dogrular=true
        let kullanicilar=JSON.parse(localStorage.getItem("kullanicilar"))
    
    kullanicilar.forEach((element,i) => {

            if(element.kydolKullanci==kullnc&&element.kydolSifre==sifre){
                dogrular=false
                indexNumasi=i
                document.querySelector(".sifreGirisD").style.display="block";
                document.querySelector(".sifreGirisD").innerHTML=`Giris Saglaniyor Hos Geldiniz ${element.kydolKullanci}`
                setTimeout(() => {
                    document.querySelector(".giris").style.display="none";
                    document.querySelector(".anaSayfa").style.display="block"; 
                    document.querySelector(".sifreGirisD").style.display="none";      
                }, 3000);
            } 
        });
        if(dogrular==true){
            document.querySelector(".sifreGirisD").style.display="block";
            document.querySelector(".sifreGirisD").innerHTML=`Yanlis Sifre Tekrar Deneynizi`           
        setTimeout(() => {
            document.querySelector(".sifreGirisD").style.display="none";
            window.location.reload(false)

        }, 2000);
        }
  s= document.querySelector(".bakiyeS").innerHTML=`KULLANICI = ${kullanicilar[indexNumasi].kydolKullanci}--Anlik Bakiyeniz ${kullanicilar[indexNumasi].bakiye} TL`.toUpperCase();

    })
//*Bakiye Yukle alanına gıtme
document.querySelector(".simdiYukle").addEventListener("click",()=>{
    document.querySelector(".anaSayfa").style.display="none";
    document.querySelector(".bakiye").style.display="block"; 
  
})

//*Bakiye Yukle alanı
document.querySelector(".yukle").addEventListener("click",()=>{
    tc=document.querySelector('.tcbakiye').value;
    sifre=document.querySelector('.tcSifre').value;
    bakiye=+document.querySelector('.yeniBky').value;
  dogru=true
    kullanicilar.forEach((element,i) => {
        if(element.tc==tc&&element.kydolSifre==sifre){
            dogru=false
            element.bakiye+=Number(bakiye)
            localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar));

            document.querySelector(".yuklep").style.display="block";            
            document.querySelector(".yuklep").innerHTML='Bakiyeniz basariyla yuklendi Ana sayfa yonlendirilyiorsunuz'
            document.querySelector(".bakiyeS").innerHTML=`KULLANICI = ${kullanicilar[i].kydolKullanci}--Anlik Bakiyeniz ${kullanicilar[i].bakiye} TL`.toUpperCase();


            setTimeout(() => {
                document.querySelector(".anaSayfa").style.display="block";
                document.querySelector(".bakiye").style.display="none"; 
                document.querySelector(".yuklep").style.display="none"; 

            }, 3000);

        }
    });
    if(dogru==true){
        document.querySelector(".yuklep").style.display="block";            
        document.querySelector(".yuklep").innerHTML='Bilgileriniz Yanlis Tekrar Deneyin'


        setTimeout(() => {

            document.querySelector(".yuklep").style.display="none"; 
            document.querySelector('.tcbakiye').value='';
            document.querySelector('.tcSifre').value='';
        }, 2000);
    }
});
//*Mac Tahmin Oyununa giris
document.querySelector(".simdiOyna").addEventListener("click",()=>{
    document.querySelector(".anaSayfa").style.display="none";
    document.querySelector(".bakiyeVeT").style.display="flex"; 
    console.log(kullanicilar[indexNumasi].bakiye)

})
//*Mac Tahmin Oyun yeri
document.querySelector(".optionB").addEventListener("click",()=>{
oynBky=document.querySelector(".oynBky").value;
if(kullanicilar[indexNumasi].bakiye>=oynBky){
    kullanicilar[indexNumasi].bakiye-=Number(oynBky)
    localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar));
    document.querySelector(".oyunYeri").style.display="block";            
    document.querySelector(".oyunYeri").innerHTML='Oyun yerine Yonlendiriliyorsunuz'

    setTimeout(() => {

      document.querySelector(".bakiyeVeT").style.display="none";
      document.querySelector(".takimlar").style.display="block"; 
      document.querySelector(".oyunYeri").style.display="none"; 

//* Random Mac Olusturma ve kazanma kaybetme
      fetch('takimlar.json')
        .then(response => response.json())
        .then(data => {
        takimlar = data;
        randomSayi=Math.floor(Math.random() * takimlar.length)
        randomSayi1=Math.floor(Math.random() * takimlar.length)
        if(randomSayi==randomSayi1){
            randomSayi=Math.floor(Math.random() * takimlar.length)
        }else if(randomSayi!=randomSayi1)
        document.querySelector(".takim1Res").src=takimlar[randomSayi].image
        document.querySelector(".takim1").innerHTML=takimlar[randomSayi].title
        document.querySelector(".takim2Res").src=takimlar[randomSayi1].image
        document.querySelector(".takim2").innerHTML=takimlar[randomSayi1].title
        randomSkor1=Math.floor(Math.random() *3)
        randomSkor2=Math.floor(Math.random() *3)
        oynanPara=document.querySelector(".oynBky").value;
        console.log(randomSkor1,randomSkor2)

        document.querySelector(".takim1Y").innerHTML=`${takimlar[randomSayi].title} YENER`

        document.querySelector(".takim2Y").innerHTML=`${takimlar[randomSayi1].title} YENER`

            document.querySelector(".takim1Y").addEventListener("click",()=>{
            
                if(randomSkor1>randomSkor2){
                    kullanicilar=JSON.parse(localStorage.getItem("kullanicilar"))
                    kullanicilar[indexNumasi].bakiye+=Number(oynBky)*2
                    localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar));
                     
                    document.querySelector(".oyunSonuc").style.display="block"; 
                    document.querySelector(".birDahaO").style.display="block"; 
                    document.querySelector(".bakiyeBir").style.display="block"; 

                    document.querySelector(".oyunSonuc").innerHTML=`Mac sonucu = ${takimlar[randomSayi].title}=${randomSkor1} VS  ${takimlar[randomSayi1].title}=${randomSkor2} <br>
                    Dogru tahmin ettiniz Kazandiginiz Tutar=${oynanPara*2}₺   yeniBakiyeniz = ${kullanicilar[indexNumasi].bakiye}₺ `
                    console.log(oynBky)
                    


                }else if(randomSkor1==randomSkor2){
                    kullanicilar=JSON.parse(localStorage.getItem("kullanicilar"))
                    kullanicilar[indexNumasi].bakiye+=Number(oynBky)
                    localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar));
                    
                    document.querySelector(".oyunSonuc").style.display="block"; 
                    document.querySelector(".birDahaO").style.display="block"; 
                    document.querySelector(".bakiyeBir").style.display="block"; 
                     

                    document.querySelector(".oyunSonuc").innerHTML=`Mac sonucu = ${takimlar[randomSayi].title}=${randomSkor1} VS  ${takimlar[randomSayi1].title}=${randomSkor2} <br>
                    Mac Berabere Bitti O yuzden paraniz Iade edildi   Bakiyeniz = ${kullanicilar[indexNumasi].bakiye}₺ `



                } else{
                    document.querySelector(".oyunSonuc").style.display="block"; 
                    document.querySelector(".birDahaO").style.display="block"; 
                    document.querySelector(".bakiyeBir").style.display="block"; 

                    document.querySelector(".oyunSonuc").innerHTML=`Mac sonucu = ${takimlar[randomSayi].title}=${randomSkor1} VS  ${takimlar[randomSayi1].title}=${randomSkor2} <br>
                    Maalesef Kazamadiniz Kalan Bakiyeniz = ${kullanicilar[indexNumasi].bakiye}₺`

            
                }
                oynBky=0;
            })
            document.querySelector(".takim2Y").addEventListener("click",()=>{
    
                if(randomSkor2>randomSkor1){
                    console.log(oynBky)
                    kullanicilar=JSON.parse(localStorage.getItem("kullanicilar"))
                    kullanicilar[indexNumasi].bakiye+=Number(oynBky)*2
                    localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar));

                    document.querySelector(".oyunSonuc").style.display="block"; 
                    document.querySelector(".birDahaO").style.display="block"; 
                    document.querySelector(".bakiyeBir").style.display="block"; 

                    document.querySelector(".oyunSonuc").innerHTML=`Mac sonucu = ${takimlar[randomSayi].title}=${randomSkor1} VS  ${takimlar[randomSayi1].title}=${randomSkor2} <br>
                    Dogru tahmin ettiniz Kazandiginiz Tutar=${oynanPara*2}₺   yeniBakiyeniz = ${kullanicilar[indexNumasi].bakiye}₺ `
                    console.log(oynBky)


                }else if(randomSkor1==randomSkor2){
                    kullanicilar=JSON.parse(localStorage.getItem("kullanicilar"))
                    kullanicilar[indexNumasi].bakiye+=Number(oynBky)
                    localStorage.setItem("kullanicilar",JSON.stringify(kullanicilar));

                    document.querySelector(".oyunSonuc").style.display="block"; 
                    document.querySelector(".birDahaO").style.display="block"; 
                    document.querySelector(".bakiyeBir").style.display="block"; 

                    document.querySelector(".oyunSonuc").innerHTML=`Mac sonucu = ${takimlar[randomSayi].title}=${randomSkor1} VS  ${takimlar[randomSayi1].title}=${randomSkor2} <br>
                    Mac Berabere Bitti O yuzden paraniz Iade edildi Bakiyeniz = ${kullanicilar[indexNumasi].bakiye}₺ `



                } else{
                    document.querySelector(".oyunSonuc").style.display="block"; 
                    document.querySelector(".birDahaO").style.display="block"; 
                    document.querySelector(".bakiyeBir").style.display="block"; 

                    document.querySelector(".oyunSonuc").innerHTML=`Mac sonucu = ${takimlar[randomSayi].title}=${randomSkor1} VS  ${takimlar[randomSayi1].title}=${randomSkor2} <br>
                    Maalesef Kazamadiniz Kalan Bakiyeniz = ${kullanicilar[indexNumasi].bakiye}₺`


            
                }
                oynBky=0;

            })
            document.querySelector(".birDahaO").addEventListener("click",()=>{

                document.querySelector(".bakiyeVeT").style.display="block";
                document.querySelector(".takimlar").style.display="none"; 
                document.querySelector(".birDahaO").style.display="none"; 
                document.querySelector(".bakiyeBir").style.display="none"; 
                document.querySelector(".oyunSonuc").style.display="none"; 

    
            })
            document.querySelector(".bakiyeBir").addEventListener("click",()=>{
                document.querySelector(".bakiye").style.display="block";
                document.querySelector(".takimlar").style.display="none"; 
                document.querySelector(".birDahaO").style.display="none"; 
                document.querySelector(".bakiyeBir").style.display="none"; 
                document.querySelector(".oyunSonuc").style.display="none"; 
            })


        })
        .catch(error => {
        console.log('Bir hata oluştu:', error);
        });

    }, 2000);


}else{
    document.querySelector(".oyunYeri").style.display="block";            
    document.querySelector(".oyunYeri").innerHTML='Bakiyeniz yetersiz Lutfen Bakiye Yukleyin'


    setTimeout(() => {
        document.querySelector(".oyunYeri").style.display="none"; 
    }, 3000);
}

})





