let btn = document.getElementById('btn')
let aktive = false

function buy(){
	if (aktive){
		btn.style.background = 'pink'
		btn.innerHTML = 'ааавотфигтебе'
		aktive = false

	} else{
		btn.style.background = 'red'
		btn.innerHTML = 'купить'
		aktive = true
	}
}
