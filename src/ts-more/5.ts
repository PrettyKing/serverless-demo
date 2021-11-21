/**
 *  Partial<T>
 *   Required<T>
 *   Readonly<T>
 *   Pick<T, K>
 *   Omit<T, K>
 *   Extract<T, U>
 *   Exclude
 *   Record<K,T>
 *   NonNullable<T>
 *   instanceof、in、typeof
 */

//// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

// type Required<T> = {
//   [P in keyof T]-?: T[P];
// };

export interface User {
  id: number;
  age: number;
  name: string;
}

// 至关于: type PartialUser = { id?: number; age?: number; name?: string; }
type PartialUser = Partial<User>;
//去掉问号
type PullDownRefresh = Required<Partial<PartialUser>>;
// 至关于: type PickUser = { id: number; age: number; }
type PickUser = Pick<User, 'id' | 'age'>;  //所有的可选
// 至关于: type PickUser = { age: number; name: string; }
type OmitUser = Omit<User, 'id' | 'age'>; // 所有的必选
// 至关于: type A = 'a'
type A = Exclude<'x' | 'a', 'x' | 'y' | 'z'>;

// interface User {
//   id: number;
//   age: number;
//   name: string;
// }
// type Select = 'id' | 'age';
// type PartialSelect = Partial<Pick<User, Select>>;
// type OmitUser = Omit<User, Select>;

// type FInal = PartialSelect & OmitUser;
// const data1: FInal = {
//   name: '一灯',
//   //age: 1234,
// };
type SelectPartial<T, V extends keyof T> = Partial<Pick<T, V>> & Omit<T, V>;

type final = SelectPartial<User, 'age' | 'name'>;

const res: final = {
  id: 20,
};

//Extract允许您通过选择两种不同类型中存在的属性来构造类型
interface FirstType {
  id: number;
  firstName: string;
  lastName: string;
}

interface SecondType {
  id: number;
  address: string;
  city: string;
}

type ExtractType = Extract<keyof FirstType, keyof SecondType>;
type ExcludeType = Exclude<keyof FirstType, keyof SecondType>;

//交叉类型  &
//联合类型  number | string
//通用类型 泛型

class Foo {
  bar() {
    return 'Hello World';
  }
}

class Bar {
  baz = '123';
}

function showType(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.bar());
    return arg.bar();
  }

  throw new Error('The type is not supported');
}

showType(new Foo());
// Output: Hello World

showType(new Bar());
// Error: The type is not supported

type NonNullable<T> = T extends null | undefined ? never : T;

type xx = NonNullable<string>;

// T<A<S[<A,B>]>>
