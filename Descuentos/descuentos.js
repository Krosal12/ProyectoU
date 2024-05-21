function calculateDiscount() {
    var price = parseFloat(document.getElementById("priceInput").value);
    var discount = parseFloat(document.getElementById("discountInput").value);

    if (isNaN(price) || isNaN(discount) || price < 0 || discount < 0 || discount > 100) {
        document.getElementById("display").innerHTML = "Por favor, ingresa valores válidos.";
        return;
    }

    var discountAmount = (price * discount) / 100;
    var finalPrice = price - discountAmount;

    document.getElementById("display").innerHTML = "Precio final: Q" + finalPrice.toFixed(2);
}