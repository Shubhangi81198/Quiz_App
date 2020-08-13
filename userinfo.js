let name=sessionStorage.getItem("Name");
let points=sessionStorage.getItem("Score");
let user_time=sessionStorage.getItem("Time");
document.querySelector(".name").innerHTML=name;
document.querySelector(".points").innerHTML=points;
document.querySelector(".time").innerHTML=user_time;