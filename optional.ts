// 1. 옵셔널 파라미터(Optional Parameters)
// extra는 있을 수도 있고 없을 수도 있다고 ? 를 추가해서 옵셔널로 지정
export function printIngredient(quantity: string, ingredient: string, extra?: string) 
{
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""}`);
}

// 2. 옵셔널 필드(Optional Fields)
interface User {
  id: string,
  info? : {
    email? : string;
  }
}

export function getEmail(user: User): string 
{
  return user?.info?.email ?? "No Email";     // 널 병합 연산자 
}

// 3. 옵셔널 콜백(Optional Callback)
function addWithCallback(x: number, y: number, callback?: () => void): void 
{
  console.log([x, y]);
  callback?.();
}