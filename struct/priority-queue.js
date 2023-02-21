// 优先级队列实现 https://labuladong.github.io/algo/2/23/65/

/**
 * 最大堆
 */
function Max() {
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

/**
 * 最小堆
 */
function Min() {
  const arr = [];
  this.size = 0;

  function parent(i) {
    return ~~(i >> 1);
  }

  function left(i) {
    return i << 1;
  }

  function right(i) {
    return (i << 1) + 1;
  }

  function swap(i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  function less(i, j) {
    return arr[i] < arr[j];
  }

  function swim(index) {
    while (index > 1 && less(index, parent(index))) {
      swap(index, parent(index));
      index = parent(index);
    }
  }

  sink = (index) => {
    while (left(index) <= this.size) {
      let min = left(index);

      if (right(index) <= this.size && less(right(index), min))
        min = right(index);

      if (less(index, min)) break;

      swap(index, min);
      index = min;
    }
  };

  this.insert = (val) => {
    this.size++;

    arr[this.size] = val;
    swim(this.size);
  };

  this.min = () => {
    if (this.size) return arr[1];
  };

  this.delMin = () => {
    swap(1, this.size);

    const min = arr.pop();

    this.size--;

    sink(1);

    return min;
  };
}
