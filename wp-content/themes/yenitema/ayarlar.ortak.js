/*
	Bu dosyanin icerigi, oyun ile ilgili genel (ortak) ayarlarin yapilmasi icindir.
	Not : Smiley eklerken virgullere ve karakter icerigine dikkat ediniz, mesela ":)" bu
			icerikle "<:)" bu icerik benzer oldugu icin, once karakter uzunlugu fazla olani yukari aliniz,
			aksi taktirde, bu ozellik, istemediginiz sekilde calisacaktir.
	Not : Fonksiyon veya degisken isimlerini degistirirseniz, oyun acilmayacaktir.
	Not : "BURADAN SONRAKI KISIMLARLA OYNAMAYINIZ..." ibaresinden sonraki kisimlarla oynamayiniz :)
	Not : NE YAPTIGINIZI BILMIYORSANIZ BU DOSYA ILE OYNAMAYINIZ.
*/

// Oyun sunucu adresi
window.AyarIP = "toprakokey.oyuncast.com";

// Sozlesme Adresleri (ust site)
window.AyarSozlesmeKullanimSartiUrl = "https://www.toprakokey.net/kullanici.html";
window.AyarSozlesmeGizlilikPolitikaUrl = "https://www.toprakokey.net/gizlilik.html";

// Server a baglanilirken, SSL kullanilacak mi? (Ne yaptýðýnýzý bilmiyorsanýz burayla oynamayýnýz.)
window.AyarSSLAcik = true;

// Kulanýcý için oto ping (ping gösterimi) açýlsýn mý.
window.AyarOtoPing = true;

// Buradaki deðer, OtoPing ayarý açýk ise; 20~60 sn arasý olabilir.
window.AyarOtoPingSure = 20;

// Oyun ile baglanti kurulamazsa, yeniden deneme panelinin cikacagi sure.
window.AyarOyunBaglantiSuresiMax = 15;

// sag/sol | yukari/asagi islevlerinde, scroll ne kadar kaydirilacak...
window.AyarTabKaydirSayi = 200;

// bu ayar acik olursa; odadaki giris cikilar gizlense bile adminler gorecektir.
window.AyarYetkiliGirCikGor = true;

window.AyarKayitFormIsim = false;
window.AyarKayitFormSehir = false;
window.AyarKayitFormDogum = false;
window.AyarKayitFormDogumYil = false;

// admin eklemelerinde kendisinde olmayan yetkiler DE gorunsun mu.
window.AyarAdminExtraYetkiGoster = false;

// Bu ayar sifirdan buyuk bir deger olursa, admin log kismindaki loglar, bu sayiya ulastiktan sonra,
// en bastan silinmeye baslayacak (yani belirtilen sayi kadar log tutulacak o anki nesne icerisinde)
window.AyarAdminMaxLogSatiri = 1000;

// admin panelde, arama kriterlerini, arama kritersiz bir listeleme yapildiginda temizleme ayari.
window.AyarAdminKriterTemizle = true;

// Masa icindeki geri sayim ic cemberinin renkleri.
window.AyarOkeyGeriSayimNormal = '#122b3a';
window.AyarOkeyGeriSayimSonCeyrek = '#046ba8'; // #0d4769

// Ozel mesajlarda, nickin yaninda saat gosterilmesi icin.
window.AyarOzelMesajSaatGoster = true;
// Masa mesajlarinda, nickin yaninda saat gosterilmesi icin.
window.AyarMasaMesajSaatGoster = true;
// Lobi mesajlarinda, nickin yaninda saat gosterilmesi icin.
window.AyarLobiMesajSaatGoster = false;

// Masalarda alinan puanlarin, lobide gosterimi yapilsin mi.
window.AyarAlinanPuanlarLobiGoster = true;

// Lobide, nick listesini gizleme/gosterme butonu aktif edilsin mi ?
window.AyarLobiNickleriGizleButonu = true;

// Kullanýcý engel listeleri; lobide de aktif olsun mu...
window.AyarEngelLobiAktif = true;

// Kullanýcý engel listeleri; lobide yetkililer için de geçerli olsun mu...
// Yani su durumda, eger bu ayar true yapilirsa, kullanicilar, yetkilileri engellediklerinde, lobide
// yetkililerin de mesajlarini goremeyecekler...
window.AyarEngelLobiYetkiliEngellensin = false;

// Eðer kullanýcý ayarlarýnda açýk ise, radyo otomatik çalma, uygulama için de aktif edilsin mi.
window.AyarUygulamadaOtoRadyoAktif = true;

// Istakanin ust sirasinda ortali sekilde yazi gorulmesi icin bu degiskeni kullanabilirsiniz.
// Bu ozelligi kullanmak istemiyorsaniz, basit sekilde, "" degerine esitleyebilirsiniz.
window.AyarIstakaYaziStr = "";

// PC modunda ekran genisliginin yuksekliginden cok daha fazla oldugu durumda yapilacak
// hesaplar icin gecislik/yukseklik minimum degeri. (WideScreen)
window.AyarWideEkranOrani = 2.28;

// WideScreen modu icin, okey taslarindan cikartim katsayi pixel carpani.
window.AyarWideEkranOkeyTasPx = 20;

// Otomatik font secimi icin, minimum height degerleri.
window.AyarFontOtoKMin = 450;
window.AyarFontOtoOMin = 650;

// Kucuk font kullanimlari icin, hesap katsayilari
window.AyarFontKMinPx = 9;
window.AyarFontKMaxPx = 32;
window.AyarFontKMinWidth = 240;
window.AyarFontKMaxWidth = 7680;

// Orta font kullanimlari icin, hesap katsayilari
window.AyarFontOMinPx = 11;
window.AyarFontOMaxPx = 40;
window.AyarFontOMinWidth = 240;
window.AyarFontOMaxWidth = 7680;

// Buyuk font kullanimlari icin, hesap katsayilari
window.AyarFontBMinPx = 14;
window.AyarFontBMaxPx = 60;
window.AyarFontBMinWidth = 240;
window.AyarFontBMaxWidth = 7680;

