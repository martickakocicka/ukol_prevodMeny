const wageInEur = 20
const kurz = 24.55
var wageInCzk = Math.round (wageInEur * kurz)

console.log (wageInCzk);
//document.body.innerHTML = "<h1> Mzda v korunách: " + wageInCzk + "." + "</h1>"
document.body.innerHTML = `<h1> Mzda v korunách: ${wageInCzk}. </h1>`