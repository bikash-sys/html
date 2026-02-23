const inel = document.getElementById("input");
const ereel = document.getElementById("error");
const resel = document.getElementById("result");
let errorTime;
let resultTime;
function updateResults() {
  if (inel.value <= 0 || isNaN(inel.value)) {
    ereel.innerText = "Please enter a valid number!";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      ereel.innerText = "";
      inel.value = "";
    }, 2000);
  } else {
    resel.innerText = (+inel.value / 2.2).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resel.innerText = "";
      inel.value = "";
    }, 10000);
  }
}

inel.addEventListener("input", updateResults);