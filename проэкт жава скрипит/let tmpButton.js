let tmpButton = False
let MoneyBusket = document.querySelector (".basket_price")
let bank = 0
let priceBasket = document.querySelector (".sp").innerHTML
const basket_buy = document.getElementById("btn")
console.log(priceBascet)
if (tmpButton) {
	basket_buy.style.background = "red"
	basket_buy.innerHTML= "Купить"
	tmpButton = False
	bank += priceBasket
}