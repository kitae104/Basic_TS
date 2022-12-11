// 제네릭 (Generics)
// 클로져를 이용한 함수
function simpleState(initial: string): [() => string, (v: string) => void] 
{
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [st1getter, st1setter] = simpleState("aaa");
console.log(st1getter());
st1setter("bbb");
console.log(st1getter());

// 제네릭 함수
function simpleState2<T>(initial: T): [() => T, (v: T) => void] 
{
  let str: T = initial;
  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}

const [st2getter, st2setter] = simpleState2<string|null>(null);
console.log(st2getter());
st2setter("str");
console.log(st2getter());

// 사용할 타입을 인터페이스로 추가 
// 제네릭은 타입스크립트에서 있어 클래스, 함수, 인터페이스 등 아무 곳에 적용할 수 있음
interface Rank<RankItem> {
  item: RankItem,
  rank: number,
}

function ranker<RankItem>(items:RankItem[], rank:(v:RankItem) => number): RankItem[]
{  
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Squid {
  name: string,
  hp: number,
}

const squidGame: Squid[] = [
  {
    name: "Player456",
    hp: 100,
  },
  {
    name: "Player80",
    hp: 80,
  },
  {
    name: "Player218",
    hp: 90,
  }
]

const ranks = ranker(squidGame, ({hp}) => hp);
console.log(ranks);