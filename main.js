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



