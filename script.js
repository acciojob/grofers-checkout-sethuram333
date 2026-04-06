const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const prices = document.querySelectorAll(".prices");

let total = 0;

prices.forEach((price) => {
  total += Number(price.textContent);
});

const old = document.getElementById("ans");
if (old) old.remove();

const table = document.querySelector("table");
const row = document.createElement("tr");

const cell = document.createElement("td");
cell.colSpan = 2;
cell.id = "ans";
cell.textContent = total;

row.appendChild(cell);
table.appendChild(row);
  
};

getSumBtn.addEventListener("click", getSum);

