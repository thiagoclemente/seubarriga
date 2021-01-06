const request = require('supertest');
const app = require('../../src/app');

const MAIN_ROUTE = '/accounts/';
let user;

beforeAll(async () => {
  const res = await app.services.user.save({ name: 'User Account', email: `${Date.now()}@email.com`, password: '112233' });
  user = { ...res[0] };
});

test('Deve inserir uma conta com sucesso', async () => {
  const result = await request(app).post(MAIN_ROUTE)
    .send({ name: '# Conta 1', user_id: user.id });

  expect(result.status).toBe(201);
  expect(result.body.name).toBe('# Conta 1');
});
