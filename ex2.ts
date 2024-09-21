// https://qiita.com/torihazi/items/703cb249907293445f2b より抜粋
type Product = {
  id: string;
  name: string;
  category: string;
  stock: number;
};

type Answer = {
    category: string;
    stock: number
}

const inventory: Product[][] = [
  [
    { id: "A1", name: "Tシャツ", category: "衣類", stock: 50 },
    { id: "A2", name: "ジーンズ", category: "衣類", stock: 30 },
  ],
  [
    { id: "B1", name: "スマートフォン", category: "電子機器", stock: 20 },
    { id: "B2", name: "ノートPC", category: "電子機器", stock: 15 },
  ],
];

const ans: Answer[] = [
    { category: "衣類", stock: 80 },
    { category: "電子機器", stock: 35 },
]

// 課題: カテゴリごとの在庫数を合計し、{ category: string, totalStock: number }の形式のオブジェクトの配列を返す関数を作成してください。

console.log(inventory.flatMap((x:Product[]):Product[] => x).reduce((prev: Answer[], cur:Product):Answer[] => 
{
    const p = prev.find(i => i.category === cur.category);
    if (p === undefined)
    {
        return [...prev,  {category: cur.category, stock: cur.stock}]
    }
    p.stock += cur.stock;
    return prev;
}
, []));
