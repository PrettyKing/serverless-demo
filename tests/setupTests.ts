// import '@testing-library/jest-dom/extend-expect';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

// const server = setupServer(
//   rest.post('/login', (req, res, ctx) => {
//     console.log('req: ', req);
//     return res(ctx.json({ token: 'mocked_user_token' }));
//   })
// );
// beforeAll(() => server.listen());
// afterEach(() => {
//   jest.resetAllMocks();
//   jest.restoreAllMocks();
//   server.resetHandlers();
// });

// beforeEach(() => {
//   jest.spyOn(console, 'error').mockImplementation(() => {});
// });

// afterEach(() => {
//   try {
//     expect(console.error).not.toHaveBeenCalled();
//   } catch (e) {
//     console.log('⏰', '请确保在测试期间一切console.error不能被调用');
//   }
// });
// afterAll(() => server.close());
