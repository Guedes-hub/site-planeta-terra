


const convertButton = document.querySelector(".convert-button")  //Button
const currencySelectPrime = document.querySelector(".currency-select-prime") //Converter de 
const currencySelect = document.querySelector(".currency-select")  //*Converter para 

function convertValues() { //Função que faz a conversão das moedas




  const inputCurrencyValue = document.querySelector(".input-currency").value; //Digite o valor desejado - value pega o valor digitado 
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// Valor digitado 
  const currencyValueConverted = document.querySelector(".currency-value") //Resultado da operação 




  //Constatntes das moedas 
  const dolarToday = 5.5683
  const euroToday = 6.4767
  const libraToday = 7.467
  const bitcoinToday = 661900
  const realToday = 1

  // Real para outras moedas 
  if (currencySelectPrime.value === "Real") {
    currencyValueToConvert.innerHTML = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue);

    if (currencySelect.value === "dolar") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue / dolarToday);
    } else if (currencySelect.value === "Euro") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue / euroToday);
    } else if (currencySelect.value === "Libra") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(inputCurrencyValue / libraToday);
    } else if (currencySelect.value === "Bitcoin") {
      currencyValueConverted.innerHTML = ((inputCurrencyValue * realToday) / bitcoinToday).toFixed(6) + " BTC";
    } else if (currencySelect.value === "Real") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue / realToday);
    }

  }

  // Dólar para outras moedas 
  if (currencySelectPrime.value === "dolar") {
    currencyValueToConvert.innerHTML = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(inputCurrencyValue);

    if (currencySelect.value === "Real") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * dolarToday);
    } else if (currencySelect.value === "Euro") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format((inputCurrencyValue * dolarToday) / euroToday);
    } else if (currencySelect.value === "Libra") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format((inputCurrencyValue * dolarToday) / libraToday);
    } else if (currencySelect.value === "Bitcoin") {
      currencyValueConverted.innerHTML = ((inputCurrencyValue * dolarToday) / bitcoinToday).toFixed(6) + " BTC";
    } else if (currencySelect.value === "dolar") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format((inputCurrencyValue * dolarToday) / dolarToday);
    }
  }

  // Euro para outras moedas 
  if (currencySelectPrime.value === "Euro") {
    currencyValueToConvert.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(inputCurrencyValue);

    if (currencySelect.value === "Real") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * euroToday);
    } else if (currencySelect.value === "dolar") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format((inputCurrencyValue * euroToday) / dolarToday);
    } else if (currencySelect.value === "Libra") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format((inputCurrencyValue * euroToday) / libraToday);
    } else if (currencySelect.value === "Bitcoin") {
      currencyValueConverted.innerHTML = ((inputCurrencyValue * euroToday) / bitcoinToday).toFixed(6) + " BTC";
    } else if (currencySelect.value === "Euro") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format((inputCurrencyValue * euroToday) / euroToday);
    }
  }

  // Libra para outras moedas 
  if (currencySelectPrime.value === "Libra") {
    currencyValueToConvert.innerHTML = Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(inputCurrencyValue);

    if (currencySelect.value === "Real") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * libraToday);
    } else if (currencySelect.value === "dolar") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format((inputCurrencyValue * libraToday) / dolarToday);
    } else if (currencySelect.value === "Euro") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format((inputCurrencyValue * libraToday) / euroToday);
    } else if (currencySelect.value === "Bitcoin") {
      currencyValueConverted.innerHTML = ((inputCurrencyValue * libraToday) / bitcoinToday).toFixed(6) + " BTC";
    } else if (currencySelect.value === "Libra") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format((inputCurrencyValue * libraToday) / libraToday);
    }
  }

  // Bitcoin para outras moedas 
  if (currencySelectPrime.value === "Bitcoin") {
    currencyValueToConvert.innerHTML = (inputCurrencyValue + " BTC");

    if (currencySelect.value === "Real") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue * bitcoinToday);
    } else if (currencySelect.value === "dolar") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format((inputCurrencyValue * bitcoinToday) / dolarToday);
    } else if (currencySelect.value === "Euro") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format((inputCurrencyValue * bitcoinToday) / euroToday);
    } else if (currencySelect.value === "Libra") {
      currencyValueConverted.innerHTML = Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format((inputCurrencyValue * bitcoinToday) / libraToday);
    } else if (currencySelect.value === "Bitcoin") {
      currencyValueConverted.innerHTML = ((inputCurrencyValue * bitcoinToday) / bitcoinToday).toFixed(6) + " BTC";
    }
  }
}


//Função da div acima - Troca imagem e nome de moeda
function changeCurrencyPrime() {

  const currencyYes = document.querySelector(".currency-yes")// Classe imagem acima
  const currencyNew = document.getElementById("currency-new")// Classe nome da moeda acima

  if (currencySelectPrime.value == "Real") {
    currencyNew.innerHTML = "Real"
    currencyYes.src = "./assets-conversor/real.png/java-script/"
  }

  if (currencySelectPrime.value == "dolar") {
    currencyNew.innerHTML = "Dólar americano"
    currencyYes.src = "./assets-conversor/dolar.png/java-script/"
  }

  if (currencySelectPrime.value == "Euro") {
    currencyNew.innerHTML = "Euro"
    currencyYes.src = "./assets-conversor/logo-euro.png/java-script/"
  }

  if (currencySelectPrime.value == "Libra") {
    currencyNew.innerHTML = "Libra"
    currencyYes.src = "./assets-conversor/libra 1.png/java-script/"
  }

  if (currencySelectPrime.value == "Bitcoin") {
    currencyNew.innerHTML = "Bitcoin"
    currencyYes.src = "./assets-conversor/bitcoin 1.png/java-script/"
  }



  convertValues()//Executa a função Converte Valores




}


//Função da div abaixo - Troca imagem e nome de moeda
function changeCurrency() {

  const currencyName = document.getElementById("currency-name") //Classe nome moeda abaixo
  const currencyImage = document.querySelector(".currency-img") //Classe imagem abaixo



  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets-conversor/dolar.png"
  }


  if (currencySelect.value == "Real") {
    currencyName.innerHTML = "Real"
    currencyImage.src = "./assets-conversor/real.png"



  }

  if (currencySelect.value == "Euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets-conversor/logo-euro.png"

  }

  if (currencySelect.value == "Libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets-conversor/libra 1.png"

  }

  if (currencySelect.value == "Bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets-conversor/bitcoin 1.png"

  }

  convertValues()//Executa a função Converte Valores


}

currencySelectPrime.addEventListener("change", changeCurrencyPrime)// Ao mudar a moeda execute a função
currencySelect.addEventListener("change", changeCurrency)// Ao mudar a segunda moeda execute a função

convertButton.addEventListener("click", convertValues)//Ao clicar no botão execute a função "convertValues"