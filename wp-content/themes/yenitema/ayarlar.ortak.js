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

// Server a baglanilirken, SSL kullanilacak mi? (Ne yapt���n�z� bilmiyorsan�z burayla oynamay�n�z.)
window.AyarSSLAcik = true;

// Kulan�c� i�in oto ping (ping g�sterimi) a��ls�n m�.
window.AyarOtoPing = true;

// Buradaki de�er, OtoPing ayar� a��k ise; 20~60 sn aras� olabilir.
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

// Kullan�c� engel listeleri; lobide de aktif olsun mu...
window.AyarEngelLobiAktif = true;

// Kullan�c� engel listeleri; lobide yetkililer i�in de ge�erli olsun mu...
// Yani su durumda, eger bu ayar true yapilirsa, kullanicilar, yetkilileri engellediklerinde, lobide
// yetkililerin de mesajlarini goremeyecekler...
window.AyarEngelLobiYetkiliEngellensin = false;

// E�er kullan�c� ayarlar�nda a��k ise, radyo otomatik �alma, uygulama i�in de aktif edilsin mi.
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
window.AyarOkeyTasWHOrani = 1.375; // Ta�lar�n (Height / Width) oran�...
window.AyarOkeyTasMinW = 20;
window.AyarOkeyTasMaxW = 64;

// Acilan El Dialogundaki Okey taslari icin, hesap katsayilari
// Not : Acilan El Dialogundaki Istaka, bu tas boyutlarina gore boyutlanir.
window.AyarOkeyAcilanElTasWdCarpan = 0.042; // Xvw * Y => 6vw * 0.7 => 100vw * 0.06 * 0.7 => 100vw * 0.042
window.AyarOkeyAcilanElTasHgCarpan = 0.018; // Xvh * Y => 6vh * 0.3 => 100vh * 0.06 * 0.3 => 100vh * 0.018
window.AyarOkeyAcilanElTasWHOrani = 1.375; // Ta�lar�n (Height / Width) oran�...
window.AyarOkeyAcilanElTasMinW = 15;
window.AyarOkeyAcilanElTasMaxW = 40;

// Batak ile ilgili, bazi boyut ayarlari.
window.AyarBatakKartHWOrani = 1.453125; // (Height / Width)
window.AyarBatakKartOrtaOran = 0.40;
window.AyarBatakKartlarimizAltOran = 0.30;
window.AyarBatakKartGosterOrani = 0.7;

// Mobil modda butonlarin yan�nda cikan oklarin genisligi (yanlarinda cikan nesneler, buna gore konumlandirilacaktir)
window.AyarMasaMobilOkYonuUzunlugu = 8;

// Uygulama Modunda Ekran Sabitleme Ayari;
// 0: Hem Yan Hem Duz
// 1: Sadece Yan
// 2: Sadece Duz
window.AyarUygulamaEkranSabitle = 0;

// Uygulama guncelleme icin kullanilacak versiyonlandirma. Burda yazilan integer degisken, uygulama ile birebir ayni
// versiyon olmalidir. uygulama ici guncellemeyi pasif kilmak icin bu ayari 0 (sifir) yapabilirsiniz.
window.AyarUygulamaVersiyonu = 0;

// Lobide Ho�geldiniz mesajlar�n�n listesi. Not, her bir eleman, nick parametreli bir fonksiyon olmak zorundad�r, yoksa hata olu�acakt�r.
window.AyarHazirMsjLobiListe = [
	"Merhaba, ho�geldin.",
	"Merhaba, iyi oyunlar dilerim.",
	"Ortama merhaba dedik mi?",
	"Ho�bulduk, iyi oyunlar.",
	"�eytan�n�z bol olsun. ",
	"Masam�za l�tfen 1 oyuncu",
	"Masam�za L�tfen 2 oyuncu",
	"Masam�za L�tfen 4. oyuncu",
	"Herkese benden �ay �akir'e Yok.",
	"Cuman�z m�barek olsun arkada�lar.",
	"Bayram�n�z m�barek olsun arkada�lar.",
	"Yanc� okeyin 14 numaral� ta��d�r.",
	"Kahvalt�dan sonra hemen d�nece�im.",
	"G�nayd�n arkada�lar.",
	"G�n�n�z�n iyi ge�mesi dile�i ile...",
	"Biraz i�lerim var, bitirip hemen d�nece�im.",
	"�yi oynad���m� s�ylemi�tim sizlere, inanmad�n�z.",
	"Yenilenlerin ellerini g�relim :)",
	"Hay�rl� haftalar.",
	"Hay�rl� hafta sonlar� dilerim.",
	"Kazananlar hi� hata yapmayanlar de�il, pes etmeyenlerdir.",
	"R�zgar�n nas�l esti�i fark etmez. fark yaratan, kanatlar�n�z� nas�l a�t���n�zd�r.",
	"Ve diyece�im o ki; A�K g�zel �ey... Sabr�n ve nasibin oldu�u s�rece...",
	"�yle birisi var ki ilk g�r��te de�il her g�r��te A�IK oluyorum."
];

