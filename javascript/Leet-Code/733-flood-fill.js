/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const initialColor = image[sr][sc];

  if (initialColor === color) return image;

  const dfs = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= image.length ||
      j >= image[0].length ||
      image[i][j] !== initialColor
    )
      return;

    image[i][j] = color;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  dfs(sr, sc);

  return image;
};
