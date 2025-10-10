const convertButton = document.querySelector(".button-converter");
const currencytSelect = document.querySelector(".currency-select");
const selectMainCurrency = document.querySelector(".select-main-currency");

const currencyValues = {
  real: 1,
  dolar: 5.31,
  euro: 6.21,
  libra: 7.16,
  bitcoin: 663.34,
};

const currencyFormats = {
  real: { locale: "pt-BR", currency: "BRL" },
  dolar: { locale: "en-US", currency: "USD" },
  euro: { locale: "de-DE", currency: "EUR" },
  libra: { locale: "en-GB", currency: "GBP" },
  bitcoin: { locale: "en", currency: "BTC" },
};

function convertCurrency() {
  const inputCurrency = parseFloat(document.querySelector(".input-corrency").value);
  const moneyBrl = document.querySelector(".money-brl");
  const moneyWord = document.querySelector(".money-word");

  const fromCurrency = selectMainCurrency.value;
  const toCurrency = currencytSelect.value;

  if (isNaN(inputCurrency)) {
    moneyWord.innerHTML = "Valor inválido";
    moneyBrl.innerHTML = "";
    return;
  }

  // Conversão: primeiro para Real, depois para moeda destino
  const valueInReal = inputCurrency * currencyValues[fromCurrency];
  const convertedValue = valueInReal / currencyValues[toCurrency];

  if (toCurrency === "bitcoin") {
    moneyWord.innerHTML = convertedValue.toFixed(6) + " BTC";
  } else {
    const format = currencyFormats[toCurrency];
    moneyWord.innerHTML = new Intl.NumberFormat(format.locale, {
      style: "currency",
      currency: format.currency,
    }).format(convertedValue);
  }

  // Exibe valor na moeda de origem
  const formatOrigin = currencyFormats[fromCurrency];
  if (fromCurrency === "bitcoin") {
    moneyBrl.innerHTML = inputCurrency.toFixed(6) + " BTC";
  } else {
    moneyBrl.innerHTML = new Intl.NumberFormat(formatOrigin.locale, {
      style: "currency",
      currency: formatOrigin.currency,
    }).format(inputCurrency);
  }
}

function changeMainCurrency() {
  const realBrl = document.getElementById("real-brl")
  const mainCurrencyImg = document.querySelector(".main-currency-img")

   if (selectMainCurrency.value == "dolar") {
    realBrl.innerHTML = "Dólar Americano";
    mainCurrencyImg.src = "./assets/dolar.png";
  } else if (selectMainCurrency.value == "euro") {
    realBrl.innerHTML = "Euro";
    mainCurrencyImg.src = "./assets/euro.png";
  } else if (selectMainCurrency.value == "libra") {
    realBrl.innerHTML = "Libra";
    mainCurrencyImg.src = "./assets/libra.png";
  } else if (selectMainCurrency.value == "bitcoin") {
    realBrl.innerHTML = "BitCoin";
    mainCurrencyImg.src = "./assets/bitcoin.png";
  } else if (selectMainCurrency.value == "real") {
    realBrl.innerHTML = "Real";
    mainCurrencyImg.src = "./assets/real.png";
  }
}


function changeCurrency() {
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
  } else if (currencytSelect.value == "real") {
    dolarUs.innerHTML = "Real";
    currencyImg.src = "./assets/real.png";
  }
}

selectMainCurrency.addEventListener("change", changeMainCurrency);
currencytSelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertCurrency);
