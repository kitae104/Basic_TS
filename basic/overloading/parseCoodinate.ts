interface Coordinate{
  x: number;
  y: number;
}

function parseCoordinateFromObject(obj: Coordinate) : Coordinate
{
  return {...obj,}
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate
{
  return {x, y,}
}


//함수 오버로딩(Overloading)할 함수 원형
export function parseCoordinate(obj: Coordinate) : Coordinate;
export function parseCoordinate(x: number, y: number): Coordinate;
export function parseCoordinate(x: string): Coordinate;

// 실제 구현하는 함수 - 매겨변수의 갯수가 유동적일 경우 Optional 사용 
export function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate
{
  let coord: Coordinate = {
    x: 0, 
    y: 0,
  }

  if(typeof arg1 == 'object')     // 함수 인수가 객체인 경우 런타입 체크를 위해 object 사용 
  {    
    coord = {
      ...(arg1 as Coordinate)     // unknown 타입은 반드시 캐스팅해야
    }
  } 
  else if(typeof arg1 == 'string')  // "x:111,y:222" 형태 
  {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as 'x'|'y'] = parseInt(value, 10);  // Coordinate의 객체에서 키는 x 아니면 y로 설정 
    });
  }
  else 
  {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    }
  }
  return coord;
}

