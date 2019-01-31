var disp = document.getElementById("disp");

function value1(n){ 
disp.innerHTML += n ;
}

function ans(){
x = eval(disp.innerHTML);
disp.innerHTML = x;
}

function clc(){
disp.innerHTML='';
}


document.getElementById("1").addEventListener("click",function(){ value1(1); });
document.getElementById("2").addEventListener("click",function(){ value1(2); });
document.getElementById("3").addEventListener("click",function(){ value1(3); });
document.getElementById("4").addEventListener("click",function(){ value1(4); });
document.getElementById("5").addEventListener("click",function(){ value1(5); });
document.getElementById("6").addEventListener("click",function(){ value1(6); });
document.getElementById("7").addEventListener("click",function(){ value1(7); });
document.getElementById("8").addEventListener("click",function(){ value1(8); });
document.getElementById("9").addEventListener("click",function(){ value1(9); });
document.getElementById("0").addEventListener("click",function(){ value1(0); });
document.getElementById("dec").addEventListener("click",function(){ value1('.'); });

document.getElementById("add").addEventListener("click",function(){ value1('+'); });
document.getElementById("subtr").addEventListener("click",function(){ value1('-'); });
document.getElementById("mult").addEventListener("click",function(){ value1('*'); });
document.getElementById("division").addEventListener("click",function(){ value1('/'); });


document.getElementById("clear").addEventListener("click",function(){ clc(); });
document.getElementById("ans").addEventListener("click",function(){ ans(); });