// Hosgeldiniz yazisi fontu icin, hesap katsayilari
window.AyarFontHGMinPx = 8;
window.AyarFontHGMaxPx = 32;
window.AyarFontHGMinWidth = 240;
window.AyarFontHGMaxWidth = 7680;

// Yazi alanlarindaki smileyler icin, 16 24 hesap katsayilari
window.AyarIconSmileyYaziWdCarpan = 0.05;
window.AyarIconSmileyYaziHgCarpan = 0.05;
window.AyarIconSmileyYaziMinPx = 20;
window.AyarIconSmileyYaziMaxPx = 56;

// Masa listesi avatar iconlari icin, hesap katsayilari
window.AyarIconMLWdCarpan = 0.04;
window.AyarIconMLHgCarpan = 0.04;
window.AyarIconMLMinPx = 12;
window.AyarIconMLMaxPx = 24;

// Nick listesi avatar iconlari icin, hesap katsayilari
window.AyarIconNLWdCarpan = 0.04;
window.AyarIconNLHgCarpan = 0.04;
window.AyarIconNLMinPx = 12;
window.AyarIconNLMaxPx = 30;

// Kucuk icon kullanimlari icin, hesap katsayilari
window.AyarIconKWdCarpan = 0.05;
window.AyarIconKHgCarpan = 0.05;
window.AyarIconKMinPx = 14;
window.AyarIconKMaxPx = 32;

// Orta icon kullanimlari icin, hesap katsayilari
window.AyarIconOWdCarpan = 0.06;
window.AyarIconOHgCarpan = 0.06;
window.AyarIconOMinPx = 24;
window.AyarIconOMaxPx = 48;

// Buyuk icon kullanimlari icin, hesap katsayilari
window.AyarIconBWdCarpan = 0.07;
window.AyarIconBHgCarpan = 0.07;
window.AyarIconBMinPx = 32;
window.AyarIconBMaxPx = 64;

// Masa icerisindeki cerceveli nick kutusu (yatay) icin, hesap katsayilari
window.AyarMasaNickYatayWdCarpan = 0.2;
window.AyarMasaNickYatayHgCarpan = 0.2;
window.AyarMasaNickYatayMin = 120;
window.AyarMasaNickYatayMax = 250;

// Masa icerisindeki cerceveli nick kutusu (dikey) icin, hesap katsayilari
window.AyarMasaNickDikeyWdCarpan = 0.1;
window.AyarMasaNickDikeyHgCarpan = 0.3;
window.AyarMasaNickDikeyMin = 90;
window.AyarMasaNickDikeyMax = 250;

// Lobi Masa Listesindeki masalarin yukseklik hesabi icin, hesap katsayilari
window.AyarMasaListeMasaTekilHgMinPx = 140;
window.AyarMasaListeMasaTekilHgMaxPx = 350;
window.AyarMasaListeMasaTekilHgMinWidth = 240;
window.AyarMasaListeMasaTekilHgMaxWidth = 7680;

// Lobi avatar resmi icin, hesap katsayilari
window.AyarLobiAvatarPx = 30;
window.AyarLobiAvatarEkWd = 0.02;
window.AyarLobiAvatarEkHg = 0;

// Okey taslari icin, hesap katsayilari
// Not : Istaka, bu tas boyutlarina gore boyutlanir.
window.AyarOkeyTasWdCarpan = 0.048; // Xvw * Y => 8vw * 0.6 => 100vw * 0.08 * 0.6 => 100vw * 0.048
window.AyarOkeyTasHgCarpan = 0.032; // Xvh * Y => 8vh * 0.4 => 100vh * 0.08 * 0.4 => 100vh * 0.032
window.AyarOkeyTasWHOrani = 1.375; // Taþlarýn (Height / Width) oraný...
window.AyarOkeyTasMinW = 20;
window.AyarOkeyTasMaxW = 64;

// Acilan El Dialogundaki Okey taslari icin, hesap katsayilari
// Not : Acilan El Dialogundaki Istaka, bu tas boyutlarina gore boyutlanir.
window.AyarOkeyAcilanElTasWdCarpan = 0.042; // Xvw * Y => 6vw * 0.7 => 100vw * 0.06 * 0.7 => 100vw * 0.042
window.AyarOkeyAcilanElTasHgCarpan = 0.018; // Xvh * Y => 6vh * 0.3 => 100vh * 0.06 * 0.3 => 100vh * 0.018
window.AyarOkeyAcilanElTasWHOrani = 1.375; // Taþlarýn (Height / Width) oraný...
window.AyarOkeyAcilanElTasMinW = 15;
window.AyarOkeyAcilanElTasMaxW = 40;

// Mobil modda butonlarin yanýnda cikan oklarin genisligi (yanlarinda cikan nesneler, buna gore konumlandirilacaktir)
window.AyarMasaMobilOkYonuUzunlugu = 8;

// Uygulama Modunda Ekran Sabitleme Ayari;
// 0: Hem Yan Hem Duz
// 1: Sadece Yan
// 2: Sadece Duz
window.AyarUygulamaEkranSabitle = 0;

// Uygulama guncelleme icin kullanilacak versiyonlandirma. Burda yazilan integer degisken, uygulama ile birebir ayni
// versiyon olmalidir. uygulama ici guncellemeyi pasif kilmak icin bu ayari 0 (sifir) yapabilirsiniz.
window.AyarUygulamaVersiyonu = 0;

