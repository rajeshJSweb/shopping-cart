function getUpdateProduct(product,price,isIncreassing) {
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
    if (isIncreassing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;

    let productTotal = document.getElementById(product+'-price');
    productTotal.innerText = productNumber * price;

    calculateProduct()
}

//phone increassing decreasssing
document.getElementById('phone-plus').addEventListener('click', function () {
    getUpdateProduct('phone',1250,true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    getUpdateProduct('phone',1250, false)
})

//add event handler increassing decreassing
document.getElementById('case-plus').addEventListener('click', function () {

    getUpdateProduct('case',59,true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    getUpdateProduct('case',59,false);
});

function getInputValue(product) {
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateProduct() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalProductAmount = subTotal + tax;
    console.log(subTotal);

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = Math.round(tax);
    document.getElementById('total-amount').innerText = Math.round(totalProductAmount);
}

//check out

document.getElementById('check-out').addEventListener('click', function () {
    window.location.href = 'address.html';
})