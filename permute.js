// 输入一组不重复数字，返回他们的全排列
function permute(numbers) {
    const res = [];

    function backTrace(path, set) {
        if (path.length == numbers.length) {
            res.push(path.concat());
            return;
        }

        for (let i = 0; i < numbers.length; i++) {
            if (!set.has(i)) {
                path.push(numbers[i]);
                set.add(i);
                backTrace(path, set);
                path.pop();
                set.delete(i);
            }
        }
    }

    backTrace([], new Set());

    return res;
}

console.log(permute([1, 2, 3, 4]));