// Lobide Nicke �zel Ho�geldiniz mesajlar�n�n listesi. Not, her bir eleman, nick parametreli bir fonksiyon olmak zorundad�r, yoksa hata olu�acakt�r.
window.AyarHazirMsjLobiNickListe = [
	function (gelenNick) { return "Ho�GeLDin " + gelenNick },
	function (gelenNick) { return "ALeyk�m SeLam " + gelenNick + ", Ho�GeLDin." },
	function (gelenNick) { return "Aleyk�m Selam " + gelenNick },
	function (gelenNick) { return "Ho�geldin " + gelenNick + ", keyifli oyunlar dilerim." },
	function (gelenNick) { return "Ho�geldin " + gelenNick + ", iyi oyunlar." },
	function (gelenNick) { return gelenNick + " Ho�geldin, iyi oyunlar." },
	function (gelenNick) { return gelenNick + " hadi kumda oyna :)" },
	function (gelenNick) { return "Ge�mi� olsun " + gelenNick },
	function (gelenNick) { return gelenNick + " Yenilen pehlivan okeye doymazm��." },
	function (gelenNick) { return gelenNick + " Sizin ile oyun oynamak ger�ekten keyif vericiydi..." },
	function (gelenNick) { return gelenNick + " Bizim masaya gelir misin?" },
	function (gelenNick) { return gelenNick + " 4. laz�m gelmek istersen buyur." },
	function (gelenNick) { return gelenNick + ", sana bizden ni�de gazozu :)" },
	function (gelenNick) { return gelenNick + " skor tabelas� yine beni yaz�yor" },
	function (gelenNick) { return gelenNick + " zafer pek bir �ey ��retmez, yenilgi �ok �ey ��retir." },
	function (gelenNick) { return gelenNick + " onurlu bir yenilgi, y�z k�zart�c� bir galibiyetten daha iyidir." },
	function (gelenNick) { return gelenNick + " Konu�mak bir ihtiya� olabilir; ama susmak bir sanatt�r." },
	function (gelenNick) { return gelenNick + " Hedefi olmayan bir gemiye hi� kimse yard�m edemez." },
	function (gelenNick) { return gelenNick + " Tesad�f bir ba�lang��t�r. Finali sen oynars�n, perdeyi kader kapat�r." },
	function (gelenNick) { return gelenNick + " Zafer Sabr�n �ocu�udur." },
	function (gelenNick) { return gelenNick + " toprak gibi sessiz oldu�um an bil ki; �im�ek gibi g�kte g�rl�yor feryad�m." }

];

// Masada Ho�geldiniz mesajlar�n�n listesi. Not, her bir eleman, nick parametreli bir fonksiyon olmak zorundad�r, yoksa hata olu�acakt�r.
window.AyarHazirMsjMasaListe = [
	"Masaya ho� geldin.",
	"Merhaba elin nas�l ?",
	"L�tfen biraz daha seri oynayal�m!",
	"Seri l�tfen!",
	"Tebrik ederim!",
	"Oyun i�in te�ekk�rler.",
	"Ticari bekleme yapmaa!",
	"Selam bol �anslar.",
	"Selam oturdu�um konum m�sait mi?",
	"okey bo�ta sa�lam ta�la!",
	"Kumarda kaybeden a�kda kazan�rm�s!"
];

// Masada Ho�geldiniz mesajlar�n�n listesi. Not, her bir eleman, nick parametreli bir fonksiyon olmak zorundad�r, yoksa hata olu�acakt�r.
window.AyarHazirMsjMasaNickListe = [
	function (gelenNick) { return "Ho�geldin " + gelenNick },
	function (gelenNick) { return gelenNick + " masaya ho� geldin." },
	function (gelenNick) { return gelenNick + " elin nas�l ?" },
	function (gelenNick) { return "L�tfen biraz daha seri oynayal�m " + gelenNick + "!" },
	function (gelenNick) { return gelenNick + " seri l�tfen!" },
	function (gelenNick) { return gelenNick + " Tebrik ederim!" },
	function (gelenNick) { return gelenNick + " oyun i�in te�ekk�rler." },
	function (gelenNick) { return gelenNick + "bekleme yapmazsan sevinirim!" },
	function (gelenNick) { return gelenNick + " bol �anslar." },
	function (gelenNick) { return gelenNick + " okey bo�ta sa�lam ta�la!" },
	function (gelenNick) { return gelenNick + " Kumarda kaybeden a�kda kazan�rm�s!" }
];

