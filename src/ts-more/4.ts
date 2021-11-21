// 类型获取对象的值
//typeof obj
export type GetValue<T> = {
  [P in keyof T]: T[P];
}[keyof T];

//infer == T[P];

const obj = {
  ETH: 100,
  BNB: 'xxx',
};

type xxx = GetValue<typeof obj>;
