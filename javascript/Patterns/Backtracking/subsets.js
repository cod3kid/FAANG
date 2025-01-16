var subsets = function (nums) {
  let result = [];

  const backtrack = (i, sol) => {
    if (i === nums.length) {
      // We simply need the copy
      result.push([...sol]);
      return;
    }

    // Not picking nums[i]
    backtrack(i + 1, sol);

    // Picking nums[i]
    sol.push(nums[i]);
    backtrack(i + 1, sol);
    sol.pop();
  };

  backtrack(0, []);

  return result;
};

/* 
  
     Soln from Greg Hogg
     https://www.youtube.com/watch?v=UP3dOYJa05s
     
  */
