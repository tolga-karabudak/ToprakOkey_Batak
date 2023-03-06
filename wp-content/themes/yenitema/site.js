window.OyunPasif = true; // degistirmeyiniz.
var JsSite = function(xAnaSayfa, xIslemBetigi, xFrameUrl, xPortZorla, xGirisVarmi, xVers) {
	this.Vers = xVers;
	this.IURL = xIslemBetigi;
	this.FURL = xFrameUrl;
	this.AURL = xAnaSayfa;
	this.PortZorla = xPortZorla;
	this.GirisVar = xGirisVarmi;
	this.ResimBagla = window.ResimBagla;
	this.MisafirGir = window.MisafirGir;
	this.FacebookGir = window.FacebookGir;
	this.FacebookF1 = window.FacebookF1;
	this.FacebookF2 = window.FacebookF2;
	this.GirisYap = window.GirisYap;
	this.KayitYap = window.KayitYap;
	this.Onayla = window.Onayla;
	this.SifreUnut = window.SifreUnut;
	this.SifreUnut2 = window.SifreUnut2;
	this.Askida = window.Askida;
	this.KodAl = window.KodAl;
	this.KodDegis = window.KodDegis;
	this.CikisEvent = window.CikisEvent;
	this.DlgUyari = null;
	this.Dialog1 = null;
	this.DlgFn2 = null;
	this.KodumuDegistir = function(frm) {
		window.Oyunumuz.KodDegis(frm, window.Oyunumuz.IURL,
			function(kmt, tip, snc) {
				if (kmt == "HATA")
					window.Oyunumuz.Dialog1("error", "Kod Alýnamadý : " + snc);
			}
		);
	}
	this.KodAlFnc = function() {
		window.Oyunumuz.KodAl(window.Oyunumuz.IURL,
			function(kmt, tip, snc) {
				if (kmt == "HATA")
					window.Oyunumuz.Dialog1("error", "Kod Alýnamadý : " + snc);
			}
		);
	}
	this.OdaDegistir = function(prt, tip) {
		if (window.Oyunumuz.GirisVar == false) {
			window.Oyunumuz.Dialog2("<p>Sayýn Misafir<br>Lütfen <span>Giriþ</span> yapýn veya <span>Kayýt</span> olun.</p>");
		} else {
			if (typeof tip === "undefined" || tip == null)
				tip = 1;
			window.location.href = window.Oyunumuz.AURL + "/okey-oyna?Sayfa=Oda&Port=" + prt + "&OyunTipi=" + tip;
		}
	return false;
	}
	this.Basla = function(dlg0, dlg1, dlg2) {
		window.Oyunumuz.DlgUyari = dlg0;
		window.Oyunumuz.Dialog1 = dlg1;
		window.Oyunumuz.Dialog2 = dlg2;
		var GelFrm = $("#OyunFrame");
		if (GelFrm.length > 0) {
			var IslemTamam = false;
			if (window.Oyunumuz.GirisVar == true) {
				var MyPort = GelFrm.attr("src");
				if (MyPort.length > 0) {
					var Dizi = MyPort.split("#");
					if (Dizi.length >= 5) {
						var MyRnd = 1000000 + Math.floor(Math.random() * 8999999);
						var FrameUrl = window.Oyunumuz.FURL + "?ver="+window.Oyunumuz.Vers+"&SiteModu=1&Nick="+Dizi[2]+"&Sifre="+Dizi[3]+"&OdaPort="+Dizi[1];
						if (Oyunumuz.PortZorla == true) {
							FrameUrl = FrameUrl + "&PortZorla="+Dizi[1];
						}
						if (Dizi[4] != "0") {
							FrameUrl = FrameUrl + "&GirisTipi="+Dizi[4];
						}
						var OyunTipp = "1";
						if (Dizi.length >= 6)
							OyunTipp = Dizi[5];
						FrameUrl = FrameUrl + "&OyunTipi="+OyunTipp;
						GelFrm.attr("src", FrameUrl);
						IslemTamam = true;
					}
				}
			}
			if (IslemTamam == false)
				GelFrm.attr("src", window.Oyunumuz.FURL + "?ver=" + window.Oyunumuz.Vers);
		}
		// Çýkýþ yap fonksiyonu yapýlýp, javascript session ve cookie silimi de yapýlacak...
		var sehirNesne = $("form").find("#sehir");
		if (sehirNesne.length > 0) {
			var sehirlist = "";
			for (var x1=0; x1 < AyarIlListe.length; x1++) {
				sehirlist = sehirlist + "<option value='"+x1+"'>"+AyarIlListe[x1]+"</option>";
			}
			sehirNesne.html(sehirlist);
		}
		var ulkeNesne = $("form").find("#ulke");
		if (ulkeNesne.length > 0) {
			var ulkelist = "";
			for (var x1=0; x1 < AyarUlkeListe.length; x1++) {
				ulkelist = ulkelist + "<option value='"+x1+"'>"+AyarUlkeListe[x1]+"</option>";
			}
			ulkeNesne.html(ulkelist);
		}
	}
};
window.SiteJSOK = true;
$(document).ready(function() {
	window.Oyunumuz = new JsSite(
		window.Sky_AnaSayfa,
		window.AyarIslemBetigi,
		window.AyarFrameUrl,
		window.Sky_PortZorla,
		window.Sky_GirisYapilimi,
		window.Sky_Versiyon
	);
	var CikisBilgisiGeldi = false;
	Oyunumuz.CikisEvent(function(Tip, Baslik) {
		if (CikisBilgisiGeldi == false) {
			if (Tip == 0) { // Baðlantý saðlanamadý hatasý.
				DialogGoster("info", Baslik, function(){window.location.href=window.Sky_AnaSayfa;});
			} else if (Tip == 1) { // Ciddi Protokol Hatasý (Þifre yanlýþ, Forbid/Banlý Nick/IP, Onaysýz Nick, Böyle bir kullanýcý Yok vb.)
				DialogGoster("error", Baslik + "<br />Çýkýþ Yapmak için Tamam Butonuna Týklayýnýz.", function(){window.location.href=window.Sky_AnaSayfa + '?Sayfa=Cikis';});
			} else { // Kullanýcý Geri butonuna týkladý (Salon Listesinden)
				window.location.href = window.Sky_AnaSayfa;
			}
			CikisBilgisiGeldi = true;
		}
	});
	if (typeof window.SkySiteBasla !== "undefined")
		window.SkySiteBasla();
	window.Oyunumuz.Basla(UyariGoster, DialogGoster, DialogGoster2);
	SkyResimBagla();
	$("form").each(function() {
		var Formumuz = $(this);
		if (Formumuz.length > 0) {
			var Dgs = Formumuz.find("#degisbtn");
			var Rsm = Formumuz.find("#gvnrsm");
			if (Dgs.length > 0 && Rsm.length > 0) {
				Dgs.click(function() {
					window.Oyunumuz.KodumuDegistir(Formumuz);
				});
			}
			if (window.AyarKayitFormSehir == true) {
				var Ulk = Formumuz.find("#ulke");
				var Shr = Formumuz.find("#sehirDiv");
				if (Ulk.length > 0 && Shr.length > 0) {
					Ulk.change(function() {
						var UlkVal = Ulk.val();
						if (UlkVal == 0) {
							Shr.show();
						} else {
							Shr.hide();
						}
					});
				}
			} else {
				Formumuz.find("#sehirDiv").hide();
			}
			if (window.AyarKayitFormIsim == false) {
				Formumuz.find("#adsoyadDiv").find("#ad").val("-");
				Formumuz.find("#adsoyadDiv").find("#soyad").val("-");
				Formumuz.find("#adsoyadDiv").hide();
			}
			if (window.AyarKayitFormDogum == false) {
				Formumuz.find("#dogumDiv").find("#dogumGunDiv").find("#dogumgun").val("-");
				Formumuz.find("#dogumDiv").find("#dogumGunDiv").hide();
				Formumuz.find("#dogumDiv").find("#dogumAyDiv").find("#dogumay").html("<option value='0'>0</option>");
				Formumuz.find("#dogumDiv").find("#dogumAyDiv").find("#dogumay").val("0");
				Formumuz.find("#dogumDiv").find("#dogumAyDiv").hide();
				Formumuz.find("#dogumDiv").find("#dogumYilDiv").removeClass("SkySatir40Sag");
				Formumuz.find("#dogumDiv").find("#dogumYilDiv").removeClass("SkySatirTam");
			}
			if (window.AyarKayitFormDogumYil == false) {
				Formumuz.find("#dogumDiv").find("#dogumYilDiv").find("#dogumyil").html("<option value='0'>0</option>");
				Formumuz.find("#dogumDiv").find("#dogumYilDiv").find("#dogumyil").val("0");
				Formumuz.find("#dogumDiv").hide();
			}
		}
	});
	window.Oyunumuz.KodAlFnc();
});
function SkyResimBagla() {
	window.Oyunumuz.ResimBagla(function(gelen) {
		$("form").find("#gvnrsm").each(function() {
			$(this).attr("src", gelen);
		});
	});
}
function UyariGoster(gelstr) {
	swal({
		html: gelstr,
		type: 'warning',
		heightAuto: false,
		showCancelButton: false,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Tamam'
	});
}
function DialogGoster(geltip, gelstr, gelx) {
	swal({
		html: gelstr,
		type: geltip,
		heightAuto: false,
		showCancelButton: false,
		showConfirmButton: true,
		confirmButtonText: 'Tamam'
	}).then(function(result) {
		if (gelx != null) gelx();
	});
}
function DialogGoster2(gelstr, gelx) {
	swal({
		html: gelstr,
		heightAuto: false,
		showCancelButton: false,
		showConfirmButton: false,
		showCloseButton: true,
		closeButtonAriaLabel: 'X',
		footer: '<a class="btn facebookbtn SkyButonMavi SkySiteButon" href="javascript:void(0);" onclick="return FaceBookGirisi(this);"><svg xmlns="http://www.w3.org/2000/svg" class="hemenicon" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="white" width="24px" height="24px"><rect fill="none" height="24" width="24"/><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"/></svg>Facebook Giriþi</a> ' +
				'<a style="margin-left: 10px;" class="btn girisbtn SkyButonYesil SkySiteButon" href="https://www.toprakokey.net/giris-yap"><img src="https://www.toprakokey.net/wp-content/themes/darkblue/images/login.svg" class="girisicon">Giriþ Yap</a> ' +
				'<a style="margin-left: 10px;" class="btn kayitbtn SkyButonKirmizi SkySiteButon" href="https://www.toprakokey.net/kayit-ol"><img src="https://www.toprakokey.net/wp-content/themes/darkblue/images/plus.svg" class="kayiticon">Kayýt Ol</a> ',
		confirmButtonText: 'Tamam'
	}).then(function(result) {
		if (gelx != null) gelx();
	});
	swal.getCloseButton().innerText = "X";
	swal.getCloseButton().style.color = "black";
}

