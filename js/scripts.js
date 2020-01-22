$(document).ready(function(){
  $("form#palindrome").submit(function(event){
    event.preventDefault();
  var input = $("#word").val();
  // input.toLowerCase();

  var reverseInput = input.split("").reverse().join("");
  // reverseInput.toLowerCase();
  if (input.toLowerCase() === reverseInput.toLowerCase()){
    alert("This is a palindrome");
  }
  else{
    alert("This is not a palindrome");
  }
  
  });
});