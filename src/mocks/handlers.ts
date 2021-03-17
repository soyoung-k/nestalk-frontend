import { rest } from 'msw';

export const handlers = [
  rest.post('http://localhost:8080/api/auth', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: 'string',
        user: {
          birthday: '2021-03-17',
          email: `${req.body.email}`,
          name: '김철수',
          phone: '010-000-0000',
          userId: 0,
        },
      }),
    );
  }),
];
