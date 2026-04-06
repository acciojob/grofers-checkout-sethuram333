const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // select all price cells
  const prices = document.querySelectorAll(".price");

  let total = 0;

  // loop through NodeList
  prices.forEach((price) => {
    total += Number(price.textContent);
  });

  // create new row
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");

  const newCell = document.createElement("td");
  newCell.colSpan = 2; // span across both columns
  newCell.textContent = "Total Price: " + total;

  newRow.appendChild(newCell);
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);