// Lobide Hoþgeldiniz mesajlarýnýn listesi. Not, her bir eleman, nick parametreli bir fonksiyon olmak zorundadýr, yoksa hata oluþacaktýr.
window.AyarHazirMsjLobiListe = [
	"Merhaba, hoþgeldin.",
	"Merhaba, iyi oyunlar dilerim.",
	"Ortama merhaba dedik mi?",
	"Hoþbulduk, iyi oyunlar.",
	"Þeytanýnýz bol olsun. ",
	"Masamýza lütfen 1 oyuncu",
	"Masamýza Lütfen 2 oyuncu",
	"Masamýza Lütfen 4. oyuncu",
	"Herkese benden çay Þakir'e Yok.",
	"Cumanýz mübarek olsun arkadaþlar.",
	"Bayramýnýz mübarek olsun arkadaþlar.",
	"Yancý okeyin 14 numaralý taþýdýr.",
	"Kahvaltýdan sonra hemen döneceðim.",
	"Günaydýn arkadaþlar.",
	"Gününüzün iyi geçmesi dileði ile...",
	"Biraz iþlerim var, bitirip hemen döneceðim.",
	"Ýyi oynadýðýmý söylemiþtim sizlere, inanmadýnýz.",
	"Yenilenlerin ellerini görelim :)",
	"Hayýrlý haftalar.",
	"Hayýrlý hafta sonlarý dilerim.",
	"Kazananlar hiç hata yapmayanlar deðil, pes etmeyenlerdir.",
	"Rüzgarýn nasýl estiði fark etmez. fark yaratan, kanatlarýnýzý nasýl açtýðýnýzdýr.",
	"Ve diyeceðim o ki; AÞK güzel þey... Sabrýn ve nasibin olduðu sürece...",
	"Öyle birisi var ki ilk görüþte deðil her görüþte AÞIK oluyorum."
];

// Lobide Nicke özel Hoþgeldiniz mesajlarýnýn listesi. Not, her bir eleman, nick parametreli bir fonksiyon olmak zorundadýr, yoksa hata oluþacaktýr.
window.AyarHazirMsjLobiNickListe = [
	function(gelenNick){ return "HoÞGeLDin " + gelenNick},
	function(gelenNick){ return "ALeyküm SeLam " + gelenNick + ", HoÞGeLDin."},
	function(gelenNick){ return "Aleyküm Selam " + gelenNick},
	function(gelenNick){ return "Hoþgeldin " + gelenNick + ", keyifli oyunlar dilerim."},
	function(gelenNick){ return "Hoþgeldin " + gelenNick + ", iyi oyunlar."},
	function(gelenNick){ return gelenNick + " Hoþgeldin, iyi oyunlar."},
	function(gelenNick){ return gelenNick + " hadi kumda oyna :)"},
	function(gelenNick){ return "Geçmiþ olsun " + gelenNick},
	function(gelenNick){ return gelenNick + " Yenilen pehlivan okeye doymazmýþ."},
	function(gelenNick){ return gelenNick + " Sizin ile oyun oynamak gerçekten keyif vericiydi..."},
	function(gelenNick){ return gelenNick + " Bizim masaya gelir misin?"},
	function(gelenNick){ return gelenNick + " 4. lazým gelmek istersen buyur."},
	function(gelenNick){ return gelenNick + ", sana bizden niðde gazozu :)"},
	function(gelenNick){ return gelenNick + " skor tabelasý yine beni yazýyor"},
	function(gelenNick){ return gelenNick + " zafer pek bir þey öðretmez, yenilgi çok þey öðretir."},
	function(gelenNick){ return gelenNick + " onurlu bir yenilgi, yüz kýzartýcý bir galibiyetten daha iyidir."},
	function(gelenNick){ return gelenNick + " Konuþmak bir ihtiyaç olabilir; ama susmak bir sanattýr."},
	function(gelenNick){ return gelenNick + " Hedefi olmayan bir gemiye hiç kimse yardým edemez."},
	function(gelenNick){ return gelenNick + " Tesadüf bir baþlangýçtýr. Finali sen oynarsýn, perdeyi kader kapatýr."},
	function(gelenNick){ return gelenNick + " Zafer Sabrýn çocuðudur."},
	function(gelenNick){ return gelenNick + " toprak gibi sessiz olduðum an bil ki; þimþek gibi gökte gürlüyor feryadým."}

];

// Masada Hoþgeldiniz mesajlarýnýn listesi. Not, her bir eleman, nick parametreli bir fonksiyon olmak zorundadýr, yoksa hata oluþacaktýr.
window.AyarHazirMsjMasaListe = [
	"Masaya hoþ geldin.",
	"Merhaba elin nasýl ?",
	"Lütfen biraz daha seri oynayalým!",
	"Seri lütfen!",
	"Tebrik ederim!",
	"Oyun için teþekkürler.",
	"Ticari bekleme yapmaa!",
	"Selam bol þanslar.",
	"Selam oturduðum konum müsait mi?",
	"okey boþta saðlam taþla!",
	"Kumarda kaybeden aþkda kazanýrmýs!"
];

// Masada Hoþgeldiniz mesajlarýnýn listesi. Not, her bir eleman, nick parametreli bir fonksiyon olmak zorundadýr, yoksa hata oluþacaktýr.
window.AyarHazirMsjMasaNickListe = [
	function(gelenNick){ return "Hoþgeldin " + gelenNick },
	function(gelenNick){ return gelenNick + " masaya hoþ geldin." },
	function(gelenNick){ return gelenNick + " elin nasýl ?" },
	function(gelenNick){ return "Lütfen biraz daha seri oynayalým " + gelenNick + "!" },
	function(gelenNick){ return gelenNick + " seri lütfen!" },
	function(gelenNick){ return gelenNick + " Tebrik ederim!" },
	function(gelenNick){ return gelenNick + " oyun için teþekkürler." },
	function(gelenNick){ return gelenNick + "bekleme yapmazsan sevinirim!" },
	function(gelenNick){ return gelenNick+" bol þanslar." },
	function(gelenNick){ return gelenNick + " okey boþta saðlam taþla!" },
	function(gelenNick){ return gelenNick + " Kumarda kaybeden aþkda kazanýrmýs!" }
];

// Oda Lobisine ozel logo tanimlari.
window.AyarOdaLogoListe = [
	["Yýlbaþý", "_odalogo/yilbasi.png"],
	["Bayrak2", "_odalogo/turkbayrak.png"],
	["Bayrak", "_odalogo/bayraks.gif"],
	["Sevgililer Günü", "_odalogo/sevgililergunu.png"]
];

