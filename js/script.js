var numeri;
var fizz = "Fizz";
var buzz = "Buzz";
var fb = "FizzBuzz";

for(var i = 1; i <= 100; i++){
  if(i % 3 == 0 && i % 5 == 0){
    document.getElementById("lista").innerHTML += "<li>" + fizz + buzz + "</li>";
  }else if(i % 3 == 0){
    document.getElementById("lista").innerHTML += "<li>" + fizz + "</li>";
  }else if(i % 5 == 0){
    document.getElementById("lista").innerHTML += "<li>" + buzz + "</li>";
  }else{
    document.getElementById("lista").innerHTML += "<li>" + i + "</li>";
  }
  console.log(i);
}
