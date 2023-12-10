import * as fsPromise from 'fs/promises';
/*
TASK:
Concat the first and last digit of each line into a number then add all the numbers
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
    
}
main();