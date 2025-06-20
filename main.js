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
