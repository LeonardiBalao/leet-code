var peopleAwareOfSecret = function (n, delay, forget) {
  const MOD = 1000000007;
  const know = new Deque(); // People who know the secret
  const share = new Deque(); // People eligible to share the secret

  know.pushBack({ day: 1, count: 1 }); // Day 1: one person knows
  let knowCnt = 1, // Total people who know the secret
    shareCnt = 0; // Total people who can share the secret

  for (let i = 2; i <= n; i++) {
    // People who now become eligible to share the secret
    if (!know.isEmpty() && know.front().day === i - delay) {
      const first = know.popFront();
      knowCnt = (knowCnt - first.count + MOD) % MOD;
      shareCnt = (shareCnt + first.count) % MOD;
      share.pushBack(first);
    }

    // People who forget the secret
    if (!share.isEmpty() && share.front().day === i - forget) {
      const first = share.popFront();
      shareCnt = (shareCnt - first.count + MOD) % MOD;
    }

    // New people learn the secret
    if (!share.isEmpty()) {
      knowCnt = (knowCnt + shareCnt) % MOD;
      know.pushBack({ day: i, count: shareCnt });
    }
  }

  return (knowCnt + shareCnt) % MOD; // People who still know the secret
};
