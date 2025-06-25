const db = require('../models');
const State = db.State;

exports.findAll = async (req, res) => {
  const countries = await State.findAll();
  res.send(countries);
};

exports.create = async (req, res) => {
  const State = await State.create(req.body);
  res.send(State);
};

exports.update = async (req, res) => {
  await State.update(req.body, { where: { id: req.params.id } });
  res.send({ message: 'Updated' });
};

exports.delete = async (req, res) => {
  await State.destroy({ where: { id: req.params.id } });
  res.send({ message: 'Deleted' });
};