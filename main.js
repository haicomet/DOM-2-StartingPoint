// remove row feature-------------------------------
function removeRow() {
  const tableBody = document.getElementById('tableBody');

  try {
    tableBody.deleteRow(0); 
  } catch (error) {
    console.error("No more rows to delete", error.message); 
  }
}

const removeRowButton = document.getElementById("remove-row");
removeRowButton.addEventListener("click", removeRow); 
//--------------------------------------------------


const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

let table = document.querySelector("TABLE")
const addRowBtn = document.getElementById("add-row")
const addColBtn = document.getElementById("add-column")
const clrBtn = document.getElementById("clear-grid")
let rows = document.getElementsByTagName("TR")
let tdCount = rows[0].querySelectorAll("TD").length

addRowBtn.addEventListener("click", () => {
    let newRow = document.createElement("TR")

    for (let i = 0; i < tdCount; i++)
      newRow.appendChild(document.createElement("TD"))
    
    table.appendChild(newRow)    
})

function fillUnclrdCells(){
    console.log("🟡 fillUnclrdCells triggered");
    const cells = document.querySelectorAll("td");
    const selectedClr = document.getElementById("colorSelector").value;

    cells.forEach(cell=>{
        if(!cell.style.backgroundColor||cell.style.backgroundColor === "white" ){
            cell.style.backgroundColor = selectedClr;
        }
    });
} 
document.getElementById("fill-grid").addEventListener("click", fillUnclrdCells);

addColBtn.addEventListener("click", () => {
  
  Array.from(rows).forEach(element => {
    let newCol = document.createElement("TD")
    element.appendChild(newCol)
  })
  
  tdCount += 1
  
})

clrBtn.addEventListener("click", () => {
  cells = document.getElementsByTagName("TD")
  Array.from(cells).forEach((cell) => cell.style.backgroundColor = "white")
})


//-----remove column feature---------------------------- 
function removeColumn() {
  const tableBody = document.getElementById('tableBody');
  
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
//--------------------------------------------------


// click and hold to change multiple cells colors feature----
let isMouseDown = false; 

function changeColors(event) {
  const colorSelectElement = document.getElementById("color-select");
  event.target.style.backgroundColor = colorSelectElement.value;
}

const cells = document.getElementsByTagName("td");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("mousedown", function(event) {
    isMouseDown = true;
    changeColors(event); 
  });

  cells[i].addEventListener("mouseover", function(event) {
    if (isMouseDown) {
      changeColors(event);
    }
  });
}

document.addEventListener("mouseup", function () {
  isMouseDown = false;
});

//---------------------------------------------------------
