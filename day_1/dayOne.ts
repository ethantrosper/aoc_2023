import * as fsPromise from 'fs/promises';
/*
TASK:
Concat the first and last digit of each line into a number then add all the numbers
*/

function concatnate(numOne: number, numTwo: number): number {
    return parseInt(numOne.toString().concat(numTwo.toString()));
}

function isNum(char: string): boolean {
    if (char === " ") {
        return false;
    }

    var number = Number(char)

    if (isNaN(number)) {
        return false;
    }
    return true
}

function stringToNum(s: string): number {
    var strNum = -1;
    for (let i = 0; i < s.length; i++) {
        var temp = s.slice(i, s.length);
        switch (temp) {
            case "one":
                strNum = 1;
                break;
            case "two":
                strNum = 2;
                break;
            case "three":
                strNum = 3;
                break;
            case "four":
                strNum = 4;
                break;
            case "five":
                strNum = 5;
                break;
            case "six":
                strNum = 6;
                break;
            case "seven":
                strNum = 7;
                break;
            case "eight":
                strNum = 8;
                break;
            case "nine":
                strNum = 9;
                break;
            default:
        }
    }
    if (strNum === -1) {
        console.log(`${s} does not contain a valid number`);
    }
    return strNum;
}

function isStringANum(s: string): boolean {
    for (let i = 0; i < s.length; i++) {
        var temp = s.slice(i, s.length);
        switch (temp) {
            case "one":
            case "two":
            case "three":
            case "four":
            case "five":
            case "six":
            case "seven":
            case "eight":
            case "nine":
                return true;
            default:
        }
    }
    return false;
}

async function main() {
    const file = await fsPromise.open('inputs/input.txt', 'r');

    var sum = 0
    var arrNumbers: number[] = [];
    var s = "";
    for await (const line of file.readLines()) {
        for (let i = 0; i < line.length; i++) {
            if (isNum(line[i])) {
                arrNumbers.push(parseInt(line[i]));
                s = "";
            } else {
                s += line[i];
            }

            if (isStringANum(s)) {
                arrNumbers.push(stringToNum(s));
            }
        }
        sum += concatnate(arrNumbers[0], arrNumbers[arrNumbers.length - 1]);
        arrNumbers = [];

    }
    console.log(sum);
}
main();