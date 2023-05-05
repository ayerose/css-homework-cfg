document.getElementById('btn').addEventListener('click', calculate);
let showResult = document.getElementById('showResult');


function calculate() {
  const num1 = parseFloat(document.getElementById('fnumber').value);
  const num2 = parseFloat(document.getElementById('snumber').value);

  //console.log(num1)
  if (isNaN(num1) || isNaN(num2)) {
    alert('Please make sure to enter only numeric values.');
    return;
  }
  const sum = num1 + num2;
  document.getElementById('result').value = sum;
  showResult.innerText = sum;
}

calculate();