// Oda Lobisine ozel logo tanimlari.
window.AyarOdaLogoListe = [
	["Y�lba��", "_odalogo/yilbasi.png"],
	["Bayrak2", "_odalogo/turkbayrak.png"],
	["Bayrak", "_odalogo/bayraks.gif"],
	["Sevgililer G�n�", "_odalogo/sevgililergunu.png"]
];

// ��lenecek ismarlama listesi.
// UYARI : 25 adet ismarlama resmi tanimlanmalidir. Daha az veya fazla olursa, istenmeyen sonuclar dogurabilir.
// [No, Isim, IsmarlaStr, Resim]
window.AyarIsmarlaDef = "res/ismarla.png";
window.AyarIsmarlaListe = [
	[1, "�ay", "�smarlad�. Afiyet olsun.(cay)", "res/_ismarla/cay.gif"],
	[2, "Kahve", "�smarlad�. Afiyet olsun.(turkkahvesi)", "res/_ismarla/kahve.webp"],
	[3, "Pasta", "�smarlad�. Afiyet olsun.", "res/_ismarla/pastta.gif"],
	[4, "Elma", "�smarlad�. Afiyet olsun.", "res/_ismarla/elma.webp"],
	[5, "Bira", "�smarlad�. �yi Sallanmalar.", "res/_ismarla/biraa.gif"],
	[6, "Nazar", "Boncu�u arma�an ediyor.(nazar112)", "res/_ismarla/nazarlik.gif"],
	[7, "�ark�", "Arma�an ediyor. (foraa) �yi dinlemeler.(vermuzigi)", "res/_ismarla/sarkiarmagan.gif"],
	[8, "Portakal Suyu", "�smarlad�. Afiyet olsun.", "res/_ismarla/portakalsuyu.gif"],
	[9, "�ilek", "�smarlad�. Afiyet olsun.", "res/_ismarla/cilek.webp"],
	[10, "Dondurma", "�smarlad�. Afiyet olsun.", "res/_ismarla/dondurma.webp"],
	[11, "Sandvi�", "�smarlad�. Afiyet olsun.", "res/_ismarla/sandvic.gif"],
	[11, "Hamburger", "�smarlad�. Afiyet olsun.", "res/_ismarla/hamburger.gif"],
	[13, "Koka Kola", "�smarlad�. Afiyet olsun.", "res/_ismarla/kolaa.gif"],
	[14, "Simit", "�smarlad�. Afiyet olsun.", "res/_ismarla/simit.png"],
	[15, "Pizza", "�smarlad�. Afiyet olsun.", "res/_ismarla/pizza.webp"],
	[16, "Limonata", "�smarlad�. Afiyet olsun.", "res/_ismarla/limonata.gif"],
	[17, "Baklava", "�smarlad�. Afiyet olsun.", "res/_ismarla/baklava.png"],
	[18, "Taxi", "G�nderiyor,(cakmakyak) Hemen Atlay�n Gelin Ge� Kalma :D.", "res/_ismarla/sizetaxigonderdi.gif"],
	[19, "Kek", "�smarlad�. Afiyet olsun.", "res/_ismarla/kek.png"],
	[20, "�i�ek", "�e�itleri hediye ediyor, Hadi iyisin b�t�n �i�ekler var :).", "res/_ismarla/butuncicek.gif"],
	[21, "G�L", "Demetini yolluyor, Ooo diyebilir miyiz (asik) .", "res/_ismarla/guldemeti.gif"],
	[22, "Kalp", "G�nderiyor, Gel Sar�lay�m Sana (kucak) (asik) .", "res/_ismarla/kalp.gif"],
	[23, "Sevgi", "P�t�rc�klar�n� hissettiriyor, (kucak) (asik).", "res/_ismarla/seniseviyorum.gif"],
	[24, "Tek Ta� Y�z�k", "Hediye ediyor, L�tfen kabul edin :).", "res/_ismarla/tektas.gif"],
	[25, "Patlam�� M�s�r", "Ismarlad�. Afiyet olsun.", "res/_ismarla/misir.gif"]
];

