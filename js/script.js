const dropList = document.querySelectorAll(".drop-list select"),
    fromCurreny = document.querySelector(".from select"),
    toCurreny = document.querySelector(".to select"),
    getButton = document.getElementById("btn");
for (let i = 0; i < dropList.length; i++) {
    for (currency_code in country_code) {
        console.log(currency_code);

        if (i == 0) {
            selected = currency_code == 'USD' ? "selected" : "";

        } else if (i == 1) {
            selected = currency_code == "UZS" ? "selected" : ""
        }

        let optionTag = `<option value="${currency_code}">${currency_code}</option>    `

        dropList[i].insertAdjacentHTML('beforeend', optionTag);
    }
}

getButton.addEventListener('click', e => {
    e.preventDefault();
    getExchangeRate();
});

function getExchangeRate() {
    const amount = document.querySelector('.amount input');
    let amountVal = amount.value;
    if (amountVal == '' || amountVal == '0') {
        amount.value = '1'
        amountVal = 1;

    }
    let url = `https://v6.exchangerate-api.com/v6/bf24cb0c08672c6eb6646d7e/latest/${fromCurreny.value}`;
    fetch(url).then(response => console.log(response.json()));
}