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


