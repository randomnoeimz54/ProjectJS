function time(){
	let data=new Date();
	let hour=data.getHours();
	let minute=data.getMinutes
	hour=pluzZero(hour);
	minute=plusZero(minute)
	console.log(hour, minute, data);
	document.getElementById("time").innerText =Hour

}