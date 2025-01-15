function solveSudoku(board) {
  dfs(board);
}

function dfs(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] !== ".") continue;

      for (let i = 1; i <= 9; i++) {
        const num = i.toString();
        if (isValid(board, row, col, num)) {
          board[row][col] = num;
          if (dfs(board)) return true;
          board[row][col] = ".";
        }
      }
      return false;
    }
  }

  return true;
}

function isValid(board, row, col, num) {
  for (let r = 0; r < 9; r++) {
    if (board[r][col] === num) return false;
  }
  for (let c = 0; c < 9; c++) {
    if (board[row][c] === num) return false;
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) return false;
    }
  }

  return true;
}
