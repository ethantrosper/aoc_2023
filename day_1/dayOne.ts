/*
Given many lines of input find the Calibration value
Calibration value is the sum of all ints concatnated with the int to the right
*/

function concatnate(numOne:  string, numTwo: string) : string{
    return numOne.concat(numTwo);
}

function isNum(char: string) : boolean{
    if(char === " "){
        return false;
    }
    
    var number = Number(char)
    
    if(isNaN(number)){
        return false;
    }
    return true
}

function main(){
    var input = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet";
    var sum = 0;

    const stringOfNumbers: string[] = [];

    for(let i = 0; i < input.length; i++ ){
        var currChar = input.charAt(i);

        if( isNum(currChar) ){
            stringOfNumbers.push(currChar);
        }

    }
    var total = 0;
    for(let i = 0; i < stringOfNumbers.length; i += 2){
        var sNum = concatnate(stringOfNumbers[i], stringOfNumbers[i+1]);
        console.log(sNum);
        total += parseInt(sNum);
    }

    console.log(total);
}
main();