const inputReason = document.querySelector("#input-reason");
const inputAmount = document.querySelector("#input-amount");
const inputClear = document.querySelector("#btn-clear");
const inputAdd = document.querySelector("#btn-add");
const expenseList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");

let totalExpenses = 0;

function clear() {
  (inputReason.value = ""), (inputAmount.value = "");
}

inputAdd.addEventListener("click", () => {
  const enteredReason = inputReason.value;
  const enteredAmount = inputAmount.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }

  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": $" + enteredAmount;

  expenseList.appendChild(newItem);

  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

inputClear.addEventListener("click", clear);
