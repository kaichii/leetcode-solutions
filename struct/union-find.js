function UF(n) {
  let count = n;
  const parent = new Array(n);

  // 初始化
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  // 找到 x 的根节点
  function find(x) {
    if (parent[x] != x) {
      parent[x] = find(parent[x]);
    }

    return parent[x];
  }

  // 连接 p,q
  this.union = (p, q) => {
    const rootP = find(p);
    const rootQ = find(q);

    if (rootP == rootQ) return;

    parent[rootP] = rootQ;
    count--;
  };

  // 判断 p,q 是否连通
  this.connected = (p, q) => {
    const rootP = find(p);
    const rootQ = find(q);

    return rootP == rootQ;
  };

  // 通量
  this.count = () => count;
}

const uf = new UF(10);

uf.union(1, 2);

uf.union(2, 3);

uf.count(); // 8

uf.connected(1, 3); // true

uf.union(5, 6);

uf.connected(1, 5); // false

uf.union(2, 6);

uf.connected(1, 5); // true
