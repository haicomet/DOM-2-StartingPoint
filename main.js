// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

let table = document.querySelector("TABLE")
const addRowBtn = document.getElementById("add-row")
let rows = document.getElementsByTagName("TR")
let tdCount = rows[0].querySelectorAll("TD").length

addRowBtn.addEventListener("click", function addRow(){
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