// ��lenecek smiley listesi.
window.AyarSmileyDef = "res/smiley.png";
window.AyarSmileyListe = [
	[":)", "res/skypex/smile.webp"],
	[":D", "res/skypex/laugh.webp"],
	[";)", "res/skypex/wink.webp"],
	[":P", "res/skypex/tongueout.webp"],
	["(bye)", "res/skypex/hi.webp"],
	[":i(", "res/skypex/cry.webp"],
	[":(", "res/skypex/sad.webp"],
	[":o", "res/skypex/surprised.webp"],
	["(utanma)", "res/skypex/blush.webp"],
	["(hayal)", "res/skypex/dream.webp"],
	["(cene)", "res/skypex/ttm.webp"],
	["(uyku)", "res/skypex/tired.webp"],
	["(hasta)", "res/skypex/ill.webp"],
	["(selfie)", "res/skypex/selfie.webp"],
	[":*", "res/skypex/kiss.webp"],
	["kissme", "res/skypex/kiss2.webp"],
	[":S", "res/skypex/worry.webp"],
	//	["(cool)","res/skypex/cool.webp"],
	["(n)", "res/skypex/shake.webp"],
	["(y)", "res/skypex/nod.webp"],
	[":-)", "res/skypex/wonder.webp"],
	["(kahkaha)", "res/skypex/cwl.webp"],
	["(agzibagli)", "res/skypex/lipssealed.webp"],
	["(duvara)", "res/skypex/headbang.webp"],
	["(tokatt)", "res/skypex/tokatt.gif"],
	["(asik)", "res/skypex/inlove.webp"],
	//	["(seytan)","res/skypex/devil.webp"],
	["(hih)", "res/skypex/donttalktome.webp"],
	["(peh)", "res/skypex/unamused.webp"],
	["(rock)", "res/skypex/rock.webp"],
	["(cakbes)", "res/skypex/highfive.webp"],
	["(kufur)", "res/skypex/swear.webp"],
	//	["(boe)","res/skypex/puke.webp"],
	["(zuha)", "res/skypex/rofl.webp"],
	["(boks)", "res/skypex/punch.webp"],
	[":L", "res/skypex/hungover.webp"],
	["(bezdim)", "res/skypex/facepalm.webp"],
	["(deli)", "res/skypex/fubar.webp"],
	["(cakal)", "res/skypex/eg.webp"],
	["(capkin)", "res/skypex/nerdy.webp"],
	["(sarhos)", "res/skypex/drunk.webp"],
	["(sigara2)", "res/skypex/sigara2.webp"],
	["(m)", "res/skypex/headphones.webp"],
	["(emoce)", "res/skypex/emo.webp"],
	["(slsl)", "res/skypex/clap2.webp"],
	["(ruj)", "res/skypex/ruj.webp"],
	["(haydut)", "res/skypex/haydut.gif"],
	["(xixix)", "res/skypex/xixix.gif"],
	["(yilbasio)", "res/skypex/yilbasio.gif"],
	["(haakio)", "res/skypex/haakio.gif"],
	//	["(aaaa)","res/skypex/s25.webp"],
	["(oggg)", "res/skypex/oggg.png"],
	["(duyuru)", "res/skypex/duyuru.webp"],
	["(dil)", "res/skypex/dil.webp"],
	["(mcx)", "res/skypex/s4.webp"],
	["(ummahs)", "res/skypex/zummah.webp"],
	["(mucxs)", "res/skypex/newv1.webp"],
	["(opcuks)", "res/skypex/opcuks.webp"],
	["(ulen)", "res/skypex/ulen.webp"],
	["(hoho)", "res/skypex/hoho.webp"],
	["(s33)", "res/skypex/s33.webp"],
	["(umu)", "res/skypex/umu.webp"],
	["(sallan)", "res/skypex/sallan.webp"],
	["(bicakla)", "res/skypex/bicakla.webp"],
	["(tava)", "res/skypex/tava.webp"],
	["(sopala)", "res/skypex/sopala.webp"],
	["(tekmee)", "res/skypex/tekmee.webp"],
	["(ucur)", "res/skypex/ucur.gif"],
	["(supurr)", "res/skypex/zsupurr.webp"],
	//	["(no)","res/skypex/no.webp"],
	["(star)", "res/skypex/star.webp"],
	["(kopecik)", "res/skypex/kopecik.gif"],
	["(kedi)", "res/skypex/cat.webp"],
	["(pen)", "res/skypex/penguin.webp"],
	["(kiss)", "res/skypex/penguinkiss.webp"],
	["(haha)", "res/skypex/monkeygiggle.webp"],
	["(maymun)", "res/skypex/monkey.webp"],
	["(maymus)", "res/skypex/maymus.gif"],
	["(duymaa)", "res/skypex/duyma.gif"],
	["(gormee)", "res/skypex/gorme.gif"],
	["(bilmee)", "res/skypex/bilme.gif"],
	["(sampanya)", "res/skypex/champagne.webp"],
	["(bira)", "res/skypex/beer.webp"],
	["(serefe)", "res/skypex/wserefee.webp"],
	["(kahve)", "res/skypex/coffee.webp"],
	["(cay)", "res/skypex/cay.webp"],
	//	["(kahve2)","res/skypex/kahve2.webp"],
	["(turkkahvesi)", "res/skypex/wturkkahvesi.webp"],
	["(pasta)", "res/skypex/cake.webp"],
	["(opucuk)", "res/skypex/lips.webp"],
	["<3", "res/skypex/heart.webp"],
	["(kalps)", "res/skypex/kalps.webp"],
	["(kalpyagmuru)", "res/skypex/kalpyagmuru.gif"],
	["(kirik)", "res/skypex/brokenheart.webp"],
	["(agliyorr)", "res/skypex/agliyorr.webp"],
	["(yuzuk)", "res/skypex/ring.webp"],
	["(erkek)", "res/skypex/erkek.webp"],
	["(kiz)", "res/skypex/kiz.webp"],
	["(kucak)", "res/skypex/hug.webp"],
	["(snowi)", "res/skypex/snowi.gif"],
	["(yuruu)", "res/skypex/yuruu.webp"],
	["(kac)", "res/skypex/gottarun.webp"],
	["(s)", "res/skypex/skipping.webp"],
	["(cantali)", "res/skypex/cantali.webp"],
	["(yoga)", "res/skypex/yoga.webp"],
	["(teytey)", "res/skypex/bhangra.webp"],
	//	["(dans)","res/skypex/dance.webp"],
	["(kopkop)", "res/skypex/sturridge15.webp"],
	["(tey2)", "res/skypex/tey2.webp"],
	["(disco)", "res/skypex/discodancer.webp"],
	["(horon1)", "res/skypex/s92.webp"],
	["(kemeniko)", "res/skypex/kemeniko.gif"],
	["(hopaa)", "res/skypex/hopaa.gif"],
	//	["(hausakha)","res/skypex/hausakha.gif"],
	["(zarr)", "res/skypex/zarr.gif"],
	["(horon2)", "res/skypex/horon3.webp"],
	//	["(oynakiz)","res/skypex/oynakiz.webp"],
	//	["(sallatitret)","res/skypex/sallatitret.webp"],
	["(tinki)", "res/skypex/tinki.webp"],
	//	["(so2)","res/skypex/so2.webp"],
	["(so3)", "res/skypex/so3.webp"],
	["(oynasana)", "res/skypex/oynasana.webp"],
	["(hibuu)", "res/skypex/hibuu.gif"],
	["(calkalakiz)", "res/skypex/calkalakiz.webp"],
	["(s98)", "res/skypex/s98.webp"],
	["(ly)", "res/skypex/oyna34.webp"],
	["(lys)", "res/skypex/rengarenk.webp"],
	["(mendill)", "res/skypex/mendill.webp"],
	["(cikiciki)", "res/skypex/cikiciki.webp"],
	//	["(mvsmm)","res/skypex/havai.webp"],
	["(yandannn)", "res/skypex/kumsal.webp"],
	["(maskelikiz)", "res/skypex/maskekiz.webp"],
	["(dance1)", "res/skypex/dance1.webp"],
	["(dance2)", "res/skypex/dance2.webp"],
	["(dance3)", "res/skypex/dance3.webp"],
	["(dance5)", "res/skypex/dance5.webp"],
	["(dance6)", "res/skypex/dance6.webp"],
	["(dance7)", "res/skypex/dance7.webp"],
	["(hoba3)", "res/skypex/hoba3.webp"],
	["(gops)", "res/skypex/gops.webp"],
	["(heyyoo)", "res/skypex/heyyoo.webp"],
	["(obbaa)", "res/skypex/obbaa.webp"],
	["(askdans1)", "res/skypex/askdans1.gif"],
	["(danqe)", "res/skypex/danqe.gif"],
	["(weis)", "res/skypex/weis.gif"],
	["(foraa)", "res/skypex/foraa.gif"],
	["(hoba2)", "res/skypex/hoba2.webp"],
	["(dance4)", "res/skypex/dancetx.gif"],
	["(hoba1)", "res/skypex/hoba1.webp"],
	["(dans1)", "res/skypex/xdans2.webp"],
	["(dans2)", "res/skypex/dans2.webp"],
	["(dans5)", "res/skypex/dans5.webp"],
	["(dans9)", "res/skypex/dans9.webp"],
	["(oyna3)", "res/skypex/oyna3.webp"],
	["(oyna4)", "res/skypex/oyna4.webp"],
	["(hoba0)", "res/skypex/hoba0.webp"],
	["(titre1)", "res/skypex/titre1.webp"],
	["(titre2)", "res/skypex/titre2.webp"],
	["(oyna5)", "res/skypex/oyna5.webp"],
	["(oyna6)", "res/skypex/oyna6.webp"],
	["(oyna7)", "res/skypex/oyna7.webp"],
	["(teklif)", "res/skypex/teklif.webp"],
	["(dansaa)", "res/skypex/dansk.webp"],
	["(c2)", "res/skypex/c2.webp"],
	["(tinii)", "res/skypex/tinii.gif"],
	["(tey)", "res/skypex/lang.webp"],
	["(mendils)", "res/skypex/mendil2.webp"],
	//	["(gol)","res/skypex/henderson14.webp"],
	//	["(dur)","res/skypex/stop.webp"],
	["(pc)", "res/skypex/computerrage.webp"],
	["(guc)", "res/skypex/muscle.webp"],
	["(duali)", "res/skypex/duali.webp"],
	["(clap)", "res/skypex/clap.webp"],
	["(hop)", "res/skypex/handsinair.webp"],
	//	["(alkis1)","res/skypex/alkis1.webp"],
	//	["(s55)","res/skypex/s55.webp"],
	["(alks)", "res/skypex/alkis.webp"],
	//	["(yes)","res/skypex/yes.webp"],
	["(havai)", "res/skypex/havai.gif"],
	["(sans)", "res/skypex/goodluck.webp"],
	["(gul1)", "res/skypex/gul1.webp"],
	["(gul2)", "res/skypex/gul2.webp"],
	//	["(gul3)","res/skypex/so1.webp"],
	["(papatyaa)", "res/skypex/papatya.gif"],
	["(eyoo)", "res/skypex/s58.webp"],
	["(cicek)", "res/skypex/flower.webp"],
	//	["(kelebek)","res/skypex/kelebek.webp"],
	["(kelebeks)", "res/skypex/kelebeks.webp"],
	["(mum)", "res/skypex/diya.webp"],
	["(ates)", "res/skypex/ates.webp"],
	["(cakmakyak)", "res/skypex/cakmakyak.gif"],
	//	["(pat)","res/skypex/fireworks.webp"],
	["(soruunlem)", "res/skypex/whatsgoingon.webp"],
	["(dur2)", "res/skypex/dur2.webp"],
	["(s80)", "res/skypex/s80.webp"],
	["(para)", "res/skypex/para.webp"],
	["(hashas)", "res/skypex/hashas.webp"],
	["(nazar112)", "res/skypex/nazar112.webp"],
	["(ahaha)", "res/skypex/kahkaha3.webp"],
	["(ahehe)", "res/skypex/haha1.webp"],
	["(ahihi)", "res/skypex/haha2.webp"],
	["(saklannn)", "res/skypex/saklannn.webp"],
	["(gitbasimdan)", "res/skypex/gitbasimdan.gif"],
	["(banane)", "res/skypex/xbanane.webp"],
	["(taviryap)", "res/skypex/taviryap.gif"],
	["(gozz)", "res/skypex/ggoz.webp"],
	["(kikiki)", "res/skypex/kiki.gif"],
	//	["(hih1)","res/skypex/melek.webp"],
	["(hihs)", "res/skypex/hih2.gif"],
	["(tinitini)", "res/skypex/xtintin.webp"],
	["(vermuzigi)", "res/skypex/tvermuzigi.webp"],
	["(gitarist)", "res/skypex/gitariko.webp"],
	["(qitarist)", "res/skypex/qitariko.webp"],
	["(davul)", "res/skypex/davul.webp"],
	["(gitar)", "res/skypex/gitar.webp"],
	["(byee)", "res/skypex/abyee.webp"],
	["(baiii)", "res/skypex/abaii.webp"],
	//	["(iyigeceler2)","res/skypex/iyigeceler.webp"],
	//	["(iyigeceler)","res/skypex/aig.webp"],
	//	["(allahaemanet)","res/skypex/aeo.webp"],
	//	["(tr1)","res/skypex/tr1.webp"],
	//	["(tr2)","res/skypex/tr2.webp"],
	["(tr3)", "res/skypex/tr3.webp"],
	//	["(selam)","res/skypex/selam.webp"]
	["(tr3)", "res/skypex/tr0.webp"]
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
	"�ubat",
	"Mart",
	"Nisan",
	"May�s",
	"Haziran",
	"Temmuz",
	"A�ustos",
	"Eyl�l",
	"Ekim",
	"Kas�m",
	"Aral�k"
];

