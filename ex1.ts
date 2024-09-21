// https://qiita.com/torihazi/items/703cb249907293445f2b
type Student = {
  id: number;
  name: string;
  grades: number[];
};

const students: Student[] = [
  { id: 1, name: "田中", grades: [85, 90, 78] },
  { id: 2, name: "鈴木", grades: [92, 86, 98] },
  { id: 3, name: "佐藤", grades: [76, 88, 82] },
];

// 課題: 各学生の平均点を計算し、平均点が85点以上の学生の名前を配列で返す関数を作成してください。

//答え　[ '鈴木' ]

console.log(students.reduce((previous: string[], current: Student):string[] => {
  const average:number = current.grades.reduce((prev:number, cur: number) => cur + prev, 0) / current.grades.length;
  if (average >= 85)
    previous.push(current.name);
  return previous;
}, [])
);