// Ýþlenecek ismarlama listesi.
// UYARI : 25 adet ismarlama resmi tanimlanmalidir. Daha az veya fazla olursa, istenmeyen sonuclar dogurabilir.
// [No, Isim, IsmarlaStr, Resim]
window.AyarIsmarlaDef = "res/ismarla.png";
window.AyarIsmarlaListe = [
	[1,  "Çay", "ýsmarladý. Afiyet olsun.(cay)", "res/_ismarla/cay.gif"],
	[2,  "Kahve", "ýsmarladý. Afiyet olsun.(turkkahvesi)", "res/_ismarla/kahve.webp"],
	[3,  "Pasta", "ýsmarladý. Afiyet olsun.", "res/_ismarla/pastta.gif"],
	[4,  "Elma", "ýsmarladý. Afiyet olsun.", "res/_ismarla/elma.webp"],
	[5,  "Bira", "ýsmarladý. Ýyi Sallanmalar.", "res/_ismarla/biraa.gif"],
	[6,  "Nazar", "Boncuðu armaðan ediyor.(nazar112)", "res/_ismarla/nazarlik.gif"],
	[7,  "Þarký", "Armaðan ediyor. (foraa) Ýyi dinlemeler.(vermuzigi)", "res/_ismarla/sarkiarmagan.gif"],
	[8,  "Portakal Suyu", "ýsmarladý. Afiyet olsun.", "res/_ismarla/portakalsuyu.gif"],
	[9,  "Çilek", "ýsmarladý. Afiyet olsun.", "res/_ismarla/cilek.webp"],
	[10, "Dondurma", "ýsmarladý. Afiyet olsun.", "res/_ismarla/dondurma.webp"],
	[11, "Sandviç", "ýsmarladý. Afiyet olsun.", "res/_ismarla/sandvic.gif"],
	[11, "Hamburger", "ýsmarladý. Afiyet olsun.", "res/_ismarla/hamburger.gif"],
	[13, "Koka Kola", "ýsmarladý. Afiyet olsun.", "res/_ismarla/kolaa.gif"],
	[14, "Simit", "ýsmarladý. Afiyet olsun.", "res/_ismarla/simit.png"],
	[15, "Pizza", "ýsmarladý. Afiyet olsun.", "res/_ismarla/pizza.webp"],
	[16, "Limonata", "ýsmarladý. Afiyet olsun.", "res/_ismarla/limonata.gif"],
	[17, "Baklava", "ýsmarladý. Afiyet olsun.", "res/_ismarla/baklava.png"],
	[18, "Taxi", "Gönderiyor,(cakmakyak) Hemen Atlayýn Gelin Geç Kalma :D.", "res/_ismarla/sizetaxigonderdi.gif"],
	[19, "Kek", "ýsmarladý. Afiyet olsun.", "res/_ismarla/kek.png"],
	[20, "Çiçek", "Çeþitleri hediye ediyor, Hadi iyisin bütün çiçekler var :).", "res/_ismarla/butuncicek.gif"],
	[21, "GüL", "Demetini yolluyor, Ooo diyebilir miyiz (asik) .", "res/_ismarla/guldemeti.gif"],
	[22, "Kalp", "Gönderiyor, Gel Sarýlayým Sana (kucak) (asik) .", "res/_ismarla/kalp.gif"],
	[23, "Sevgi", "Pýtýrcýklarýný hissettiriyor, (kucak) (asik).", "res/_ismarla/seniseviyorum.gif"],
	[24, "Tek Taþ Yüzük", "Hediye ediyor, Lütfen kabul edin :).", "res/_ismarla/tektas.gif"],
	[25, "Patlamýþ Mýsýr", "Ismarladý. Afiyet olsun.","res/_ismarla/misir.gif"]
];