// Formlarda vs. gorunecek il adlari (ek il ekleyebilmeniz icin bu dosyaya konulmustur)
// Not : ilk eleman, default se�im eleman� olacak... (�ehir se�iniz, �ehriniz, vb. gibi)
// Not : Kullanici kaydiniz varsa, listenin su anki haliyle oynamayiniz, listenin sonuna
// 		 ekleme yapiniz. Yoksa, kullanici kayitlarinizda sehir karisikligi yasayabilirsiniz.
window.AyarIlListe = [
	"�ehir Se�iniz",
	"Adana",
	"Ad�yaman",
	"Afyonkarahisar",
	"A�r�",
	"Aksaray",
	"Amasya",
	"Ankara",
	"Antalya",
	"Ardahan",
	"Artvin",
	"Ayd�n",
	"Bal�kesir",
	"Bart�n",
	"Batman",
	"Bayburt",
	"Bilecik",
	"Bing�l",
	"Bitlis",
	"Bolu",
	"Burdur",
	"Bursa",
	"�anakkale",
	"�ank�r�",
	"�orum",
	"Denizli",
	"Diyarbak�r",
	"D�zce",
	"Edirne",
	"Elaz��",
	"Erzincan",
	"Erzurum",
	"Eski�ehir",
	"Gaziantep",
	"Giresun",
	"G�m��hane",
	"Hakk�ri",
	"Hatay",
	"I�d�r",
	"Isparta",
	"��el (Mersin)",
	"�stanbul",
	"�zmir",
	"Karab�k",
	"Karaman",
	"Kars",
	"Kastamonu",
	"Kayseri",
	"K�r�kkale",
	"K�rklareli",
	"K�r�ehir",
	"Kilis",
	"Kocaeli",
	"Konya",
	"K�tahya",
	"Malatya",
	"Manisa",
	"Kahramanmara�",
	"Mardin",
	"Mu�la",
	"Mu�",
	"Nev�ehir",
	"Ni�de",
	"Ordu",
	"Osmaniye",
	"Rize",
	"Sakarya",
	"Samsun",
	"Siirt",
	"Sinop",
	"Sivas",
	"��rnak",
	"Tekirda�",
	"Tokat",
	"Trabzon",
	"Tunceli",
	"�anl�urfa",
	"U�ak",
	"Van",
	"Yalova",
	"Yozgat",
	"Zonguldak"
];

