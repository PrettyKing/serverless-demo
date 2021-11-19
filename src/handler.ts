interface StatusData{
    credit_count:number,
    elapsed:number,
    errpr_code:number,
    timestamp:string
}

interface Price {
    quote:{
        USDT:{
            pricr:number
        }
    }
}

const Bid = {
    "BNB":"1839",
    "ETH":"1027"
} as const

type GetValue<T> = {
    [P in keyof T]:P
}[keyof T]

type Value = GetValue<typeof Bid>

interface ResponseData{
    status:StatusData,
    data:{
        [key in Value]:Price
    }
}
export async function handleRequest():Promise<Response>{

    const data = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1027,1839&CMC_PRO_API_KEY=fb85a53d-5b3f-4847-88f0-a086195527fc&convert=USDT",{
        headers:{
            "Content-Type":"application/json"
        }
    }).then(response => response.json<ResponseData>()).then(data => (data as any).data)

    const value = JSON.stringify({
        [Bid.ETH]:data[Bid.ETH].quote.USDT.price,
        [Bid.BNB]:data[Bid.BNB].quote.USDT.price
    })

    // Bits.put(String(Date.now(),value)

    console.log(value)

    return new Response(value,{
        headers:{
            "Content-Type":"application/json"
        }
    })
}

addEventListener('scheduled',(event:{waitUntil:(arg0:Promise<void>)=>void})=>{
    event.waitUntil(
        handleScheduled()
    )
})

async function handleScheduled(){
    handleRequest()
}

// export async function handleRequest(request: Request): Promise<Response> {
//   return new Response(`request method: ${request.method}`)
// }
