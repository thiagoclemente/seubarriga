module.exports = (app) => {
  const findAll = (filter = {}) => app.db('accounts').where(filter).select();

  const save = async (account) => app.db('accounts').insert(account, '*');

  return { findAll, save };
};
