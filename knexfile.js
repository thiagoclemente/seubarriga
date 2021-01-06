module.exports = {
  test: {
    client: 'pg',
    version: 'alpine',
    connection: {
      host: 'localhost',
      user: 'default',
      password: 'secret',
      database: 'seubarriga',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
