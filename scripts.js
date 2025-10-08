const convertButton = document.querySelector(".button-converter");
const currencytSelect = document.querySelector(".currency-select");

function convertCurrency() {
  const inputCurrency = document.querySelector(".input-corrency").value;
  const moneyBrl = document.querySelector(".money-brl");
  const moneyWord = document.querySelector(".money-word");
  console.log(currencytSelect.value);
  console.log(inputCurrency);
  console.log(moneyWord);

  const dolarValue = 5.31;
  const euroValue = 6.21;
  const libraValue = 7.16;
  const bitcoinValue = 663.34;

  if (currencytSelect.value == "dolar") {
    moneyWord.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrency / dolarValue);
  } else if (currencytSelect.value == "euro") {
    moneyWord.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrency / euroValue);
  } else if (currencytSelect.value == "libra") {
    moneyWord.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrency / libraValue);
  } else if (currencytSelect.value == "bitcoin") {
    converted = inputCurrency / bitcoinValue;
    moneyWord.innerHTML = converted.toFixed(6) + " BTC";
  }

  moneyBrl.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrency);
}

function changeCurrency () {
  const dolarUs = document.getElementById("dolar-us");
  const currencyImg = document.querySelector(".currency-img");
  
  if (currencytSelect.value == "dolar") {
    dolarUs.innerHTML = "Dólar Americano";
    currencyImg.src = "./assets/dolar.png";
  } else if (currencytSelect.value == "euro") {
    dolarUs.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  } else if (currencytSelect.value == "libra") {
    dolarUs.innerHTML = "Libra";
    currencyImg.src = "./assets/libra.png";
  } else if (currencytSelect.value == "bitcoin") {
    dolarUs.innerHTML = "BitCoin";
    currencyImg.src = "./assets/bitcoin.png";
  }
  convertCurrency()
}

currencytSelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertCurrency);
