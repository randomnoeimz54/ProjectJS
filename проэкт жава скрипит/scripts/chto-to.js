const ddr = document.createElement("li")
ddr.classList.add("gds_stroka")
let spisok = document.querySelector(".gds_spisok")


let zagl = document.createElement("h1")
let Zagolovok = document.createTextNode("товар1")
zagl.appendChild(Zagolovok)
let picture = document.createElement("img")
picture.src = "img/uuu.jpg"
picture.style.width = "200px"
let stoimost = document.createElement("p")
let cena = document.createTextNode("он бесценен")
stoimost.appendChild(cena)
let pervuy_li = document.querySelectorAll(".gds_stroka")[0]
function TTU(){
	console.log("savadvda")
	spisok.appendChild(ddr)
	ddr.appendChild(zagl)
	ddr.appendChild(picture)
	ddr.appendChild(stoimost)
	pervuy_li.classList.add("ubrat")
}