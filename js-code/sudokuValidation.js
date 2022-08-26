function validateSudokuEntry(arr, row, col, entryVal) {
  /**
   * validates whether entryVal can be inserted at desired position in the sudoku grid
   * precondition: arr is an n x n array representing a sudoku grid
   * post-condition: array 'arr' is modified for an element or undisturbed
   **/
  let isValid = false; // flag varaible ( assume initially that the given entry already exists )
  const userRow = row - 1;
  const userCol = col - 1;
  // traverse the specified row looking for entryVal
  for (let i = userRow; i < arr.length; ++i) {
    if (arr[userRow][i] == entryVal || arr[userCol]) {
      isValid = true; // modify flag
    }
  }
  // traverse the specified column looking for 'entryVal'
  for (let i = 0; i < arr.length; ++i) {
    if (arr[userCol][i] == entryVal) {
      isValid = true; // modify flag
    }
  }
  // print a suitable message to the console
  if (isValid) {
    console.log(`${val} already exists at arr[${row}][${col}] `);
  } else {
    arr[userRow][userCol] = entryVal;
    console.log(
      `${entryVal} is a valid entry and is inserted at arr[${row}][${col}]`
    );
  }
}
