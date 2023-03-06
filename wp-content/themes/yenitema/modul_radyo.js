/*
	Bu dosyanin icerigi, yari moduler olarak tasarlanmistir. bazi olaylar esnasinda
	extra uygulanacak/uygulattirilacak isler icindir. Gerekli goruldugu durumlarda ust
	versiyonlarda daha fazla hook eklenebilir.
	Not : fonksiyon veya degisken isimlerini degistirirseniz, islev kaybi olusacaktir.
	Not : NE YAPTIGINIZI BILMIYORSANIZ BU DOSYA ILE OYNAMAYINIZ.
*/

var Radyo_SesDestegi = 0;
var Radyo_OtoAyari = false;
var Radyo_IlkSesAyari = 70;
var Radyo_SonURL = "";
var Radyo_Durum = false;
var interval = null; 


var caliyor = function(){
	var kes = Radyo_SonURL.replace(';', '');
	var radyomuz = kes+ 'stats?sid=1&json=1';
    $.ajax({
        url: radyomuz, 
		dataType: 'jsonp',
        type: "GET",
        success: function(result) {
			if(result){



				$("#radyoPanel").find("#baslik").html(("<marquee><span class='nocss'><!--<img src=\"/res/color/trs.gif\">-->&nbsp;") + (result.songtitle) + ("&nbsp;&nbsp;- ToPRaK Fm - iyi dinlemeler diler!</span></marquee>"));
				$("#radyoPanel").find("#baslik").attr(("<marquee><span class='nocss'><!--<img src=\"/res/color/trs.gif\">-->&nbsp;") + (result.songtitle) + ("&nbsp;&nbsp;- ToPRaK Fm - iyi dinlemeler diler!</span></marquee>"));
			} else {
				$("#radyoPanel").find("#baslik").html("Çalýnýyor...");
				$("#radyoPanel").find("#baslik").attr("title", "Çalýnýyor...");



//				$("#radyoPanel").find("#baslik").html(result.songtitle);
//				$("#radyoPanel").find("#baslik").attr("title", result.songtitle);
//			} else {
//				$("#radyoPanel").find("#baslik").html("Çalýnýyor...");
//				$("#radyoPanel").find("#baslik").attr("title", "Çalýnýyor...");
			}
		}
    });
}

var Radyo_SesDegistir = function() {
	var seviye = $("#radyoPanel").find("#sesKontrol").slider("value");
	window.SkyRadyoSesAyarla(seviye);
}

$(document).on("SkyEvtIlkGiris", function (e) {
	$("#radyoPanel").find("#baslat").click(function() {
		window.SkyRadyoCal();
	});
	$("#radyoPanel").find("#durdur").click(function() {
		window.SkyRadyoDur();
	});
	$("#radyoPanel").find("#sesKontrol").slider({
		value: Radyo_IlkSesAyari,
		orientation: "horizontal",
		range: "min",
		max: 100,
		animate: true,
		slide: Radyo_SesDegistir,
		change: Radyo_SesDegistir
	});
});

$(document).on("SkyEvtRadyoInit", function() {
	Radyo_Durum = false;
});

$(document).on("SkyEvtRadyoBasladi", function(gelen) {
	Radyo_Durum = true;
	$("#radyoPanel").find("#bekle").addClass("Gizli");
	$("#radyoPanel").find("#baslat").addClass("Gizli");
	$("#radyoPanel").find("#durdur").removeClass("Gizli");
	caliyor();
	interval = setInterval(caliyor, 30000);
});

$(document).on("SkyEvtRadyoDurdu", function(gelen) {
	Radyo_Durum = false;
	$("#radyoPanel").find("#bekle").addClass("Gizli");
	$("#radyoPanel").find("#durdur").addClass("Gizli");
	$("#radyoPanel").find("#baslat").removeClass("Gizli");
	$("#radyoPanel").find("#baslik").html("Butona Týklayýnýz");
	$("#radyoPanel").find("#baslik").attr("title", "Butona Týklayýnýz");
});

$(document).on("SkyEvtRadyoGuncelle", function (e, url, sesdurum) {
	Radyo_SonURL = url;
	Radyo_SesDestegi = sesdurum;
});

$(document).on("SkyEvtRadyoOtoAyarla", function (e, cal, sesdurum) {
	Radyo_OtoAyari = cal;
	Radyo_SesDestegi = sesdurum;
});

$(document).on("SkyEvtBaslaAna", function (e) {
	$("#AnaUstPanelExt").append("<table class='AnaUstPanelExtTbl'><tr><td><div id='AnaPanelRadyo' class='FontK'><div id='radyoPanel'><div id='radyoPlayerCnt'></div><div id='ana'>"+
	"<div id='kontrol'><div id='radyoYazi'>Toprak Fm</div><div style='clear: both;'></div><div id='sesKontrol'>&nbsp;</div></div>"+
	"<div id='baslat' class='radyoButon'><a id='cal' href='javascript:void(0);'><img src='res/basla.png' /></a></div>"+
	"<div id='bekle' class='radyoButon Gizli'><img src='res/bekle.gif' /></div>"+
	"<div id='durdur' class='radyoButon Gizli'><a id='dur' href='javascript:void(0);'><img src='res/durdur.png' /></a></div>"+
	"<div style='clear: both;'></div><p id='baslik' title='Butona Týklayýnýz'>Butona Týklayýnýz</p></div></div></div></td></tr></table>");
});


