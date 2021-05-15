//Hotel Cost
function hotelCost(days){
   if(days < 0){
        return "Days must not be negative !";
   } else{
    var roomCost = 0;
    if(days <= 10){

        roomCost = days * 100;

    } else if(days <= 20){

        var firstStepCost = 10 * 100;
        var remainingDays = days - 10;
        var secondStepCost = remainingDays * 80;
        roomCost = firstStepCost + secondStepCost;

    } else{
        
        firstStepCost = 10 * 100;
        secondStepCost = 10 * 80;
        remainingDays = days - 20;
        thirdStepCost = remainingDays * 50;
        roomCost = firstStepCost + secondStepCost + thirdStepCost;
    }
    return roomCost;
   }
}

var totalCost = hotelCost(-1); //Input your value
console.log(totalCost)
