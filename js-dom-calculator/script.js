let history = [];
let memory = null;

function checkInputs() {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const buttons = document.querySelectorAll("button");

  const enabled = num1 !== "" && num2 !== "";
  buttons.forEach(btn => {
    if (['+', '−', '×', '÷'].includes(btn.textContent.trim())) {
      btn.disabled = !enabled;
    }
  });
}

function calculate(op) {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const resultEl = document.getElementById('result');

  if (num1 === "" || num2 === ""){
    return;
  }
  const a = parseFloat(num1);
  const b = parseFloat(num2);
  let result;
  let entry;

  if (op === '/' && b === 0) {
    result = "Error: Divide by zero";
    entry = `${a} / ${b} = ${result}`;
  } else {
    switch(op) {
      case '+': 
        result = a + b; 
        break;
      case '-': 
        result = a - b; 
        break;
      case '*': 
        result = a * b; 
        break;
      case '/': 
        result = a / b; 
        break;
    }
    entry = `${a} ${op} ${b} = ${result}`;
  }

  resultEl.textContent = `Result: ${result}`;
  history.push(entry);
  updateHistory();
}

function updateHistory() {
  const list = document.getElementById('historyList');
  list.innerHTML = "";
  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });

  document.getElementById('clearBtn').disabled = history.length === 0;
}

function clearHistory() {
  history = [];
  updateHistory();
}

function storeMemory() {
  const currentResult = document.getElementById('result').textContent.replace("Result: ", "");
  if (currentResult && !currentResult.includes("Error")) {
    memory = currentResult;
    alert("Stored in memory!");
  }
}

function recallMemory() {
  if (memory !== null) {
    document.getElementById('num1').value = memory;
    alert("Memory Recall: " + memory);
  } else {
    alert("Memory is empty.");
  }
}

function clearMemory() {
  memory = null;
  alert("Memory cleared.");
}
