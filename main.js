// Please feel free to change the JS as you see fit! This is just a starting point.

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