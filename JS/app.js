function updatePhone(isIncreassing) {
    const caseInput = document.getElementById('case-input');
    let caseInputTotal = caseInput.value;

    if (isIncreassing == true) {
        caseInputTotal = parseFloat(caseInputTotal) + 1;
    }
    else if (isIncreassing > 0) {
        caseInputTotal = parseFloat(caseInputTotal) - 1;
    }

    caseInput.value = caseInputTotal;

    let casePrice = document.getElementById('case-price');
    casePrice.innerText = caseInputTotal * 59;
    /*
    const currentCasePriceText = casePrice.innerText;
    let currentCasePrice = parseFloat(currentCasePriceText);
    const caseTotal = caseInput.value * 60;
    casePrice.innerText = caseTotal; */
}

document.getElementById('case-plus').addEventListener('click', function () {
    
    /* const caseInput = document.getElementById('case-input');
    const caseInputTotal = caseInput.value;
    caseInput.value = parseFloat(caseInputTotal) + 1; */
    updatePhone(true);  
});

document.getElementById('case-minus').addEventListener('click', function () {
    
    const caseInput = document.getElementById('case-input');
    const caseInputTotal = caseInput.value;
    if (caseInputTotal > 0) {
        caseInput.value = parseFloat(caseInputTotal) - 1;
        let casePrice = document.getElementById('case-price');
        const currentCasePriceText = casePrice.innerText;
        let currentCasePrice = parseFloat(currentCasePriceText);

        const caseTotal = caseInput.value * 60;
        casePrice.innerText = caseTotal;
    }

  
});