var SonMisafirPort = null;
function MisafirGoster(gelport, geltip) {
	var GirisYapilimi = window.Sky_GirisYapilimi;
	if (GirisYapilimi == true) {
		DialogGoster("error", "<p>Giriþ yapýlýyken misafir giriþi yapamazsýnýz.</p>", null);
	return false;
	}
	if (typeof geltip === "undefined" || geltip == null)
		geltip = 1;
	SonMisafirPort = gelport;
	SonMisafirTip = geltip;
	var icerik = 
		"<div class='MisafirDiv'>"+
		"<form id='MisafirForm' class='SkySiteForm' action='index.php' method='post' onsubmit='return MisafirGirisi(this);'>"+
		"	<input type='hidden' id='Komut' name='Komut' value='MISAFIRGIR' />"+
		"	<div class='MisafirCinsDiv' class='FormSatirY'>"+
		"		<div>Cinsiyetiniz : </div>"+
		"		<label class='SkyHand'><input name='cinsiyet' id='DlgMisafirCins1' class='FontO' type='radio' value='1' checked>Bay</label>"+
		"		<label class='SkyHand'><input name='cinsiyet' id='DlgMisafirCins2' class='FontO' type='radio' value='2'>Bayan</label>"+
		"	</div>"+
		"	<div class='SkySatirTamKod'>"+
		"		<img src='https://www.toprakokey.net/wp-content/themes/yenitema/site/res/yenile.png' id='degisbtn' tabindex='-1'>"+
		"		<img id='gvnrsm' src='res/bekle32.gif' border='0'>"+
		"		<div><input type='text' placeholder='Yandaki Kod' id='gvn' name='gvn' class='SkySiteInput' value='' required/></div>"+
		"	</div>"+
		"</form>"+
		"</div>";
	swal({
		html: icerik,
		title: 'Misafir Giriþi',
		heightAuto: false,
		showCancelButton: true,
		showConfirmButton: true,
		confirmButtonText: 'Tamam',
		cancelButtonText: 'Vazgeç',
		preConfirm: function(result) {
			var anaNesne = $(swal.getContent());
			var formnesne = anaNesne.find("#MisafirForm");
			var nesnemiz1 = formnesne.find("#gvn");
			if (nesnemiz1.length == 0) {
				swal.showValidationMessage("Güvenlik Kodu Nesnesi Bulunamadý!");
			return false;
			}
			var nesnemiz2 = formnesne.find("#DlgMisafirCins2");
			if (nesnemiz2.length == 0) {
				swal.showValidationMessage("Cinsiyet Nesnesi Bulunamadý!");
			return false;
			}
			var Deger = nesnemiz1.val();
			if (Deger.length == 0) {
				swal.showValidationMessage("Güvenlik Kodunu Yazmadýnýz!");
			return false;
			}
			var Cinsiyet = 1;
			if (nesnemiz2.prop("checked") == true)
				Cinsiyet = 2;
			formnesne.submit();
		return true;
		},
		onOpen: function() {
			var anaNesne = $(swal.getContent());
			var nesnemiz = anaNesne.find("#MisafirForm");
			if (nesnemiz.length > 0) {
				var Dgs = nesnemiz.find("#degisbtn");
				var Rsm = nesnemiz.find("#gvnrsm");
				if (Dgs.length > 0 && Rsm.length > 0) {
					Dgs.click(function() {
						window.Oyunumuz.KodumuDegistir(nesnemiz);
					});
					SkyResimBagla();
					window.Oyunumuz.KodAlFnc();
				}
			}
		}
	});
}

