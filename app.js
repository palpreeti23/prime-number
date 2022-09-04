const inputBtn = document.querySelector("#input-btn");
const checkBtn = document.querySelector("#check-btn");
const outputDiv = document.querySelector("#output-div");


function checkPrimeNumber(num){

  const input = inputBtn.value;

  if(input !== ""){

    var factor = 1 ;
    for( i = 2 ; i < input ; i++)
    {
    if ( input % i == 0)
    factor = 0 ;
    }
    if(factor){
      outputDiv.innerText = "this number is a prime"
    }
    else
    {
      outputDiv.innerText = "this number is not a prime"
    }
  }
  else{

    outputDiv.innerText = "please fill the input field first!!"
  }
  
  }



checkBtn.addEventListener("click", checkPrimeNumber);