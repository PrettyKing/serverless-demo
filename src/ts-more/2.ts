// import Ajv, { JTDDataType } from 'ajv/dist/jtd';
// import fetch from 'node-fetch';
// const ajv = new Ajv();
const schema = {
  properties: {
    foo: { type: 'int32' },
  },
  optionalProperties: {
    bar: { type: 'string' },
  },
} as const;
// type MyData = JTDDataType<typeof schema>;
// const validate = ajv.compile<MyData>(schema);

// const validData = {
//   foo: 1,
//   bar: 'abc',
// };

// (async () => {
//   await fetch('http://localhost:3000/', {})
//     .then((response: Response) => response.json())
//     .then((data: MyData) => {
//       if (validate(data)) {
//         console.log('🐻', data);
//       } else {
//         console.log('😔-->', '🍊🍊🍊🍊🍊');
//       }
//     });
// })();