function MisafirGirisi(GelenFrm) {
	window.Oyunumuz.MisafirGir(window.Oyunumuz.IURL, GelenFrm,
		function (kmt, tip, snc) {
			if (kmt == "TAMAM2") {
				window.location.href = window.Oyunumuz.AURL + "/okey-oyna?Sayfa=Oda&Port=" + SonMisafirPort + "&OyunTipi=" + SonMisafirTip;
			} else if (kmt == "TAMAM" || kmt == "UYARI") {
				DialogGoster("warning", snc+"", null);
			} else {
				DialogGoster("error", "<p>" + snc + "</p>", null);
			}
		},
		function (n, h) {
			window.location.href = window.Oyunumuz.AURL + "/okey-oyna?Sayfa=Oda&Port=" + SonMisafirPort + "&OyunTipi=" + SonMisafirTip;
		}
	);
return false;
}



function NickimAskida() {
	var icerik = 
		"<div class='NickimAskidaDiv'>"+
		"<form id='NickimAskidaForm' class='SkySiteForm' action='index.php' method='post' onsubmit='return NickimAskidaConfirm(this);'>"+
		"	<input type='hidden' id='Komut' name='Komut' value='ASKIDA' />"+
		"	<div class='SkySatirTam'>"+
		"		<input id='kull' name='kull' type='text' placeholder='Nickiniz' class='SkySatirTam SkySiteInput' required/>"+
		"	</div>"+
		"	<div class='SkySatirTam'>"+
		"		<input type='password' placeholder='Þifreniz' class='SkySatirTam SkySiteInput' name='sifre' id='sifre' required/>"+
		"	</div>"+
		"	<div class='SkySatirTamKod'>"+
		"		<img src='https://www.toprakokey.net/wp-content/themes/yenitema/site/res/yenile.png' id='degisbtn' tabindex='-1'>"+
		"		<img id='gvnrsm' src='res/bekle32.gif' border='0'>"+
		"		<div><input type='number' placeholder='Yandaki Kod' id='gvn' name='gvn' class='SkySiteInput' value='' pattern='[0-9]*' required/></div>"+
		"	</div>"+
		"</form>"+
		"</div>";
	swal({
		html: icerik,
		title: 'Nickim Askýda',
		heightAuto: false,
		showCancelButton: true,
		showConfirmButton: true,
		confirmButtonText: 'Tamam',
		cancelButtonText: 'Vazgeç',
		preConfirm: function() { return NickimAskidaConfirm("#NickimAskidaForm"); },
		onOpen: function() {
			var nesnemiz = $(swal.getContent()).find("#NickimAskidaForm");
			if (nesnemiz.length > 0) {
				var Dgs = nesnemiz.find("#degisbtn");
				var Rsm = nesnemiz.find("#gvnrsm");
				if (Dgs.length > 0 && Rsm.length > 0) {
					Dgs.click(function() {
						window.Oyunumuz.KodumuDegistir(nesnemiz);
					});
					SkyResimBagla();
					window.Oyunumuz.KodAlFnc();
				}
			}
		}
	});

return false;
}

