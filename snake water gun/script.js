var  u1s = 0;
var  u2s = 0;

for(let chance = 0; chance<3; chance++){
    const ch = ["S", "W", "G"];

    let u1 = prompt(" S/W/G ?").toUpperCase();

    let check = 0;

    for(let i of ch){
        if (u1==i){
            check = 1;
            break;
        }
        else
            continue;
    }

    if (check == 0)
        alert("!!! Wrong choice entered !!!");

    let u2 = ch[Math.floor(((Math.random()*10 + 1) / 3))];


    if(u1==u2)
        alert(" Its a draw");

    else{
        if (u1 == "S"){
            if (u2 == "W"){
                alert(" You Won");
                u1s++;
            }
            else{
                alert(" You Loose");
                u2s++;
            }
        }
        else if (u1 == "W"){
            if (u2 == "S"){
                alert(" You Loose");
                u2s++;
            }
            else{
                alert(" You Won");
                u1s++;
            }
        }
        else{
            if (u2 == "S"){
                alert(" You Won");
                u1s++;
            }
            else{
                alert(" You Lose");
                u2s++;
            }
        }
    }
}

document.write(` Your Score : ${u1s} \n Computer Score : ${u2s}`);
// document.write(" Computer Score : ", u2s);

if (u1s>u2s)
    document.write(" You Won");
else if (u2s>u1s)
    document.write(" You Loose");
else
    document.write(" Its a draw");