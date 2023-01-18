function SortedArray() {
  const arr = [];

  this.insert = (d) => {
    let left = 0,
      right = arr.length;

    while (left < right) {
      const mid = ~~(left + (right - left) / 2);

      if (arr[mid] <= d) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    arr.splice(left, 0, d);
  };

  this.remove = (d) => {
    const index = arr.indexOf(d);

    if (index !== -1) {
      arr.splice(index, 1);
    }
  };

  this.min = () => arr[0];

  this.max = () => arr[arr.length - 1];

  this.length = () => arr.length;

  this.has = (d) => arr.indexOf(d) !== -1;
}
