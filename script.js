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
