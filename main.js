// Please feel free to change the JS as you see fit! This is just a starting point.

const root = document.getElementById("root");
root.addEventListener("click", (event) => {
  console.log(event.target.tagName);
  console.log(event.target);
});

//Task 5
const colorSelection = document.getElementById('color-select');//Selects element where user will choose colors
const colorChoice = colorSelection.value;//Where user selects which color 

colorSelection.addEventListener('change' , function(){
  colorChoice = colorSelection.value;
  console.log("User selected:", selectedColor);

})

//Task6
const colorSelect = document.getElementById("color-select"); // Dropdown
const cells = document.querySelectorAll("td"); // All table cells

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const selectedColor = colorSelect.value; // Get selected color
    cell.style.backgroundColor = selectedColor; // Apply color
  });
});



