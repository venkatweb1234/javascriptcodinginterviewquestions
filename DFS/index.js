function Dfs(matrix, visited, user, n) {
  visited[user] = true;
  for (let i = 0; i < n; i++) {
    if (matrix[user][i] === "1" && !visited[i]) {
      Dfs(matrix, visited, i, n);
    }
  }
}
function countGroups(matrix) {
  const n = matrix.length;
  const visited = new Array(n).fill(false);
  let groups = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      Dfs(matrix, visited, i, n);
      groups++;
    }
  }
  return groups;
}

const matrix = ["110", "110", "001"];
console.log(countGroups(matrix)); // o/p: 2
