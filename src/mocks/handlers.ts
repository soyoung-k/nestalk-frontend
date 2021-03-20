import { rest } from 'msw';

export const handlers = [
  rest.post('http://localhost:8080/api/auth', (req: any, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiaXJ0aGRheSI6IjIwMjEtMDMtMjAiLCJlbWFpbCI6InRlc3QxMjNAdGVzdC5jb20iLCJuYW1lIjoi6rmA66-466-4IiwicGhvbmUiOiIwMTAtMzMzMy0zMzMzIiwidXNlcklkIjowfQ.NK6zrBpeomkQIzC4YtiiDJIuGclB88ZfQA14eCeQF3U',
        user: {
          birthday: '2021-03-20',
          email: 'test123@test.com',
          name: '김미미',
          phone: '010-3333-3333',
          userId: 0,
        },
      }),
    );
  }),
];