// Ýþlenecek smiley listesi.
window.AyarSmileyDef = "res/smiley.png";
window.AyarSmileyListe = [
	[":)","res/skypex/smile.webp"],
	[":D","res/skypex/laugh.webp"],
	[";)","res/skypex/wink.webp"],
	[":P","res/skypex/tongueout.webp"],
	["(bye)","res/skypex/hi.webp"],
	[":i(","res/skypex/cry.webp"],
	[":(","res/skypex/sad.webp"],
	[":o","res/skypex/surprised.webp"],
	["(utanma)","res/skypex/blush.webp"],
	["(hayal)","res/skypex/dream.webp"],
	["(cene)","res/skypex/ttm.webp"],
	["(uyku)","res/skypex/tired.webp"],
	["(hasta)","res/skypex/ill.webp"],
	["(selfie)","res/skypex/selfie.webp"],
	[":*","res/skypex/kiss.webp"],
	["kissme","res/skypex/kiss2.webp"],
	[":S","res/skypex/worry.webp"],
//	["(cool)","res/skypex/cool.webp"],
	["(n)","res/skypex/shake.webp"],
	["(y)","res/skypex/nod.webp"],
	[":-)","res/skypex/wonder.webp"],
	["(kahkaha)","res/skypex/cwl.webp"],
	["(agzibagli)","res/skypex/lipssealed.webp"],
	["(duvara)","res/skypex/headbang.webp"],
	["(tokatt)","res/skypex/tokatt.gif"],
	["(asik)","res/skypex/inlove.webp"],
//	["(seytan)","res/skypex/devil.webp"],
	["(hih)","res/skypex/donttalktome.webp"],
	["(peh)","res/skypex/unamused.webp"],
	["(rock)","res/skypex/rock.webp"],
	["(cakbes)","res/skypex/highfive.webp"],
	["(kufur)","res/skypex/swear.webp"],
//	["(boe)","res/skypex/puke.webp"],
	["(zuha)","res/skypex/rofl.webp"],
	["(boks)","res/skypex/punch.webp"],
	[":L","res/skypex/hungover.webp"],
	["(bezdim)","res/skypex/facepalm.webp"],
	["(deli)","res/skypex/fubar.webp"],
	["(cakal)","res/skypex/eg.webp"],
	["(capkin)","res/skypex/nerdy.webp"],
	["(sarhos)","res/skypex/drunk.webp"],
	["(sigara2)","res/skypex/sigara2.webp"],
	["(m)","res/skypex/headphones.webp"],
	["(emoce)","res/skypex/emo.webp"],
	["(slsl)","res/skypex/clap2.webp"],
	["(ruj)","res/skypex/ruj.webp"],
	["(haydut)","res/skypex/haydut.gif"],
	["(xixix)","res/skypex/xixix.gif"],
	["(yilbasio)","res/skypex/yilbasio.gif"],
	["(haakio)","res/skypex/haakio.gif"],
//	["(aaaa)","res/skypex/s25.webp"],
	["(oggg)","res/skypex/oggg.png"],
	["(duyuru)","res/skypex/duyuru.webp"],
	["(dil)","res/skypex/dil.webp"],
	["(mcx)","res/skypex/s4.webp"],
	["(ummahs)","res/skypex/zummah.webp"],
	["(mucxs)","res/skypex/newv1.webp"],
	["(opcuks)","res/skypex/opcuks.webp"],
	["(ulen)","res/skypex/ulen.webp"],
	["(hoho)","res/skypex/hoho.webp"],
	["(s33)","res/skypex/s33.webp"],
	["(umu)","res/skypex/umu.webp"],
	["(sallan)","res/skypex/sallan.webp"],
	["(bicakla)","res/skypex/bicakla.webp"],
	["(tava)","res/skypex/tava.webp"],
	["(sopala)","res/skypex/sopala.webp"],
	["(tekmee)","res/skypex/tekmee.webp"],
	["(ucur)","res/skypex/ucur.gif"],
	["(supurr)","res/skypex/zsupurr.webp"],
//	["(no)","res/skypex/no.webp"],
	["(star)","res/skypex/star.webp"],
	["(kopecik)","res/skypex/kopecik.gif"],
	["(kedi)","res/skypex/cat.webp"],
	["(pen)","res/skypex/penguin.webp"],
	["(kiss)","res/skypex/penguinkiss.webp"],
	["(haha)","res/skypex/monkeygiggle.webp"],
	["(maymun)","res/skypex/monkey.webp"],
	["(maymus)","res/skypex/maymus.gif"],
	["(duymaa)","res/skypex/duyma.gif"],
	["(gormee)","res/skypex/gorme.gif"],
	["(bilmee)","res/skypex/bilme.gif"],
	["(sampanya)","res/skypex/champagne.webp"],
	["(bira)","res/skypex/beer.webp"],
	["(serefe)","res/skypex/wserefee.webp"],
	["(kahve)","res/skypex/coffee.webp"],
	["(cay)","res/skypex/cay.webp"],
//	["(kahve2)","res/skypex/kahve2.webp"],
	["(turkkahvesi)","res/skypex/wturkkahvesi.webp"],
	["(pasta)","res/skypex/cake.webp"],
	["(opucuk)","res/skypex/lips.webp"],
	["<3","res/skypex/heart.webp"],
	["(kalps)","res/skypex/kalps.webp"],
	["(kalpyagmuru)","res/skypex/kalpyagmuru.gif"],
	["(kirik)","res/skypex/brokenheart.webp"],
	["(agliyorr)","res/skypex/agliyorr.webp"],
	["(yuzuk)","res/skypex/ring.webp"],
	["(erkek)","res/skypex/erkek.webp"],
	["(kiz)","res/skypex/kiz.webp"],
	["(kucak)","res/skypex/hug.webp"],
	["(snowi)","res/skypex/snowi.gif"],
	["(yuruu)","res/skypex/yuruu.webp"],
	["(kac)","res/skypex/gottarun.webp"],
	["(s)","res/skypex/skipping.webp"],
	["(cantali)","res/skypex/cantali.webp"],
	["(yoga)","res/skypex/yoga.webp"],
	["(teytey)","res/skypex/bhangra.webp"],
//	["(dans)","res/skypex/dance.webp"],
	["(kopkop)","res/skypex/sturridge15.webp"],
	["(tey2)","res/skypex/tey2.webp"],
	["(disco)","res/skypex/discodancer.webp"],
	["(horon1)","res/skypex/s92.webp"],
	["(kemeniko)","res/skypex/kemeniko.gif"],
	["(hopaa)","res/skypex/hopaa.gif"],
//	["(hausakha)","res/skypex/hausakha.gif"],
	["(zarr)","res/skypex/zarr.gif"],
	["(horon2)","res/skypex/horon3.webp"],
//	["(oynakiz)","res/skypex/oynakiz.webp"],
//	["(sallatitret)","res/skypex/sallatitret.webp"],
	["(tinki)","res/skypex/tinki.webp"],
//	["(so2)","res/skypex/so2.webp"],
	["(so3)","res/skypex/so3.webp"],
	["(oynasana)","res/skypex/oynasana.webp"],
	["(hibuu)","res/skypex/hibuu.gif"],
	["(calkalakiz)","res/skypex/calkalakiz.webp"],
	["(s98)","res/skypex/s98.webp"],
	["(ly)","res/skypex/oyna34.webp"],
	["(lys)","res/skypex/rengarenk.webp"],
	["(mendill)","res/skypex/mendill.webp"],
	["(cikiciki)","res/skypex/cikiciki.webp"],
//	["(mvsmm)","res/skypex/havai.webp"],
	["(yandannn)","res/skypex/kumsal.webp"],
	["(maskelikiz)","res/skypex/maskekiz.webp"],
	["(dance1)","res/skypex/dance1.webp"],
	["(dance2)","res/skypex/dance2.webp"],
	["(dance3)","res/skypex/dance3.webp"],
	["(dance5)","res/skypex/dance5.webp"],
	["(dance6)","res/skypex/dance6.webp"],
	["(dance7)","res/skypex/dance7.webp"],
	["(hoba3)","res/skypex/hoba3.webp"],
	["(gops)","res/skypex/gops.webp"],
	["(heyyoo)","res/skypex/heyyoo.webp"],
	["(obbaa)","res/skypex/obbaa.webp"],
	["(askdans1)","res/skypex/askdans1.gif"],
	["(danqe)","res/skypex/danqe.gif"],
	["(weis)","res/skypex/weis.gif"],
	["(foraa)","res/skypex/foraa.gif"],
	["(hoba2)","res/skypex/hoba2.webp"],
	["(dance4)","res/skypex/dancetx.gif"],
	["(hoba1)","res/skypex/hoba1.webp"],
	["(dans1)","res/skypex/xdans2.webp"],
	["(dans2)","res/skypex/dans2.webp"],
	["(dans5)","res/skypex/dans5.webp"],
	["(dans9)","res/skypex/dans9.webp"],
	["(oyna3)","res/skypex/oyna3.webp"],
	["(oyna4)","res/skypex/oyna4.webp"],
	["(hoba0)","res/skypex/hoba0.webp"],
	["(titre1)","res/skypex/titre1.webp"],
	["(titre2)","res/skypex/titre2.webp"],
	["(oyna5)","res/skypex/oyna5.webp"],
	["(oyna6)","res/skypex/oyna6.webp"],
	["(oyna7)","res/skypex/oyna7.webp"],
	["(teklif)","res/skypex/teklif.webp"],
	["(dansaa)","res/skypex/dansk.webp"],
	["(c2)","res/skypex/c2.webp"],
	["(tinii)","res/skypex/tinii.gif"],
	["(tey)","res/skypex/lang.webp"],
	["(mendils)","res/skypex/mendil2.webp"],
//	["(gol)","res/skypex/henderson14.webp"],
//	["(dur)","res/skypex/stop.webp"],
	["(pc)","res/skypex/computerrage.webp"],
	["(guc)","res/skypex/muscle.webp"],
	["(duali)","res/skypex/duali.webp"],
	["(clap)","res/skypex/clap.webp"],
	["(hop)","res/skypex/handsinair.webp"],
//	["(alkis1)","res/skypex/alkis1.webp"],
//	["(s55)","res/skypex/s55.webp"],
	["(alks)","res/skypex/alkis.webp"],
//	["(yes)","res/skypex/yes.webp"],
	["(havai)","res/skypex/havai.gif"],
	["(sans)","res/skypex/goodluck.webp"],
	["(gul1)","res/skypex/gul1.webp"],
	["(gul2)","res/skypex/gul2.webp"],
//	["(gul3)","res/skypex/so1.webp"],
	["(papatyaa)","res/skypex/papatya.gif"],
	["(eyoo)","res/skypex/s58.webp"],
	["(cicek)","res/skypex/flower.webp"],
//	["(kelebek)","res/skypex/kelebek.webp"],
	["(kelebeks)","res/skypex/kelebeks.webp"],
	["(mum)","res/skypex/diya.webp"],
	["(ates)","res/skypex/ates.webp"],
	["(cakmakyak)","res/skypex/cakmakyak.gif"],
//	["(pat)","res/skypex/fireworks.webp"],
	["(soruunlem)","res/skypex/whatsgoingon.webp"],
	["(dur2)","res/skypex/dur2.webp"],
	["(s80)","res/skypex/s80.webp"],
	["(para)","res/skypex/para.webp"],
	["(hashas)","res/skypex/hashas.webp"],
	["(nazar112)","res/skypex/nazar112.webp"],
	["(ahaha)","res/skypex/kahkaha3.webp"],
	["(ahehe)","res/skypex/haha1.webp"],
	["(ahihi)","res/skypex/haha2.webp"],
	["(saklannn)","res/skypex/saklannn.webp"],
	["(gitbasimdan)","res/skypex/gitbasimdan.gif"],
	["(banane)","res/skypex/xbanane.webp"],
	["(taviryap)","res/skypex/taviryap.gif"],
	["(gozz)","res/skypex/ggoz.webp"],
	["(kikiki)","res/skypex/kiki.gif"],
//	["(hih1)","res/skypex/melek.webp"],
	["(hihs)","res/skypex/hih2.gif"],
	["(tinitini)","res/skypex/xtintin.webp"],
	["(vermuzigi)","res/skypex/tvermuzigi.webp"],
	["(gitarist)","res/skypex/gitariko.webp"],
	["(qitarist)","res/skypex/qitariko.webp"],
	["(davul)","res/skypex/davul.webp"],
	["(gitar)","res/skypex/gitar.webp"],
	["(byee)","res/skypex/abyee.webp"],
	["(baiii)","res/skypex/abaii.webp"],
//	["(iyigeceler2)","res/skypex/iyigeceler.webp"],
//	["(iyigeceler)","res/skypex/aig.webp"],
//	["(allahaemanet)","res/skypex/aeo.webp"],
//	["(tr1)","res/skypex/tr1.webp"],
//	["(tr2)","res/skypex/tr2.webp"],
	["(tr3)","res/skypex/tr3.webp"],
//	["(selam)","res/skypex/selam.webp"]
	["(tr3)","res/skypex/tr0.webp"]
];