function NickimAskidaConfirm(GelenFrm) {
	window.Oyunumuz.Askida(window.Oyunumuz.IURL, GelenFrm,
		function (kmt, tip, snc) {
			if (kmt == "TAMAM" || kmt == "UYARI") {
				DialogGoster("warning", snc+"", null);
				// Yönlendirme veya içerik deðiþimi yapýlabilir...
			} else {
				DialogGoster("error", "<p>Kullanýcý Düþürülemedi : " + snc +"</p>", null);
			}
		},
		function (a, b, c, d) {
			DialogGoster("info", "<p>Askýda kalan nickiniz düþürüldü.</p>", null);
			// Giriþ Yönlendirmesi yapýlacak... (Beni hatýrla seçeneðini unutma...)
			//$("#Unut2Form").html("<img src='res/bekle.gif' width='40' height='40' border='0' />");
		}
	);
return false;
}


function FaceBookGirisiConfirm(Gelen) {
	var formnesne = $(Gelen);
	var nesnemiz1 = formnesne.find("#gvn");
	if (nesnemiz1.length == 0) {
		swal.showValidationMessage("Güvenlik Kodu Nesnesi Bulunamadý!");
	return false;
	}
	var Deger = nesnemiz1.val();
	if (Deger.length == 0) {
		swal.showValidationMessage("Güvenlik Kodunu Yazmadýnýz!");
	return false;
	}
	FaceBookGirisiAlt(formnesne);
return false;
}

