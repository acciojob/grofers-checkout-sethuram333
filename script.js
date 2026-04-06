const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Step 1: Get all price elements
  const prices = document.querySelectorAll(".price");

  let total = 0;

  // Step 2: Loop and calculate total
  prices.forEach((price) => {
    total += Number(price.textContent);
  });

  // Step 3: Create new row and cell
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");

  // Step 4: Set colspan and text
  newCell.colSpan = 2;
  newCell.textContent = `Total Price: Rs ${total}`;

  newRow.appendChild(newCell);

  // Step 5: Append row to table
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);