window.AyarSmileySatirAdet = 10;

// Ozel masa numaralari icin, kose icon listesi
window.AyarMasaNumaraResimListe = [
	["Winner", "_logoext/winner.png"],
	["Altin Kupa", "_logoext/kupa.png"],
	["Star", "_logoext/starx.png"],
	["Ferrari", "_logoext/ferrarix.png"],
	["Bir Numara", "_logoext/1nu.png"],
	["iki Numara", "_logoext/2nu.png"],
	["Uc Numara", "_logoext/3nu.png"],
	["Turkiye Bayragi", "_logoext/turkiyebayragi.png"],
	["Kalp 1", "_logoext/kalp.png"],
	["Kalp 2", "_logoext/kalp2x.png"],
	["Kalp 3", "_logoext/kalp3x.png"],
	["Kalp Bayrak", "_logoext/kalpbayrak.png"],
	["Sonsuzluk 1", "_logoext/sonszluk.png"],
	["Sonsuzluk 2", "_logoext/sonsuzluk2.png"],
	["Dudak izi", "_logoext/dudakizi.png"],
	["Cicek", "_logoext/cicek.png"],
	["Kugu", "_logoext/kugu.png"],
	["Civciv", "_logoext/civciv.png"],
	["Nazar Boncugu", "_logoext/nazarboncugu.png"],
	["Zar", "_logoext/zar.png"],
	["KartaL", "_logoext/kartalx.gif"],
	["iskelet Kral", "_logoext/iskelet.png"],
	["1938", "_logoext/1938.png"],
	["Besiktas", "_logoext/besiktas.png"],
	["Galatasaray", "_logoext/galatasaray.png"],
	["Fenerbahce", "_logoext/fenerbahce.png"],
	["Trabzonspor", "_logoext/trabzonspor.png"],
	["Kartlar", "_logoext/iskambil.png"],
	["Seytan", "_logoext/seytan1.png"],
	["Sevgili", "_logoext/sevgili.png"],
	["Sevilmek", "_logoext/sevilmek.png"],
	["Kalp Goz", "_logoext/kalpgozemoji.png"],
	["Kalp Goz Kedi", "_logoext/kalpgozkedi.png"],
	["Gulen Kalp 1", "_logoext/gulenkalp1.png"],
	["Gulen Kalp 2", "_logoext/gulenkalp2.png"],
	["Melek Kalp 1", "_logoext/melekkalp1.png"],
	["Melek Kalp 2", "_logoext/melekkalp2.png"],
	["Melek Emoji 1", "_logoext/melekemoji1.png"],
	["Melek Emoji 2", "_logoext/melekemoji2.png"],
	["Baris", "_logoext/baris.png"]
];



