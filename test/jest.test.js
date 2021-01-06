test('Devo conhecer os principais assrtivas do jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test('Devo saber trabalhar com objetos', () => {
  const obj = { name: 'Thiago', email: 'thiago@t2c.com.br' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'Thiago');
  expect(obj.name).toBe('Thiago');

  const obj2 = { name: 'Thiago', email: 'thiago@t2c.com.br' };
  expect(obj).toEqual(obj2);
  expect(obj).toBe(obj);
});
