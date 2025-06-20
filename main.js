
// Please feel free to change the JS as you see fit! This is just a starting point.
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

