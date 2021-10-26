function coinChange(amount, coins) {
    function dp(n) {
        if (n === 0) return 0;
        if (n < 0) return -1;

        let res = +Infinity;

        for (const c of coins) {
            const sub = dp(n - c);
            if (sub === -1) continue;
            res = Math.min(res, sub + 1);
        }
        return res;
    }

    return dp(amount);
}

function coinChangeV2(amount, coins) {
    const memo = Object.create(null);
    function dp(n) {
        if (typeof memo[n] === "number") return memo[n];

        if (n === 0) return 0;
        if (n < 0) return -1;

        let res = +Infinity;

        for (const c of coins) {
            const sub = dp(n - c);
            if (sub === -1) continue;
            res = Math.min(res, sub + 1);
        }

        memo[n] = res;

        return memo[n];
    }

    return dp(amount);
}

function coinChangeV3(amount, coins) {
    const dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (let i = 0; i < dp.length; i++) {
        for (const c of coins) {
            if (i - c < 0) continue;
            dp[i] = Math.min(dp[i], dp[i - c] + 1);
        }
    }

    return dp[amount] === dp[amount + 1] ? -1 : dp[amount];
}
