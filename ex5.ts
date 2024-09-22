// https://qiita.com/torihazi/items/703cb249907293445f2b
type Book = {
  id: string;
  title: string;
  author: string;
  genres: string[];
};

const library: Book[][] = [
  [
    {
      id: "B1",
      title: "1984",
      author: "George Orwell",
      genres: ["SF", "ディストピア"],
    },
    {
      id: "B2",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genres: ["ロマンス", "古典"],
    },
  ],
  [
    {
      id: "B3",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genres: ["小説", "青春"],
    },
    {
      id: "B4",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genres: ["小説", "社会問題"],
    },
  ],
];

// 課題: 指定されたジャンルに属する本のタイトルを全て含む配列を返す関数を作成してください。同じ本が複数回含まれないようにしてください。
//例えば ["小説", "ロマンス"]で渡した結果です。
const func = (library: Book[][], genres: string[]): string[] => {
  return library.flatMap((books: Book[]):Book[] => books)
         .filter((book: Book) => 
                  book.genres.some((genre: string):boolean => genres.includes(genre)))
          .map((book: Book):string => book.title);
}

const func1 = (library: Book[][], genres: string[]): string[] => {
  const genreSet: Set<string> = new Set(genres);
  return library.flatMap((books: Book[]):Book[] => books)
         .filter((book: Book) => 
                  new Set(book.genres).isDisjointFrom(genreSet))
         .map((book: Book):string => book.title);
}

console.log(func1(library, ["小説", "ロマンス"]));

[
  'Pride and Prejudice',
  'The Catcher in the Rye',
  'To Kill a Mockingbird'
]
