/*function moneyBox(coins) {
let saveCoins = 0; 
saveCoins += coins; 
console.log('My Money Box $' + saveCoins);
}

saveCoins(5);
saveCoins(5);
*/

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins
        console.log('MoneyBox $' + saveCoins);
        
    }
    return countCoins
}

const myMoneyBox = moneyBox()

myMoneyBox(5)
myMoneyBox(5)
myMoneyBox(15)

let totalMonedas = 0

function monedasTotales(monedas) {
    return totalMonedas =+ monedas 
}

monedasTotales(5)

console.log(totalMonedas);

monedasTotales(10)

console.log(totalMonedas);