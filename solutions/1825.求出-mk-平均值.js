/*
 * @lc app=leetcode.cn id=1825 lang=javascript
 *
 * [1825] 求出 MK 平均值
 *
 * https://leetcode.cn/problems/finding-mk-average/description/
 *
 * algorithms
 * Hard (29.48%)
 * Likes:    43
 * Dislikes: 0
 * Total Accepted:    4.8K
 * Total Submissions: 13.9K
 * Testcase Example:  '["MKAverage","addElement","addElement","calculateMKAverage","addElement","calculateMKAverage","addElement","addElement","addElement","calculateMKAverage"]\n' +
  '[[3,1],[3],[1],[],[10],[],[5],[5],[5],[]]'
 *
 * 给你两个整数 m 和 k ，以及数据流形式的若干整数。你需要实现一个数据结构，计算这个数据流的 MK 平均值 。
 * 
 * MK 平均值 按照如下步骤计算：
 * 
 * 
 * 如果数据流中的整数少于 m 个，MK 平均值 为 -1 ，否则将数据流中最后 m 个元素拷贝到一个独立的容器中。
 * 从这个容器中删除最小的 k 个数和最大的 k 个数。
 * 计算剩余元素的平均值，并 向下取整到最近的整数 。
 * 
 * 
 * 请你实现 MKAverage 类：
 * 
 * 
 * MKAverage(int m, int k) 用一个空的数据流和两个整数 m 和 k 初始化 MKAverage 对象。
 * void addElement(int num) 往数据流中插入一个新的元素 num 。
 * int calculateMKAverage() 对当前的数据流计算并返回 MK 平均数 ，结果需 向下取整到最近的整数 。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：
 * ["MKAverage", "addElement", "addElement", "calculateMKAverage",
 * "addElement", "calculateMKAverage", "addElement", "addElement",
 * "addElement", "calculateMKAverage"]
 * [[3, 1], [3], [1], [], [10], [], [5], [5], [5], []]
 * 输出：
 * [null, null, null, -1, null, 3, null, null, null, 5]
 * 
 * 解释：
 * MKAverage obj = new MKAverage(3, 1); 
 * obj.addElement(3);        // 当前元素为 [3]
 * obj.addElement(1);        // 当前元素为 [3,1]
 * obj.calculateMKAverage(); // 返回 -1 ，因为 m = 3 ，但数据流中只有 2 个元素
 * obj.addElement(10);       // 当前元素为 [3,1,10]
 * obj.calculateMKAverage(); // 最后 3 个元素为 [3,1,10]
 * ⁠                         // 删除最小以及最大的 1 个元素后，容器为 [3]
 * ⁠                         // [3] 的平均值等于 3/1 = 3 ，故返回 3
 * obj.addElement(5);        // 当前元素为 [3,1,10,5]
 * obj.addElement(5);        // 当前元素为 [3,1,10,5,5]
 * obj.addElement(5);        // 当前元素为 [3,1,10,5,5,5]
 * obj.calculateMKAverage(); // 最后 3 个元素为 [5,5,5]
 * ⁠                         // 删除最小以及最大的 1 个元素后，容器为 [5]
 * ⁠                         // [5] 的平均值等于 5/1 = 5 ，故返回 5
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 
 * 1 
 * 1 
 * addElement 与 calculateMKAverage 总操作次数不超过 10^5 次。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} k
 */

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

  this.toString = arr.toString;
}

var MKAverage = function (m, k) {
  this.m = m;
  this.k = k;

  // 储存最小的 k 个元素
  this.s1 = new SortedArray();
  // 储存中间的 m - 2k 个元素
  (this.s2 = new SortedArray()), (this.sum2 = 0);
  // 储存最大的 k 个元素
  this.s3 = new SortedArray();

  // 队列
  this.q = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function (num) {
  this.q.push(num);

  if (this.q.length <= this.m) {
    this.s2.insert(num);
    this.sum2 += num;

    // 将 s2 中最小的 k 个元素和 最大的 k 个元素分别移动到 s1 , s2
    if (this.q.length == this.m) {
      while (this.s1.length() < this.k) {
        const min = this.s2.min();
        this.s2.remove(min);
        this.sum2 -= min;
        this.s1.insert(min);
      }

      while (this.s3.length() < this.k) {
        const max = this.s2.max();
        this.s2.remove(max);
        this.sum2 -= max;
        this.s3.insert(max);
      }
    }

    return;
  }

  if (num < this.s1.max()) {
    const max = this.s1.max();
    this.s1.remove(max);
    this.s1.insert(num);
    this.s2.insert(max);
    this.sum2 += max;
  } else if (num > this.s3.min()) {
    const min = this.s3.min();
    this.s3.remove(min);
    this.s3.insert(num);
    this.s2.insert(min);
    this.sum2 += min;
  } else {
    this.s2.insert(num);
    this.sum2 += num;
  }

  const last = this.q.shift();

  if (this.s1.has(last)) {
    const min = this.s2.min();
    this.s2.remove(min);
    this.sum2 -= min;
    this.s1.remove(last);
    this.s1.insert(min);
  } else if (this.s3.has(last)) {
    const max = this.s2.max();
    this.s2.remove(max);
    this.sum2 -= max;
    this.s3.remove(last);
    this.s3.insert(max);
  } else {
    this.s2.remove(last);
    this.sum2 -= last;
  }
};

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function () {
  return this.q.length < this.m ? -1 : ~~(this.sum2 / (this.m - (this.k << 1)));
};

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */

// @lc code=end
