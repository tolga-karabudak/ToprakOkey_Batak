$( document ).ready(function() {
//$("#AnaButonHakkinda").hide();
$('body').append("<style>.RenkAdminAvatarAktifLog,.upimage{cursor:pointer;}</style>");
$(document).on("click","div.RenkAdminAvatarAktifLog",function(e)
{
avonayac();	
});
$(document).on("click","#AdminLogAltKisim #resonay",function()
{
avonayac();
});
//window.onbeforeunload = function(){
//if(C.yH())	return false;
//}
 
$(document).on("click",".RenkAdminLogMesaj",function()
{
var Bdiv = $(this);
var ResV = Bdiv.find("#upimage");
if(ResV.length<1)return false;
var userV = Bdiv.text(); 
userV = userV.split(" ");
if(userV.length<3)return false;
var user = userV[1];
resAc(this,user);
});

$(document).on("click","#ResUpload #DlgButonKapat,#ResUpload #DlgButonIptal",function()
{
$("#ResUpload").addClass("Gizli");
});
$(document).on("click","#ressec",function()
{
$("#ResUpload").find("#ResUploadF").click();	
});
$(document).on("click","#ResUpload #DlgButonTamam",function(){

//console.log(w);
//return;
if($("#ResUploadF").val()!="")
{
$("#upload_form #msf").val(w.RM);
$("#upload_form").submit();
}
});
$('#ResUpload').ajaxForm({
beforeSubmit : function(arr, $form, options){
				if($("#ResUploadF").val() !== ""){
					var filez = $("#ResUploadF")[0].files[0].size;
					filez = (filez / 1024 / 1024).toFixed(2);
				    if(filez>8) {$("#resvalue").html("<span style='color:white'><b>Maksimum 8Mb Kabul edilebilir.</b></span>"); return false;}
								
				}
				else {
					return false;
				}
			},
			beforeSend: function() {
			$("#ressec").attr("disabled","disabled");
$("#ressec").val("Gonderiliyor: %0");			
			},
			uploadProgress: function(event, position, total, percentComplete) {
				var percentVal = percentComplete;
				$("#ressec").val("Gonderiliyor: %"+percentVal);
			},
complete: function(xhr) 
{
if($("#ResUploadF").val()=="") {return false;}	
$("#ResUploadF").val("");
sonuc= xhr.responseText;	
if(sonuc.indexOf("Hata:")>-1)
{
$("#resvalue").html("<span style='color:white'><b>"+sonuc+"</b></span>");	
$("#ResUploadF").val("");
$("#ressec").removeAttr("disabled");
$("#ressec").val("Resim Seç");	
return false;
}
$("#ResUploadF").val("");
$("#resvalue").html("");	
$("#ressec").removeAttr("disabled");
$("#ressec").val("Resim Seç");	
$("#ResUpload").addClass("Gizli");
var hedef = $("#ResUpload").find("#hedef").val();
var target = $("#ResUpload").find("#target").val();
C.A(f([hl, "RGONDER", hedef, target, sonuc]));
},
error: function(err)
{
//console.log(err);	
}	
});
$(document).on("change","#ResUploadF",function(event)
{
$("#resvalue").html($(this).val());	
});

});

function avonayac()
{
g.Vi.N({
baslik: "Resim Onay Ekraný",
icerik: "<iframe src='"+window.AyarIslemBetigi+"?KOMUT=AvatarLog&admin="+encodeURI(w.RM)+"&hash="+w.y9+"' style='height: 80vh !important;max-height:none !important;'></iframe>"
},{
yazi: K9,
def: !0
})	
}
function BaOnay(gdata)
{
var string = "Avatar Resminiz  onaylandý ve güncellendi.";	
$("#AnaTabIcerikDiv  div.YaziTahtasi").append("<div class='RenkAdminLogMesaj Yazilar FontO FontYaziO'><span style='color:white;background-color:black;'> *** "+string+"</div>");	
}
function HaOnay(gdata)
{
var Busf = $("#AnaTabIcerikDiv #LobiNickListeNickStr:contains("+gdata.kull+")");
if(Busf.length>0)
{
Busf.closest(".LobiNickListeTekil").find("#LobiNickListeImg").attr("src",gdata.avatar);	
}
/*
var Puser = $("#AnaTablar #TabBaslik:contains("+gdata.kull+")").closest(".tabButon").index();
console.log(Puser);
 $("#AnaTabIcerikDiv > div").eq(Puser).find("#OzelAvatarImg").attr("src",gdata.avatar);	
*/
}
function resAc(gelen,user)
{
var resK = $(gelen).find(".upimage");
var icerik = resK.attr("src");
//var user=$(gelen).find("#nickID").html();
g.Vi.N({
baslik: user+" - Mesaj Resmi" ,
icerik: '<img src="'+icerik+'" class="upimage" id="upimage" style="max-width:75%;max-height:500px;"/>'
},{
yazi: K9,
def: !0
})	
}
function ResGonder(hedef,target)
{
var rutext="";
var ResS = 	$("#ResUpload");
if(w.r9=="0" && w.lL =="0") {
rutext = "Bu Özelliði Sadece Gold Yetkililer Kullanabilir.<br>";
ResS.find("#ressec").attr("disabled","disabled");
}	
ResS.removeClass("Gizli");	
ResS.find("#resvalue").html(rutext);
ResS.find("#ressec").val("Resim Seç");
ResS.find("#hedef").val(hedef);
ResS.find("#target").val(target);
ResS.find("#ResUpload").removeClass("Gizli");
}