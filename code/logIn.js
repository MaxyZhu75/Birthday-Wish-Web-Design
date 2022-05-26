$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;
    var pwd=document.getElementById("pwd").value;
    if(userName=="xiaoyu" &&  pwd=="0523"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="birthdayCake.html";},1500);
	}
	else{
		alert("Try Again Please");
	}
});
