// 优先级队列实现 https://labuladong.github.io/algo/2/23/65/

/**
 * 最大堆
 */
function max() {
  const arr = [];
  this.size = 0;

  function parent(i) {
    return ~~(i / 2);
  }

  function left(i) {
    return i * 2;
  }

  function right(i) {
    return i * 2 + 1;
  }

  swim = (i) => {
    while (i > 1 && less(parent(i), i)) {
      swap(parent(i), i);
      i = parent(i);
    }
  };

  sink = (i) => {
    while (left(i) <= this.size) {
      let max = left(i);
      if (right(i) <= this.size && less(max, right(i))) max = right(i);

      if (less(max, i)) break;

      swap(i, max);
      i = max;
    }
  };

  swap = (i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  less = (i, j) => {
    return arr[i] < arr[j];
  };

  this.max = () => {
    return arr[1];
  };

  this.insert = (e) => {
    this.size++;
    arr[this.size] = e;
    swim(this.size);
  };

  this.delMax = () => {
    const max = arr[1];

    swap(1, this.size);
    arr.pop();

    this.size--;

    sink(1);

    return max;
  };
}

module.exports = {
  max,
};
