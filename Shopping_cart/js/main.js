

var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');


const decreaseNumber = (incdec,itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemval.value);

    if (itemval.value <= 0){

    itemval.value = 0;

    alert('Negative Quantity Not Allowed')

    }else{
    itemval.value = parseInt(itemval.value) - 1;
 
    itemval.style.background = '#fff';
    itemval.style.color = '#000';
    itemprice.innerHTML = parseInt(itemprice.innerHTML) - 400;
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 400;
    total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

const increaseNumber = (incdec,itemprice) => {

    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemval.value);

    if (itemval.value >= 5){

    itemval.value = 5;

    alert('Max 5 Allowed');
    itemval.style.background = 'red';
    itemval.style.color = '#fff';

    }else{
    itemval.value = parseInt(itemval.value) + 1;
    itemprice.innerHTML = parseInt(itemprice.innerHTML) + 400;
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 400;
    total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}