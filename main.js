//---------click and hold to change multiple cells colors feature----------------
let isMouseDown = false;

function changeColors(event) {
  const colorSelectElement = document.getElementById("color-select");
  event.target.style.backgroundColor = colorSelectElement.value;
}

const cells1 = document.getElementsByTagName('td');

for (let i = 0; i < cells1.length; i++) {
  const cell = cells1[i];

  cell.addEventListener("mousedown", function(event) {
    isMouseDown = true;
    changeColors(event);
  });

  cell.addEventListener("mouseover", function(event) {
    if (isMouseDown) {
      changeColors(event);
    }
  });
}

document.addEventListener("mouseup", function () {
  isMouseDown = false;
});
//---------------------------------------------------------

//--------------remove row---------------------------------------------
function removeRow() {
  const tableBody = document.getElementById("tableBody");

  try {
    tableBody.deleteRow(0);
  } catch (error) {
    console.error("No more rows to delete", error.message);
  }
}

const removeRowButton = document.getElementById("remove-row");
removeRowButton.addEventListener("click", removeRow);
// -------------------------------------------------------------


const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

// Task 5 - Color Dropdown Logic
const colorSelection = document.getElementById("color-select");
let colorChoice = colorSelection.value;

colorSelection.addEventListener("change", function () {
  colorChoice = colorSelection.value;
  console.log("User selected:", colorChoice);
});

// Task 6 - Click Cell to Color It
const cells = document.querySelectorAll("td");

Array.from(cells).forEach((cell) => {
  cell.addEventListener("click", () => {
    const selectedColor = colorSelection.value;
    cell.style.backgroundColor = selectedColor;
  });
});

let table = document.querySelector("TABLE");
const addRowBtn = document.getElementById("add-row");
const addColBtn = document.getElementById("add-column");
const clrBtn = document.getElementById("clear-grid");
let rows = document.getElementsByTagName("TR");
let tdCount = rows[0].querySelectorAll("TD").length;

addRowBtn.addEventListener("click", () => {
  let newRow = document.createElement("TR");

  for (let i = 0; i < tdCount; i++)
    newRow.appendChild(document.createElement("TD"));

  table.appendChild(newRow);
});

function fillUnclrdCells() {
  console.log("🟡 fillUnclrdCells triggered");
  const cells = document.querySelectorAll("td");
  const selectedClr = document.getElementById("colorSelector").value;

  cells.forEach((cell) => {
    if (!cell.style.backgroundColor || cell.style.backgroundColor === "white") {
      cell.style.backgroundColor = selectedClr;
    }
  });
}

document.getElementById("fill-grid").addEventListener("click", fillUnclrdCells);

addColBtn.addEventListener("click", () => {
  Array.from(rows).forEach((element) => {
    let newCol = document.createElement("TD");
    element.appendChild(newCol);
  });

  tdCount += 1;
});

clrBtn.addEventListener("click", () => {
  const cells = document.getElementsByTagName("TD");
  Array.from(cells).forEach((cell) => (cell.style.backgroundColor = "white"));
});

function removeColumn() {
  const tableBody = document.getElementById("tableBody");

  try {
    const rows = tableBody.rows;

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      row.deleteCell(0);
    }
  } catch (error) {
    console.error("No more columns to delete", error.message);
  }
}

const removeColumnButton = document.getElementById("remove-column");
removeColumnButton.addEventListener("click", removeColumn);

function fillEveryCell() {
  console.log("🟡 fillEveryCell triggered");
  const cells = document.querySelectorAll("td");
  const selectedClr = document.getElementById("colorSelector").value;

  cells.forEach((cell) => {
    cell.style.backgroundColor = selectedClr;
  });
}
document
  .getElementById("fill-uncolored")
  .addEventListener("click", fillEveryCell);