// Ay Listesi
window.AyarAyListe = [
	"Ocak",
	"Þubat",
	"Mart",
	"Nisan",
	"Mayýs",
	"Haziran",
	"Temmuz",
	"Aðustos",
	"Eylül",
	"Ekim",
	"Kasým",
	"Aralýk"
];

// Formlarda vs. gorunecek il adlari (ek il ekleyebilmeniz icin bu dosyaya konulmustur)
// Not : ilk eleman, default seçim elemaný olacak... (Þehir seçiniz, Þehriniz, vb. gibi)
// Not : Kullanici kaydiniz varsa, listenin su anki haliyle oynamayiniz, listenin sonuna
// 		 ekleme yapiniz. Yoksa, kullanici kayitlarinizda sehir karisikligi yasayabilirsiniz.
window.AyarIlListe = [
	"Þehir Seçiniz",
	"Adana",
	"Adýyaman",
	"Afyonkarahisar",
	"Aðrý",
	"Aksaray",
	"Amasya",
	"Ankara",
	"Antalya",
	"Ardahan",
	"Artvin",
	"Aydýn",
	"Balýkesir",
	"Bartýn",
	"Batman",
	"Bayburt",
	"Bilecik",
	"Bingöl",
	"Bitlis",
	"Bolu",
	"Burdur",
	"Bursa",
	"Çanakkale",
	"Çankýrý",
	"Çorum",
	"Denizli",
	"Diyarbakýr",
	"Düzce",
	"Edirne",
	"Elazýð",
	"Erzincan",
	"Erzurum",
	"Eskiþehir",
	"Gaziantep",
	"Giresun",
	"Gümüþhane",
	"Hakkâri",
	"Hatay",
	"Iðdýr",
	"Isparta",
	"Ýçel (Mersin)",
	"Ýstanbul",
	"Ýzmir",
	"Karabük",
	"Karaman",
	"Kars",
	"Kastamonu",
	"Kayseri",
	"Kýrýkkale",
	"Kýrklareli",
	"Kýrþehir",
	"Kilis",
	"Kocaeli",
	"Konya",
	"Kütahya",
	"Malatya",
	"Manisa",
	"Kahramanmaraþ",
	"Mardin",
	"Muðla",
	"Muþ",
	"Nevþehir",
	"Niðde",
	"Ordu",
	"Osmaniye",
	"Rize",
	"Sakarya",
	"Samsun",
	"Siirt",
	"Sinop",
	"Sivas",
	"Þýrnak",
	"Tekirdað",
	"Tokat",
	"Trabzon",
	"Tunceli",
	"Þanlýurfa",
	"Uþak",
	"Van",
	"Yalova",
	"Yozgat",
	"Zonguldak"
];