function FaceBookGirisi() {
	var GirisYapilimi = window.Sky_GirisYapilimi;
	if (GirisYapilimi == true) {
		DialogGoster("error", "<p>Giriþ yapýlýyken facebook giriþi yapamazsýnýz.</p>", null);
	return false;
	}
	
	var Gelen = window.Oyunumuz.FacebookF1();
	if (Gelen == 0) {
		DialogGoster("info", "<p>Facebook ile Giriþ kapalý durumdadýr. Lütfen daha sonra tekrar deneyiniz.</p>", null);
	return false;
	} else if (Gelen == -1) {
		DialogGoster("error", "<p>Facebook ile Giriþ özelliðinde hata oluþtu. Lütfen daha sonra tekrar deneyiniz.</p>", null);
	return false;
	}

	var icerik = 
		"<div class='FaceGirisDiv'>"+
		"<form id='FaceGirisForm' class='SkySiteForm' action='index.php' method='post' onsubmit='return FaceBookGirisiConfirm(this);'>"+
		"	<input type='hidden' id='Komut' name='Komut' value='FACEGIR' />"+
		"	<input type='hidden' id='userid' name='userid' value='' />"+
		"	<input type='hidden' id='usertoken' name='usertoken' value='' />"+
		"	<div class='SkySatirTamKod'>"+
		"		<img src='https://www.toprakokey.net/wp-content/themes/yenitema/site/res/yenile.png' id='degisbtn' tabindex='-1'>"+
		"		<img id='gvnrsm' src='res/bekle32.gif' border='0'>"+
		"		<div><input type='text' placeholder='Yandaki Kod' id='gvn' name='gvn' class='SkySiteInput' value='' required/></div>"+
		"	</div>"+
		"</form>"+
		"</div>";
	swal({
		html: icerik,
		title: 'Facebook Giriþi',
		heightAuto: false,
		showCancelButton: true,
		showConfirmButton: true,
		confirmButtonText: 'Tamam',
		cancelButtonText: 'Vazgeç',
		preConfirm: function() { return FaceBookGirisiConfirm("#FaceGirisForm"); },
		onOpen: function() {
			var nesnemiz = $(swal.getContent()).find("#FaceGirisForm");
			if (nesnemiz.length > 0) {
				var Dgs = nesnemiz.find("#degisbtn");
				var Rsm = nesnemiz.find("#gvnrsm");
				if (Dgs.length > 0 && Rsm.length > 0) {
					Dgs.click(function() {
						window.Oyunumuz.KodumuDegistir(nesnemiz);
					});
					SkyResimBagla();
					window.Oyunumuz.KodAlFnc();
				}
			}
		}
	});

return false;
}

