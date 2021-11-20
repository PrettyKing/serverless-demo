type A = keyof any;

const a: PropertyKey = ""

// 开发三方接口
interface A1 { }

// 业务
type AA = string | number;

//抽象类
abstract class AAA { }

//正常的类
class AAAA extends AAA {


}
// in keyof typeof




const obj = {
    ETH: 0,
    BNB: 0,
}

const dir = {
    ETH: 1027,
    BNB: 1839,
}

const numItem: number[] = []

for (const item in dir) {
    const _item = <keyof typeof dir>item
    numItem.push(dir[_item])
}

const num = [1027, 1839] as const;

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never;


type xx = ElementType<typeof num>

type GetValue<T> = {
    [P in keyof T]: T[P]
}[keyof T]

type xxx = GetValue<typeof dir>

// interface IDatas<>{
//     status:Status,
//     data:
// }
