export function MonotonicQueue() {
  array = [];

  this.push = (n) => {
    if (array.length > 0)
      while (array[array.length - 1] < n) {
        array.pop();
      }

    array.push(n);
  };

  this.max = () => {
    return array[0];
  };

  this.pop = (n) => {
    if (n == array[0]) {
      array.shift();
    }
  };
}
