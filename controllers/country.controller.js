const db = require('../models');
const Country = db.Country;

exports.findAll = async (req, res) => {
  const countries = await Country.findAll();
  res.send(countries);
};

exports.create = async (req, res) => {
  const country = await Country.create(req.body);
  res.send(country);
};

exports.update = async (req, res) => {
  await Country.update(req.body, { where: { id: req.params.id } });
  res.send({ message: 'Updated' });
};

exports.delete = async (req, res) => {
  await Country.destroy({ where: { id: req.params.id } });
  res.send({ message: 'Deleted' });
};
