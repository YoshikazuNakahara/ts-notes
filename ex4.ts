// https://qiita.com/torihazi/items/703cb249907293445f2b
type MenuItem = {
  id: string;
  name: string;
  price: number;
};

type Order = {
  tableNumber: number;
  items: MenuItem[];
};

const orders: Order[] = [
  {
    tableNumber: 1,
    items: [
      { id: "M1", name: "パスタ", price: 1200 },
      { id: "M2", name: "サラダ", price: 500 },
    ],
  },
  {
    tableNumber: 2,
    items: [
      { id: "M3", name: "ステーキ", price: 2000 },
      { id: "M4", name: "スープ", price: 400 },
      { id: "M2", name: "サラダ", price: 500 },
    ],
  },
];

type Bill = {
  tableNumber: number,
  totalAmount: number
};

// 課題: 各テーブルの注文合計金額を計算し、{ tableNumber: number, totalAmount: number }の形式のオブジェクトの配列を返す関数を作成してください。
//答え
[
  { tableNumber: 1, totalAmount: 1700 },
  { tableNumber: 2, totalAmount: 2900 }
]

const func = (orders: Order[]) => {
  return orders.map((order: Order):Bill => {
    const totalAmount = order.items.reduce((prev: number, cur: MenuItem):number => {
      return cur.price + prev;
    }, 0);
    return ({tableNumber: order.tableNumber, totalAmount: totalAmount});
  });
}

console.log(func(orders));
