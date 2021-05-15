// Budge Calculator
function budgetCalculator(watch,phone,laptop){

    if(watch < 0 || phone < 0 || laptop < 0){
        return "Product must not be nagetive";
    }
    else{
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    }
}
var totalProductPrices = budgetCalculator(1,1,1); //Enter your product amount
console.log(totalProductPrices);