// Formlarda vs. gorunecek ulke adlari (ek ulke ekleyebilmeniz icin bu dosyaya konulmustur)
// Not : ilk eleman, "kesinlikle" T�rkiye olmak zorundad�r, yoksa kay�t formlar�nda s�k�nt� ya�ars�n�z.
// Not : Kullanici kaydiniz varsa, listenin su anki haliyle oynamayiniz, listenin sonuna
// 		 ekleme yapiniz. Yoksa, kullanici kayitlarinizda �kle karisikligi yasayabilirsiniz.
window.AyarUlkeListe = [
	"T�rkiye",
	"ABD Virgin Adalar�",
	"Afganistan",
	"Aland Adalar�",
	"Almanya",
	"Amerika Birle�ik Devletleri",
	"Amerika Birle�ik Devletleri K���k D�� Adalar�",
	"Amerikan Samoas�",
	"Andora",
	"Angola",
	"Anguilla",
	"Antarktika",
	"Antigua ve Barbuda",
	"Arjantin",
	"Arnavutluk",
	"Aruba",
	"Avrupa Birli�i",
	"Avustralya",
	"Avusturya",
	"Azerbaycan",
	"Bahamalar",
	"Bahreyn",
	"Banglade�",
	"Barbados",
	"Bat� Sahara",
	"Belize",
	"Bel�ika",
	"Benin",
	"Bermuda",
	"Beyaz Rusya",
	"Bhutan",
	"Bilinmeyen veya Ge�ersiz B�lge",
	"Birle�ik Arap Emirlikleri",
	"Birle�ik Krall�k",
	"Bolivya",
	"Bosna Hersek",
	"Botsvana",
	"Bouvet Adas�",
	"Brezilya",
	"Brunei",
	"Bulgaristan",
	"Burkina Faso",
	"Burundi",
	"Cape Verde",
	"Cebelitar�k",
	"Cezayir",
	"Christmas Adas�",
	"Cibuti",
	"Cocos Adalar�",
	"Cook Adalar�",
	"�ad",
	"�ek Cumhuriyeti",
	"�in",
	"Danimarka",
	"Dominik",
	"Dominik Cumhuriyeti",
	"Do�u Timor",
	"Ekvator",
	"Ekvator Ginesi",
	"El Salvador",
	"Endonezya",
	"Eritre",
	"Ermenistan",
	"Estonya",
	"Etiyopya",
	"Falkland Adalar� (Malvinalar)",
	"Faroe Adalar�",
	"Fas",
	"Fiji",
	"Fildi�i Sahilleri",
	"Filipinler",
	"Filistin B�lgesi",
	"Finlandiya",
	"Fransa",
	"Frans�z Guyanas�",
	"Frans�z G�ney B�lgeleri",
	"Frans�z Polinezyas�",
	"Gabon",
	"Gambia",
	"Gana",
	"Gine",
	"Gine-Bissau",
	"Granada",
	"Gr�nland",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guyana",
	"G�ney Afrika",
	"G�ney Georgia ve G�ney Sandwich Adalar�",
	"G�ney Kore",
	"G�ney K�br�s Rum Kesimi",
	"G�rcistan",
	"Haiti",
	"Heard Adas� ve McDonald Adalar�",
	"Hindistan",
	"Hint Okyanusu �ngiliz B�lgesi",
	"Hollanda",
	"Hollanda Antilleri",
	"Honduras",
	"Hong Kong SAR - �in",
	"H�rvatistan",
	"Irak",
	"�ngiliz Virgin Adalar�",
	"�ran",
	"�rlanda",
	"�spanya",
	"�srail",
	"�sve�",
	"�svi�re",
	"�talya",
	"�zlanda",
	"Jamaika",
	"Japonya",
	"Jersey",
	"Kambo�ya",
	"Kamerun",
	"Kanada",
	"Karada�",
	"Katar",
	"Kayman Adalar�",
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
	"Kuzey Mariana Adalar�",
	"K�ba",
	"K�rg�zistan",
	"Laos",
	"Lesotho",
	"Letonya",
	"Liberya",
	"Libya",
	"Liechtenstein",
	"Litvanya",
	"L�bnan",
	"L�ksemburg",
	"Macaristan",
	"Madagaskar",
	"Makao S.A.R. �in",
	"Makedonya",
	"Malavi",
	"Maldivler",
	"Malezya",
	"Mali",
	"Malta",
	"Man Adas�",
	"Marshall Adalar�",
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
	"Mo�olistan",
	"Myanmar",
	"M�s�r",
	"Namibya",
	"Nauru",
	"Nepal",
	"Nijer",
	"Nijerya",
	"Nikaragua",
	"Niue",
	"Norfolk Adas�",
	"Norve�",
	"Orta Afrika Cumhuriyeti",
	"�zbekistan",
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
	"Sey�eller",
	"Sierra Leone",
	"Singapur",
	"Slovakya",
	"Slovenya",
	"Solomon Adalar�",
	"Somali",
	"Sri Lanka",
	"Sudan",
	"Surinam",
	"Suriye",
	"Suudi Arabistan",
	"Svalbard ve Jan Mayen",
	"Svaziland",
	"S�rbistan",
	"S�rbistan-Karada�",
	"�ili",
	"Tacikistan",
	"Tanzanya",
	"Tayland",
	"Tayvan",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad ve Tobago",
	"Tunus",
	"Turks ve Caicos Adalar�",
	"Tuvalu",
	"T�rkmenistan",
	"Uganda",
	"Ukrayna",
	"Umman",
	"Uruguay",
	"Uzak Okyanusya",
	"�rd�n",
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
// y�l giri�i olmadan g�n ve ay giri�i istememeliyiz.
if (window.AyarKayitFormDogumYil == false)
	window.AyarKayitFormDogum = false;
window.AyarJSOK = true; // Bu kismi degistirmeyiniz...
