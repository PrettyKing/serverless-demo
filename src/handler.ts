// interface StatusData{
//     credit_count:number,
//     elapsed:number,
//     error_code:number,
//     timestamp:string
// }

// interface Price {
//     quote:{
//         USDT:{
//             price:number
//         }
//     }
// }

// type GetValue<T> = {
//     [P in keyof T]:P
// }[keyof T]

// type Value = GetValue<typeof Bid>

// interface ResponseData{
//     status:StatusData,
//     data:{
//         [key in Value]:Price
//     }
// }

import { IDatas } from './interface/quotesRespon'

// Ajv
const obj = {
    ETH: 0,
    BNB: 0,
}
const dir = {
    ETH: 1027,
    BNB: 1839,
}

const Bid = {
    BNB: '1839',
    ETH: '1027',
} as const

const item = [1027, 1839] as const
const numItem: number[] = []
for (const item in dir) {
    const _item = <keyof typeof dir>item
    numItem.push(dir[_item])
}

export async function handleRequest(): Promise<Response> {
    let result: IDatas<typeof item> = await fetch(
        'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1027,1839&CMC_PRO_API_KEY=fb85a53d-5b3f-4847-88f0-a086195527fc&convert=USDT',
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    ).then((response) => response.json())

    const value = JSON.stringify({
        [Bid.ETH]: result.data[1027].quote.USDT.price,
        [Bid.BNB]: result.data[1839].quote.USDT.price,
    })
    return new Response(value, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

addEventListener(
    'scheduled',
    (event: { waitUntil: (arg0: Promise<void>) => void }) => {
        event.waitUntil(handleScheduled())
    },
)

async function handleScheduled() {
    handleRequest()
}

// export async function handleRequest(request: Request): Promise<Response> {
//   return new Response(`request method: ${request.method}`)
// }
