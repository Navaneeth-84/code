arr = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 5, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function validate(arr, r, c, val) {
  var res = false;
  for (let i = r - 1; i < arr.length; ++i) {
    // row
    if (arr[r - 1][i] == val) {
      res = true;
    }
  }
  for (let i = 0; i < arr.length; ++i) {
    // col
    if (arr[c - 1][i] == val) {
      res = true;
    }
  }

  if (!res) arr[r - 1][c - 1] = val;
  else console.log(`${val} already exists at arr[${r}][${c}] `);
  console.log(arr);
}

validate(arr, 2, 5, 5);
