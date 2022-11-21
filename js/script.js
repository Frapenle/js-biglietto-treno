const km = prompt("Inserire il numero di Km che si vuole percorrere");
const age = prompt("Inserire l'età del passeggero");
const kmPrice = 0.21;
const totPrice = (kmPrice) * (km);
const discountUnder = (20 / 100);
const discountOver_40 = (40 / 100);
const under = ((totPrice) - (totPrice * discountUnder));
const over = ((totPrice) - (totPrice * discountOver_40));

if ((age >=0) && (age <18)) {
    // console.log((totPrice) - (totPrice * discountUnder));
    document.getElementById("total").innerHTML = ("&euro;" + under.toFixed(2));
} else if (age > 65) {
    // console.log((totPrice) - (totPrice * discoutOver_40));
    document.getElementById("total").innerHTML = ("&euro;" + overtoFixed(2));

} else {
    document.getElementById("total").innerHTML = ("&euro;" + totPricetoFixed(2));
}
// console.log(totPrice);

