/*
	Bu dosyanin icerigi, yari moduler olarak tasarlanmistir. bazi olaylar esnasinda
	extra uygulanacak/uygulattirilacak isler icindir. Gerekli goruldugu durumlarda ust
	versiyonlarda daha fazla hook eklenebilir.
	Not : fonksiyon veya degisken isimlerini degistirirseniz, islev kaybi olusacaktir.
	Not : NE YAPTIGINIZI BILMIYORSANIZ BU DOSYA ILE OYNAMAYINIZ.
*/








var Modul_Yonetim_URL = "https://www.toprakokey.net/wp-content/themes/yenitema/modulyonetim.php";

$(document).on("SkyEvtBaslaAna", function (e) {

	$("#AnaUstPanelExt").append(
		"<table class='AnaUstPanelExtTbl'><tr><td>"+
		"<div id='ustPanelYonetim' style='float: right; color: white;'>"+
		"<div id='YonetimButton' href='#' onclick='return false;' style='margin-right: 4px;' class='butonUstPanelOrtak FontO butonKirmizi butonText'>Yönetim</div>"+
		"</div></td></tr></table>");
		
	$("#ustPanelYonetim").find("#YonetimButton").unbind("click");
	$("#ustPanelYonetim").find("#YonetimButton").click(function() {		
		window.DialogGoster({			
			"baslik": "Yönetim",
			"icerik": "<iframe scrolling='yes' src='" + Modul_Yonetim_URL + '?odaport=' + Modul_Istek_Son_OdaPort + "&kull=" + Modul_Istek_Son_Kullanici + "'></iframe>"		
		});
	});

});





var Modul_Top50_URL = "https://www.toprakokey.net/wp-content/themes/yenitema/modul_top50.php";
$(document).on("SkyEvtBaslaAna", function (e) {
	$("#AnaUstPanelExt").append(
		"<table class='AnaUstPanelExtTbl'><tr><td>"+
		"<div id='ustPanelTop50' style='float: right; color: white;'>"+
		"<div id='Top50Buton' href='#' onclick='return false;' class='butonUstPanelOrtak FontO butonSari butonText' style='margin-right: 4px;'>Top 50</div>"+
		"</div></td></tr></table>");


	$("#ustPanelTop50").find("#Top50Buton").unbind("click");
	$("#ustPanelTop50").find("#Top50Buton").click(function() {		
		window.DialogGoster({
			"baslik": "Top 50 Kullanýcý Listesi",
			"icerik": "<iframe scrolling='no' src='" + Modul_Top50_URL + '?odaport=' + Modul_Istek_Son_OdaPort + "&kull=" + Modul_Istek_Son_Kullanici + "'></iframe>"		
		});
	});	
});








var Modul_Ronetim_URL = "https://www.toprakokey.net/wp-content/themes/yenitema/modulcolorex.php";

$(document).on("SkyEvtBaslaAna", function (e) {

	$("#AnaUstPanelExt").append(
		"<table class='AnaUstPanelExtTbl'><tr><td>"+
		"<div id='ustPanelRonetim' style='float: right; color: white;'>"+
		"<div id='Top50' href='#' onclick='return false;' style='margin-right: 4px;' class='butonUstPanelOrtak FontO butonYesil butonText'>Renkler</div>"+
		"</div></td></tr></table>");
		
	$("#ustPanelRonetim").find("#Top50").unbind("click");
	$("#ustPanelRonetim").find("#Top50").click(function() {		
		window.DialogGoster({			
			"baslik": "Renkler",
			"icerik": "<iframe scrolling='yes' src='" + Modul_Ronetim_URL + '?odaport=' + Modul_Istek_Son_OdaPort + "&kull=" + Modul_Istek_Son_Kullanici + "'></iframe>"		
		});
	});

});


var Modul_Turnuva_URL = "https://www.toprakokey.net/turnuva/turnuva.php";
var Modul_Turnuva_Son_OdaPort = -1;
var Modul_Turnuva_Son_Kullanici = "";

// Oyuna baglanilirken uygulanabilecek fonksiyon.
// NOT : burdaki fonksiyon; sayfa yenilenmedigi surece, her oyuna
//       baglanti kuruldugunda (salon degisimi dahil) calistirilacaktir.
$(document).on("SkyEvtIlkGiris", function (e, odaport, u, h) {
	Modul_Turnuva_Son_OdaPort = odaport;
	Modul_Turnuva_Son_Kullanici = u;
});


// Oyun acilmadan hemen once uygulanabilecek javascript bu fonksiyondan uygulanabilir.
$(document).on("SkyEvtBaslaAna", function (e) {
	$("#AnaUstPanelExt").append("<table class='AnaUstPanelExtTbl'><tr><td><div id='turnuvaPanel' style='float: right; padding-right: 5px; color: white;'>"+
		"<div id='TurnuvaButon' href='javascript:void0;' onclick='return false;' class='butonUstPanelOrtak FontO butonKirmizi butonText'>Turnuva</div></div></td></tr></table>");
	$("#turnuvaPanel").find("#TurnuvaButon").unbind("click");
	$("#turnuvaPanel").find("#TurnuvaButon").click(function() {
		window.DialogGoster({
			"baslik": "Turnuva",
			"icerik": "<iframe src='" + Modul_Turnuva_URL + '?odaport=' + Modul_Turnuva_Son_OdaPort + "&kull=" + Modul_Turnuva_Son_Kullanici + "'></iframe>"
		});
	});
});


var Modul_Istek_URL = "https://www.toprakokey.net/istek/istekformu/istek.php";
var Modul_Istek_Son_OdaPort = -1;
var Modul_Istek_Son_Kullanici = "";

// Oyuna baglanilirken uygulanabilecek fonksiyon.
// NOT : burdaki fonksiyon; sayfa yenilenmedigi surece, her oyuna
//       baglanti kuruldugunda (salon degisimi dahil) calistirilacaktir.
$(document).on("SkyEvtIlkGiris", function (e, odaport, u, h) {
	Modul_Istek_Son_OdaPort = odaport;
	Modul_Istek_Son_Kullanici = u;
});

// Oyun acilmadan hemen once uygulanabilecek javascript bu fonksiyondan uygulanabilir.
$(document).on("SkyEvtBaslaAna", function (e) {
	$("#AnaUstPanelExt").append("<table class='AnaUstPanelExtTbl'><tr><td><div id='ustPanelIstek' style='float: right; padding-right: 5px; color: white;'>"+
		"<div id='IstekButon' href='javascript:void(0);' onclick='return false;' class='butonUstPanelOrtak FontO butonMavi butonText'>Ýstek Yap</div></div></td></tr></table>");
	$("#ustPanelIstek").find("#IstekButon").unbind("click");
	$("#ustPanelIstek").find("#IstekButon").click(function() {
		window.DialogGoster({
			"baslik": "Ýstek Yap",
			"icerik": "<iframe scrolling='no' src='" + Modul_Istek_URL + '?odaport=' + Modul_Istek_Son_OdaPort + "&kull=" + Modul_Istek_Son_Kullanici + "'></iframe>"
		});
	});
});


  