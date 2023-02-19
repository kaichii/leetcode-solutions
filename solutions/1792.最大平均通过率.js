/*
 * @lc app=leetcode.cn id=1792 lang=javascript
 *
 * [1792] 最大平均通过率
 *
 * https://leetcode.cn/problems/maximum-average-pass-ratio/description/
 *
 * algorithms
 * Medium (51.43%)
 * Likes:    119
 * Dislikes: 0
 * Total Accepted:    17.4K
 * Total Submissions: 30.1K
 * Testcase Example:  '[[1,2],[3,5],[2,2]]\n2'
 *
 * 一所学校里有一些班级，每个班级里有一些学生，现在每个班都会进行一场期末考试。给你一个二维数组 classes ，其中 classes[i] =
 * [passi, totali] ，表示你提前知道了第 i 个班级总共有 totali 个学生，其中只有 passi 个学生可以通过考试。
 *
 * 给你一个整数 extraStudents ，表示额外有 extraStudents 个聪明的学生，他们 一定 能通过任何班级的期末考。你需要给这
 * extraStudents 个学生每人都安排一个班级，使得 所有 班级的 平均 通过率 最大 。
 *
 * 一个班级的 通过率 等于这个班级通过考试的学生人数除以这个班级的总人数。平均通过率 是所有班级的通过率之和除以班级数目。
 *
 * 请你返回在安排这 extraStudents 个学生去对应班级后的 最大 平均通过率。与标准答案误差范围在 10^-5
 * 以内的结果都会视为正确结果。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：classes = [[1,2],[3,5],[2,2]], extraStudents = 2
 * 输出：0.78333
 * 解释：你可以将额外的两个学生都安排到第一个班级，平均通过率为 (3/4 + 3/5 + 2/2) / 3 = 0.78333 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：classes = [[2,4],[3,9],[4,5],[2,10]], extraStudents = 4
 * 输出：0.53485
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * classes[i].length == 2
 * 1 i i
 * 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
  const mq = new Max();

  for (const c of classes) {
    mq.insert(c);
  }

  for (let i = 0; i < extraStudents; i++) {
    const [p, t] = mq.delMax();

    mq.insert([p + 1, t + 1]);
  }

  let sum = 0;

  mq.forEach(([p, t]) => {
    sum += p / t;
  });

  return sum / classes.length;
};

function Max() {
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
    const [pi, ti] = arr[i];
    const [pj, tj] = arr[j];
    return (tj - pj) * ti * (ti + 1) > (ti - pi) * tj * (tj + 1);
  }

  function swim(index) {
    while (index > 1 && less(parent(index), index)) {
      swap(index, parent(index));
      index = parent(index);
    }
  }

  sink = (index) => {
    while (left(index) <= this.size) {
      let max = left(index);

      if (right(index) <= this.size && less(max, right(index)))
        max = right(index);

      if (less(max, index)) break;

      swap(index, max);
      index = max;
    }
  };

  this.insert = (val) => {
    this.size++;

    arr[this.size] = val;
    swim(this.size);
  };

  this.max = () => {
    if (this.size) return arr[1];
  };

  this.delMax = () => {
    swap(1, this.size);

    const max = arr.pop();

    this.size--;

    sink(1);

    return max;
  };

  this.forEach = (cb) => {
    for (let i = 1; i <= this.size; i++) {
      cb(arr[i]);
    }
  };
}
// @lc code=end
