const request = require('supertest');

const app = require('../../src/app');

const email = `${Date.now()}@email.com`;

test('Deve listar todos os usuários', async () => {
  const response = await request(app).get('/users');
  expect(response.status).toBe(200);
  expect(response.body.length).toBeGreaterThanOrEqual(0);
});

test('Deve inserir usuário com sucesso', async () => {
  const user = { name: 'Alice', email, password: '123456' };
  const response = await request(app).post('/users').send(user);
  expect(response.status).toBe(201);
  expect(response.body.name).toBe('Alice');
});

test('Não deve inserir usuário sem nome', async () => {
  const res = await request(app).post('/users')
    .send({ email: 'thiago@t2c.com.br', password: '123456' });

  expect(res.status).toBe(400);
  expect(res.body.error).toBe('Nome é um atributo obrigatório');
});

test('Não deve inserir usuário sem e-mail', async () => {
  const res = await request(app).post('/users')
    .send({ name: 'Alice', password: '123456' });

  expect(res.status).toBe(400);
  expect(res.body.error).toBe('E-mail é um atributo obrigatório');
});

test('Não deve inserir usuário sem senha', (done) => {
  request(app).post('/users')
    .send({ name: 'Alice', email })
    .then((res) => {
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('Senha é um atributo obrigatório');
      done();
    })
    .catch((err) => done.fail(err));
});

test('Não deve inserir usuário com email existente', async () => {
  const user = { name: 'Alice', email, password: '123456' };
  const response = await request(app).post('/users').send(user);
  expect(response.status).toBe(400);
  expect(response.body.error).toBe('Já existe um usuário com esse e-mail');
});
