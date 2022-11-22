let km = prompt("Inserire il numero di Km che si vuole percorrere");
while (km !== parseFloat(km).toString()) {
    alert("Inserisci solo numeri");
    km = prompt("Inserisci un numero");
}
/*
prompt returns always a string.
"parseFloat().toString()" convert a number to string
if km is not a number then display an alert
*/

let age = prompt("Inserire l'età del passeggero");
while (age !== parseInt(age.toString(1)).toString()) {
    alert("Inserisci solo numeri interi");
    age = prompt("Inserisci un numero");
}

const kmPrice = 0.21;
let totPrice = kmPrice * km;
const discountUnder = (20 / 100);
const discountOver_40 = (40 / 100);
const under = ((totPrice) - (totPrice * discountUnder));
const over = ((totPrice) - (totPrice * discountOver_40));

if ((age >=0) && (age <18)) {
    // console.log((totPrice) - (totPrice * discountUnder));
    totPrice = (under.toFixed(2));
} else if (age > 65) {
    // console.log((totPrice) - (totPrice * discoutOver_40));
    totPrice = (over.toFixed(2));
} 

document.getElementById("total").innerHTML = ("&euro;" + totPrice);

// console.log(totPrice);