function FaceBookGirisiAlt(GelenFrm) {
	window.Oyunumuz.FacebookF2(function(a, b) {
		GelenFrm.find("#userid").val(a);
		GelenFrm.find("#usertoken").val(b);
		window.Oyunumuz.FacebookGir(window.Oyunumuz.IURL, GelenFrm,
			function (kmt, tip, snc) {
				swal.close();
				if (kmt == "TAMAM2") {
					window.location.href = window.Oyunumuz.AURL;
				} else if (kmt == "TAMAM" || kmt == "UYARI") {
					DialogGoster("warning", snc+"", null);
				} else {
					DialogGoster("error", "<p>" + snc + "</p>", null);
				}
			},
			function (n, h) {
				swal.close();
				window.location.href = window.Oyunumuz.AURL;
			}
		);
	},
	function(a) {
		DialogGoster("error", "<p>"+a+"</p>", null);
	});
return false;
}

function FGirisYap(GelenFrm) {
	UyariGoster("<p>Giriþ yapýlýyor, lütfen bekleyiniz...</p>");
	var BeniHatirla = ($(GelenFrm).find("#BeniHatirla").prop("checked")== true)?1:0;
	window.Oyunumuz.GirisYap(window.Oyunumuz.IURL, GelenFrm,
		function (kmt, tip, snc) {
			if (kmt == "TAMAM" || kmt == "UYARI") {
				//alert(snc);
			} else {
				DialogGoster("error", "<p>" + snc + "</p>", null);
			}
		},
		function (nx, hx) {
			DialogGoster("info", "<p>Giriþ Yapýldý.<br>Tamam'a týklayarak oyuna baðlanabilirsiniz.</p>", function(){window.location.href=window.Sky_AnaSayfa+ "okey-oyna";});
		}
	);
return false;
}
function FKayitYap(GelenFrm) {
	window.Oyunumuz.KayitYap(window.Oyunumuz.IURL, GelenFrm,
		function (kmt, tip, snc) {
			if (kmt == "TAMAM" || kmt == "UYARI") {
				DialogGoster("warning", snc+"", null);
			} else {
				DialogGoster("error", "<p>Kayýt Yapýlamadý : " + snc +"</p>", null);
			}
		},
		function (n, h) {
			$(GelenFrm).find("#mail").val("");
			$(GelenFrm).find("#sifre").val("");
			$(GelenFrm).find("#sifret").val("");
			// Giriþ Yönlendirmesi yapýlacak... (Beni hatýrla seçeneðini unutma...)
			DialogGoster("info", "<p>Kaydýnýz Tamamlandý. Tamam'a týklayarak oyunumuza baðlanabilirsiniz.</p>", function(){window.location.href=window.Sky_AnaSayfa+ "okey-oyna";});
		}
	);
return false;
}
function FUnut2Yap(GelenFrm) {
	window.Oyunumuz.SifreUnut2(window.Oyunumuz.IURL, GelenFrm,
		function (kmt, tip, snc) {
			if (kmt == "TAMAM" || kmt == "UYARI") {
				DialogGoster("warning", snc+"", null);
				// Yönlendirme veya içerik deðiþimi yapýlabilir...
			} else {
				DialogGoster("error", "<p>Þifre Sýfýrlama Saðlanamadý : " + snc +"</p>", null);
			}
		},
		function (n, h) {
			DialogGoster("info", "<p>Þifreniz baþarýlý bir þekilde deðiþtirildi.</p>", function(){window.location.href=window.Sky_AnaSayfa;});
			// Giriþ Yönlendirmesi yapýlacak... (Beni hatýrla seçeneðini unutma...)
			$("#Unut2Form").html("<img src='res/bekle.gif' width='40' height='40' border='0' />");
		}
	);
return false;
}
function FUnutYap(GelenFrm) {
	window.Oyunumuz.SifreUnut(window.Oyunumuz.IURL, GelenFrm,
		function (kmt, tip, snc) {
			if (kmt == "TAMAM" || kmt == "UYARI") {
				DialogGoster("warning", snc+"", null);
				// Yönlendirme veya içerik deðiþimi yapýlabilir...
			} else {
				DialogGoster("error", "<p>Þifre Sýfýrlama Saðlanamadý : " + snc +"</p>", null);
			}
		},
		function (n, h) {
			DialogGoster("info", "<p>Þifreniz mail adresinize gönderildi. Eðer mail gelen kutunuza kýsa süre içerisinde gelmezse, spam kutunuzu kontrol ediniz.</p>",
				function(){window.location.href=window.Sky_AnaSayfa;});
			// Giriþ Yönlendirmesi yapýlacak... (Beni hatýrla seçeneðini unutma...)
			$("#UnutForm").html("<img src='res/bekle.gif' width='40' height='40' border='0' />");
		}
	);
return false;
}
function FOnayYap(GelenFrm) {
	window.Oyunumuz.Onayla(window.Oyunumuz.IURL, GelenFrm,
		function (kmt, tip, snc) {
			if (kmt == "TAMAM" || kmt == "UYARI") {
				DialogGoster("warning", snc+"", null);
				// Yönlendirme veya içerik deðiþimi yapýlabilir...
			} else {
				DialogGoster("error", "<p>Üye onaylama hatalý : " + snc +"</p>", null);
			}
		},
		function (m1, s1) {
			DialogGoster("info", "<p>Üyeliðinizi baþarýlý bir þekilde aktifleþtirdiniz.<br>Tamam'a týklayarak giriþ yapabilirsiniz.</p>",
				function(){window.location.href=window.Sky_AnaSayfa;});
			// Giriþ Yönlendirmesi yapýlacak... (Beni hatýrla seçeneðini unutma...)
			//$("#OnayForm").html("<img src='res/bekle.gif' width='40' height='40' border='0' />");
		}
	);
return false;
}