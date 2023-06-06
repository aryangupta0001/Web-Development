const prompt=require("prompt-sync")({sigint:true});

let a = Math.floor(Math.random()*100 + 1);

let ch = 100;

while(ch>0){
    console.log(" Chances left : ", ch, "\n");
    let b = Number.parseInt(prompt(" Guess the no. : "));

    // if (b == NaN){
    //     console.log(" Please enter a no.");
    //     continue;
    // }

    if (b>a)
        console.log("\n Wrong guess\n You guessed a greater no.\n\n");
    else if (b<a)
        console.log("\n Wrong guess\n You guessed a smaller no.\n\n");
    else if (b==a){
        console.log(b);
        console.log(" Hurrrah You guessed the right no.\n your score is", ch);
        break;
    }
    ch--;
}