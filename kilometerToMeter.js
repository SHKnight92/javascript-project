// Kilometer to Meter
function kilometerToMeter(kilometer){

    if (kilometer < 0){
        return "Distance can't be negative";
    }else{
        var meter = kilometer * 1000;
        return meter;
    }

}
var result = kilometerToMeter(-1); //Input your value here ..
console.log(result);