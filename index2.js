let speed = parseInt(prompt("Enter the speed :"));
let start = 70;
let end = 130;
let increment = 5;

function calculatePoint(start,end,increment,speed){ 
    let message ="";
    if (speed < start) {
message = "okay";
    }else if (speed > end){
        message = "Invoke lincenece";
    }else {
let point = math.celi ((speed - start)) / increment
if ((speed - start) % increment == 0){
    point += 1;
}
message = "point" + points;
    }
    console.log(message);
    alert(message);
} 


calculatePoint(start,end,increment,speed);