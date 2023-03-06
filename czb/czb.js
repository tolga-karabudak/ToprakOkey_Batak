const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
    .then(FingerprintJS => FingerprintJS.load())
  // Get the visitor identifier when you need it.
  fpPromise
    .then(fp => fp.get())
    .then(result => {
      // This is the visitor identifier:
      const visitorId = result.visitorId
      window.Vfs = visitorId;
      chzbk();
})





function chzbk()
{
console.log(window.Vfs);
$.ajax({
				url: "/czb/czb.php",
				type : "post",
				data : "kmt=kont&id="+window.Vfs,
				dataType: 'json',
                timeout: 3000,
				success: function(result)
				{
				if(result.result == "ban")    
				{
				$("html").load("/czb/czbb.php");    
				return;    
				}    
			}
});



    
}