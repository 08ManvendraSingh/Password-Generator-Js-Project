function password(){
	var a=document.getElementById('password');
	var sum='';
	var chars='qazxswedcvrbfjgfnjveveioSAJCBWEHVRENVERJN287575837696';
	var charslen=chars.length;
	for(i=1;i<=5;i++){
		sum=sum+chars.charAt(Math.floor(Math.random()*charslen));
	}
	a.value=sum;
}