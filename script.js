function fillEveryCell(){
    console.log("🟡 fillEveryCell triggered");
    const cells = document.querySelectorAll("td");
    const selectedClr = document.getElementById("colorSelector").value;

    cells.forEach(cell =>{
        cell.style.backgroundColor =selectedClr;
    });
}
document.getElementById("fill-uncolored").addEventListener("click", fillEveryCell);

