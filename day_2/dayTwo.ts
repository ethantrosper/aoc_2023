// Bag contains 12 red, 13 green, 14 blue
// Each Game an elf will pull a set of colored cubes
// every semicolon the bag is filled back to the original state
// Determine the sum of IDs of possible games.

import * as fsPromise from 'fs/promises';

async function main(){
    const file = await fsPromise.open('inputs/input.txt', 'r');
    var game: number = 0;
    var sum: number = 0;
    const red: number = 12;
    const green: number = 13;
    const blue: number = 14;
    //Looping through each line in the file
    for await (const line of file.readLines()){
        game++;
        var rt: number = 0;
        var gt: number = 0; 
        var bt: number = 0;
        //removing game number from the line
        var gameSplit: string[] = line.split(":");
        //spliting the line by replacement is this nessecary?
        var lineArr: string[] = gameSplit[1].split(";");
        //looping through each replacement
        for(let item of lineArr){
            //looping through each number string combo
            var commaSplit: string[] = item.split(",");
            //console.log(commaSplit);
            commaSplit.forEach(function(iter){
                var temp: string = iter.trim();
                var tempA: string[] = temp.split(" ");
                switch (tempA[1]){
                    case "red":
                        if(parseInt(tempA[0]) > rt)
                            rt = parseInt(tempA[0]);
                        break;
                    case "green":
                        if(parseInt(tempA[0]) > gt)
                            gt = parseInt(tempA[0]);
                        break;
                    case "blue":
                        if(parseInt(tempA[0]) > bt)
                            bt = parseInt(tempA[0]);
                        break;
                }
            });
            
        }
        console.log("Game: ", game, "RT: ", rt, "GT: ", gt, "BT: ", bt);
        if(rt > red || gt > green || bt > blue){
            
        } else {
            console.log("Is this ever called?");
            sum += game;
        }
        rt = 0; gt = 0; bt = 0;
    }
    console.log(sum);

}

main();