
function printDuplicates(a) {
    const countMap = {};
    for (let i = 0; i < a.length; i++) {
      if (countMap[a[i]]) {
        countMap[a[i]]++;
      } else {
        countMap[a[i]] = 1;
      }
    }
    for (let i = 0; i < a.length; i++) {
      if (countMap[a[i]] > 1) {
        console.log(a[i]);
      }
    }
  }
  const a = [1, 2, 3, 6, 4, 5, 2];
  printDuplicates(a);