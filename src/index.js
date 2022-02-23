module.exports = function toReadable (number) {
    const massUnit = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const massTenTwelve = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const massTens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    if (number <= 10) {
        result = massUnit[number]
    } else if (number <= 19) {
        result = massTenTwelve[number - 11]
    } else if (number <= 99) {
        if (Number(String(number)[1]) === 0) {
            result = `${massTens[Number(String(number)[0]) - 1]}`
        } else {
            result = massTens[Number(String(number)[0]) - 1] + ' ' + massUnit[Number(String(number)[1])];
        }
    } else if (number <= 999) {
        if (Number(String(number)[1]) === 0 && Number(String(number)[2]) === 0 ) {
            result = massUnit[Number(String(number)[0])] + ' hundred'
        } else if (Number(String(number)[2]) === 0 ) {
            result = massUnit[Number(String(number)[0])] + ' hundred ' + massTens[Number(String(number)[1]) - 1]; 
        } else if (Number(String(number).slice(1)) <= 10) {
            console.log(Number(String(number).slice(1)));
            result = massUnit[Number(String(number)[0])] + ' hundred ' + massUnit[Number(String(number)[2])]; 
        } else if (Number(String(number).slice(1)) <= 19) {
            result = massUnit[Number(String(number)[0])] + ' hundred ' + massTenTwelve[Number(String(number).slice(1)) - 11]; 
        } else if (Number(String(number).slice(2)) === 0) {
            result = massUnit[Number(String(number)[0])] + ' hundred ' + massTens[Number(String(number).slice(2))];
        } else {
            result = massUnit[Number(String(number)[0])] + ' hundred ' + massTens[Number(String(number)[1]) - 1] + ' ' + massUnit[Number(String(number)[2])];
        }
        
    }
    return result;
}

