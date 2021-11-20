import { IDatas } from '../interface/quotesRespon';

// Ajv
const obj = {
  ETH: 0,
  BNB: 0,
};
const dir = {
  ETH: 1027,
  BNB: 1839,
};
const item = [1027, 1839] as const;
const numItem: number[] = [];
for (const item in dir) {
  const _item = <keyof typeof dir>item;
  numItem.push(dir[_item]);
}

// fetch(
//   'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1027,1839&CMC_PRO_API_KEY=eaf93f20-4819-4f6d-9bff-ced0cdf45356&convert=USDT'
// )
//   .then((response) => response.json())
//   .then((result:IDatas<typeof item>) => {
//     console.log(result.data[1839].quote.USDT.price);
//   });
