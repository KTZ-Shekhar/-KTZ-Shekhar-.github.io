console.log("This is a javaScript file")
//declaring a global array
let box = new Set();
let user = new Set();
let bot = new Set();
i = 0;
//wINNER CHECK FUNCTION
function winner() {
    //getting values
    u1 = document.getElementById("1").innerText;
    u2 = document.getElementById("2").innerText;
    u3 = document.getElementById("3").innerText;
    u4 = document.getElementById("4").innerText;
    u5 = document.getElementById("5").innerText;
    u6 = document.getElementById("6").innerText;
    u7 = document.getElementById("7").innerText;
    u8 = document.getElementById("8").innerText;
    u9 = document.getElementById("9").innerText;
    // console.log(u1);
    console.log(user);
    if ((u1 == "X" && u2 == "X" && u3 == "X") || (u4 == "X" && u5 == "X" && u6 == "X") || (u7 == "X" && u8 == "X" && u9 == "X")
        || (u1 == "X" && u4 == "X" && u7 == "X") || (u2 == "X" && u5 == "X" && u8 == "X") || (u3 == "X" && u6 == "X" && u9 == "X")
        || (u1 == "X" && u5 == "X" && u9 == "X") || (u3 == "X" && u5 == "X" && u7 == "X")) {
        document.getElementById("winner").style.display = "block";
        document.getElementById("winner").innerHTML = "<p> YOU -- WON </p>";
        console.log("you won");
        setTimeout(() => {
            location.reload();
        }, 6000);
    }

    if ((u1 == "O" && u2 == "O" && u3 == "O") || (u4 == "O" && u5 == "O" && u6 == "O") || (u7 == "O" && u8 == "O" && u9 == "O") ||
        (u1 == "O" && u4 == "O" && u7 == "O") || (u2 == "O" && u5 == "O" && u8 == "O") || (u3 == "O" && u6 == "O" && u9 == "O") ||
        (u1 == "O" && u5 == "O" && u9 == "O") || (u3 == "O" && u5 == "X" && u7 == "O")) {
        document.getElementById("winner").style.display = "block";
        document.getElementById("winner").innerHTML = "<p> YOU -- LOSS</p>";
        console.log("you loss");
        setTimeout(() => {
            location.reload();
        }, 6000);
    }
    console.log(bot);
}
//check function
function check(id) {
    //converting id string into number
    id = Number(id);
    if (document.getElementById(id).innerText == "") {
        document.getElementById(id).innerText = "X";
        box.add(id);
        user.add(id);
        winner();
        document.getElementById("notice").innerText = "COMPUTER'S TURN";
        setTimeout(() => {
            computer();
        }, 500);
    }
    else { document.getElementById("notice").innerText = "CLICK SOMEWHERE ELSE"; }

}
//function to inject the symbols by computer
function computer() {
    while (true) {
        //function to generate the random number between 1-9 as there aree 9 boxes in board
        comp = Math.abs(parseInt((10 * Math.random()) - 1));
        comp += 1;
        console.log(comp);
        if (box.has(comp)) {
            continue;
        } else {
            if (document.getElementById(comp).innerText == "") {
                document.getElementById(comp).innerText = "O";
                bot.add(comp);
                winner();
            }
            else {
                if (i < 3) {
                    computer();
                    i = i + 1;
                }
                else {
                    winner();
                    break;
                }
            }
        }
        document.getElementById("notice").innerText = "YOUR TURN";
        break;
    }
}

