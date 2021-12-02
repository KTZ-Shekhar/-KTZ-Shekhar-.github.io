console.log("This is Custom calculator")
document.body.contentEditable=false;
//input listener
//single function for all input listener is not giving smooth operations and one click is causing multiple inputs so switching back to manual approach(copy and paste) 
let screen = document.getElementById("screen");
screen.addEventListener("blur", (e) => {
    let expr = screen.value;
    let regex = /^[0-9]*[\*\.\/\+-=%]*[0-9]$/g;
    if (regex.test(expr)) {
        expr = eval(expr);
    }
    else {
        expr = "";
    }
    // console.log(expr);
    document.getElementById("screen").value = expr;
})
//AC buttom listener
let allclear = document.getElementById("ac");
allclear.addEventListener("click", () => {
    document.getElementById("screen").value = "";
})
//C buttom listener
let clear = document.getElementById("c");
clear.addEventListener("click", () => {
    let expr = document.getElementById("screen").value;
    expr = expr.substring(0, expr.length - 1);
    document.getElementById("screen").value = expr;
})
//modulo
document.getElementById("modulo").addEventListener("click",()=>{
    document.getElementById("screen").value+="%";
})
//div
document.getElementById("div").addEventListener("click",()=>{
    document.getElementById("screen").value+="/";
})
//add
document.getElementById("add").addEventListener("click",()=>{
    document.getElementById("screen").value+="+";
})
//multi
document.getElementById("multi").addEventListener("click",()=>{
    document.getElementById("screen").value+="*";
})
//minus
document.getElementById("minus").addEventListener("click",()=>{
    document.getElementById("screen").value+="-";
})
//equate
document.getElementById("equate").addEventListener("click",()=>{
    let expr = document.getElementById("screen").value;
    let regex = /^[0-9]*[\*\.\/\+-=%]*[0-9]$/g;
    if (regex.test(expr)) {
        expr = eval(expr);
    }
    else {
        expr = "";
    }
    // console.log(expr);
    document.getElementById("screen").value = expr;
})
//point(.)
document.getElementById("point").addEventListener("click",()=>{
    document.getElementById("screen").value+=".";
})
//0
document.getElementById("0").addEventListener("click",()=>{
    document.getElementById("screen").value+="0";
})
//1
document.getElementById("1").addEventListener("click",()=>{
    document.getElementById("screen").value+="1";
})//2
document.getElementById("2").addEventListener("click",()=>{
    document.getElementById("screen").value+="2";
})//3
document.getElementById("3").addEventListener("click",()=>{
    document.getElementById("screen").value+="3";
})//4
document.getElementById("4").addEventListener("click",()=>{
    document.getElementById("screen").value+="4";
})//5
document.getElementById("5").addEventListener("click",()=>{
    document.getElementById("screen").value+="5";
})//6
document.getElementById("6").addEventListener("click",()=>{
    document.getElementById("screen").value+="6";
})//7
document.getElementById("7").addEventListener("click",()=>{
    document.getElementById("screen").value+="7";
})//8
document.getElementById("8").addEventListener("click",()=>{
    document.getElementById("screen").value+="8";
})//9
document.getElementById("9").addEventListener("click",()=>{
    document.getElementById("screen").value+="9";
})