// Formlarda vs. gorunecek ulke adlari (ek ulke ekleyebilmeniz icin bu dosyaya konulmustur)
// Not : ilk eleman, "kesinlikle" Türkiye olmak zorundadýr, yoksa kayýt formlarýnda sýkýntý yaþarsýnýz.
// Not : Kullanici kaydiniz varsa, listenin su anki haliyle oynamayiniz, listenin sonuna
// 		 ekleme yapiniz. Yoksa, kullanici kayitlarinizda ükle karisikligi yasayabilirsiniz.
window.AyarUlkeListe = [
	"Türkiye",
	"ABD Virgin Adalarý",
	"Afganistan",
	"Aland Adalarý",
	"Almanya",
	"Amerika Birleþik Devletleri",
	"Amerika Birleþik Devletleri Küçük Dýþ Adalarý",
	"Amerikan Samoasý",
	"Andora",
	"Angola",
	"Anguilla",
	"Antarktika",
	"Antigua ve Barbuda",
	"Arjantin",
	"Arnavutluk",
	"Aruba",
	"Avrupa Birliði",
	"Avustralya",
	"Avusturya",
	"Azerbaycan",
	"Bahamalar",
	"Bahreyn",
	"Bangladeþ",
	"Barbados",
	"Batý Sahara",
	"Belize",
	"Belçika",
	"Benin",
	"Bermuda",
	"Beyaz Rusya",
	"Bhutan",
	"Bilinmeyen veya Geçersiz Bölge",
	"Birleþik Arap Emirlikleri",
	"Birleþik Krallýk",
	"Bolivya",
	"Bosna Hersek",
	"Botsvana",
	"Bouvet Adasý",
	"Brezilya",
	"Brunei",
	"Bulgaristan",
	"Burkina Faso",
	"Burundi",
	"Cape Verde",
	"Cebelitarýk",
	"Cezayir",
	"Christmas Adasý",
	"Cibuti",
	"Cocos Adalarý",
	"Cook Adalarý",
	"Çad",
	"Çek Cumhuriyeti",
	"Çin",
	"Danimarka",
	"Dominik",
	"Dominik Cumhuriyeti",
	"Doðu Timor",
	"Ekvator",
	"Ekvator Ginesi",
	"El Salvador",
	"Endonezya",
	"Eritre",
	"Ermenistan",
	"Estonya",
	"Etiyopya",
	"Falkland Adalarý (Malvinalar)",
	"Faroe Adalarý",
	"Fas",
	"Fiji",
	"Fildiþi Sahilleri",
	"Filipinler",
	"Filistin Bölgesi",
	"Finlandiya",
	"Fransa",
	"Fransýz Guyanasý",
	"Fransýz Güney Bölgeleri",
	"Fransýz Polinezyasý",
	"Gabon",
	"Gambia",
	"Gana",
	"Gine",
	"Gine-Bissau",
	"Granada",
	"Grönland",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guyana",
	"Güney Afrika",
	"Güney Georgia ve Güney Sandwich Adalarý",
	"Güney Kore",
	"Güney Kýbrýs Rum Kesimi",
	"Gürcistan",
	"Haiti",
	"Heard Adasý ve McDonald Adalarý",
	"Hindistan",
	"Hint Okyanusu Ýngiliz Bölgesi",
	"Hollanda",
	"Hollanda Antilleri",
	"Honduras",
	"Hong Kong SAR - Çin",
	"Hýrvatistan",
	"Irak",
	"Ýngiliz Virgin Adalarý",
	"Ýran",
	"Ýrlanda",
	"Ýspanya",
	"Ýsrail",
	"Ýsveç",
	"Ýsviçre",
	"Ýtalya",
	"Ýzlanda",
	"Jamaika",
	"Japonya",
	"Jersey",
	"Kamboçya",
	"Kamerun",
	"Kanada",
	"Karadað",
	"Katar",
	"Kayman Adalarý",
	"Kazakistan",
	"Kenya",
	"Kiribati",
	"Kolombiya",
	"Komorlar",
	"Kongo",
	"Kongo Demokratik Cumhuriyeti",
	"Kosta Rika",
	"Kuveyt",
	"Kuzey Kore",
	"Kuzey Mariana Adalarý",
	"Küba",
	"Kýrgýzistan",
	"Laos",
	"Lesotho",
	"Letonya",
	"Liberya",
	"Libya",
	"Liechtenstein",
	"Litvanya",
	"Lübnan",
	"Lüksemburg",
	"Macaristan",
	"Madagaskar",
	"Makao S.A.R. Çin",
	"Makedonya",
	"Malavi",
	"Maldivler",
	"Malezya",
	"Mali",
	"Malta",
	"Man Adasý",
	"Marshall Adalarý",
	"Martinik",
	"Mauritius",
	"Mayotte",
	"Meksika",
	"Mikronezya Federal Eyaletleri",
	"Moldovya Cumhuriyeti",
	"Monako",
	"Montserrat",
	"Moritanya",
	"Mozambik",
	"Moðolistan",
	"Myanmar",
	"Mýsýr",
	"Namibya",
	"Nauru",
	"Nepal",
	"Nijer",
	"Nijerya",
	"Nikaragua",
	"Niue",
	"Norfolk Adasý",
	"Norveç",
	"Orta Afrika Cumhuriyeti",
	"Özbekistan",
	"Pakistan",
	"Palau",
	"Panama",
	"Papua Yeni Gine",
	"Paraguay",
	"Peru",
	"Pitcairn",
	"Polonya",
	"Portekiz",
	"Porto Riko",
	"Reunion",
	"Romanya",
	"Ruanda",
	"Rusya Federasyonu",
	"Saint Helena",
	"Saint Kitts ve Nevis",
	"Saint Lucia",
	"Saint Pierre ve Miquelon",
	"Saint Vincent ve Grenadinler",
	"Samoa",
	"San Marino",
	"Sao Tome ve Principe",
	"Senegal",
	"Seyþeller",
	"Sierra Leone",
	"Singapur",
	"Slovakya",
	"Slovenya",
	"Solomon Adalarý",
	"Somali",
	"Sri Lanka",
	"Sudan",
	"Surinam",
	"Suriye",
	"Suudi Arabistan",
	"Svalbard ve Jan Mayen",
	"Svaziland",
	"Sýrbistan",
	"Sýrbistan-Karadað",
	"Þili",
	"Tacikistan",
	"Tanzanya",
	"Tayland",
	"Tayvan",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad ve Tobago",
	"Tunus",
	"Turks ve Caicos Adalarý",
	"Tuvalu",
	"Türkmenistan",
	"Uganda",
	"Ukrayna",
	"Umman",
	"Uruguay",
	"Uzak Okyanusya",
	"Ürdün",
	"Vanuatu",
	"Vatikan",
	"Venezuela",
	"Vietnam",
	"Wallis ve Futuna",
	"Yemen",
	"Yeni Kaledonya",
	"Yeni Zelanda",
	"Yunanistan",
	"Zambiya",
	"Zimbabve"
];
/* BURADAN SONRAKI KISIMLARLA OYNAMAYINIZ... */
// yýl giriþi olmadan gün ve ay giriþi istememeliyiz.
if (window.AyarKayitFormDogumYil == false)
	window.AyarKayitFormDogum = false;
window.AyarJSOK = true; // Bu kismi degistirmeyiniz...
