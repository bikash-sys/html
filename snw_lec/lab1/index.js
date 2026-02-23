const btnEl = document.getElementById("calculate");
const bill = document.getElementById("bill");
const tip= document.getElementById("tip");
const total = document.getElementById("total");

function billbana() {
  const billv = bill.value;
  const tipv = tip.value;
  const totalv = billv * (1 + tipv / 100);
  total.innerText = totalv;
}

btnEl.addEventListener("click", billbana);