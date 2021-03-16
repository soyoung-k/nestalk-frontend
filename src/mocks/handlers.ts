import { rest } from 'msw';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts/101', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        userId: 1234,
        id: 101,
        title: 'Hello MSW!',
        body: 'This is mocked response by handlers.ts',
      }),
    );
  }),
];
